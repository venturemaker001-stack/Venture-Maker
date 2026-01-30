import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// 관리자 이메일
const ADMIN_EMAIL = 'hivrometric@gmail.com';

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('[Email] RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: '이메일 서비스가 설정되지 않았습니다.' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { type, formData, userEmail } = body;

    let adminSubject = '';
    let adminContent = '';
    let userSubject = '';
    let userContent = '';

    if (type === 'strategy') {
      adminSubject = `[벤처메이커] 종합 진단 신청 - ${formData.name || '익명'}`;
      adminContent = `
        <h2>종합 진단 신청</h2>
        <ul>
          <li>성명: ${formData.name || '-'}</li>
          <li>회사명: ${formData.company || '-'}</li>
          <li>이메일: ${userEmail || '-'}</li>
          <li>업종: ${formData.industry || '-'}</li>
          <li>기업 단계: ${formData.year || '-'}</li>
          <li>매출 규모: ${formData.revenue || '-'}</li>
          <li>주요 고민: ${formData.concerns || '-'}</li>
        </ul>
      `;

      userSubject = '[벤처메이커] 종합 진단 신청 접수 완료';
      userContent = `
        <p>${formData.name || '고객'}님,</p>
        <p>종합 진단 신청이 정상적으로 접수되었습니다.</p>
      `;
    } else if (type === 'rnd') {
      adminSubject = `[벤처메이커] R&D 연구 과제 요청`;
      adminContent = `
        <ul>
          <li>성명: ${formData.name || '-'}</li>
          <li>회사명: ${formData.company || '-'}</li>
          <li>연락처: ${formData.rndPhone || '-'}</li>
          <li>아이템: ${formData.rndItem || '-'}</li>
          <li>기술 특징: ${formData.rndTech || '-'}</li>
        </ul>
      `;

      userSubject = '[벤처메이커] R&D 요청 접수 완료';
      userContent = `<p>요청이 정상적으로 접수되었습니다.</p>`;
    } else if (type === 'swot') {
      adminSubject = `[벤처메이커] SWOT 분석 요청`;
      adminContent = `
        <ul>
          <li>성명: ${formData.name || '-'}</li>
          <li>회사명: ${formData.company || '-'}</li>
          <li>연락처: ${formData.swotPhone || '-'}</li>
          <li>아이템: ${formData.swotItem || '-'}</li>
          <li>강점: ${formData.swotStrength || '-'}</li>
        </ul>
      `;

      userSubject = '[벤처메이커] SWOT 요청 접수 완료';
      userContent = `<p>요청이 정상적으로 접수되었습니다.</p>`;
    } else if (type === 'consult') {
      adminSubject = `[벤처메이커] 상담 신청`;
      adminContent = `
        <ul>
          <li>성명: ${formData.name || '-'}</li>
          <li>이메일: ${userEmail || '-'}</li>
          <li>전화번호: ${formData.phone || '-'}</li>
          <li>상담 분야: ${formData.field || '-'}</li>
        </ul>
      `;

      userSubject = '[벤처메이커] 상담 신청 접수 완료';
      userContent = `<p>상담 신청이 정상적으로 접수되었습니다.</p>`;
    } else {
      return NextResponse.json({ error: '잘못된 요청입니다.' }, { status: 400 });
    }

    // ✅ 관리자 이메일
    const adminResult = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ADMIN_EMAIL,
      subject: adminSubject,
      html: adminContent,
    });

    if (adminResult.error) {
      console.error('[Email] Admin email error:', adminResult.error);
      return NextResponse.json(
        { error: '관리자 이메일 발송 실패' },
        { status: 502 }
      );
    }

    // ✅ 사용자 이메일 (있을 때만)
    let userEmailId: string | undefined;

    if (userEmail && userEmail.includes('@')) {
      const userResult = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: userEmail,
        subject: userSubject,
        html: userContent,
      });

      if (!userResult.error) {
        userEmailId = userResult.data?.id;
      }
    }

    return NextResponse.json({
      success: true,
      adminEmailId: adminResult.data?.id,
      userEmailId,
    });
  } catch (error) {
    console.error('[Email] Fatal error:', error);
    return NextResponse.json(
      { error: '이메일 처리 중 오류 발생' },
      { status: 500 }
    );
  }
}
