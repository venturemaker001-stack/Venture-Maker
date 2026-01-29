import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// 관리자 이메일
const ADMIN_EMAIL = 'hivrometric@gmail.com';

export async function POST(request: NextRequest) {
  try {
    // Resend API 키 확인
    if (!process.env.RESEND_API_KEY) {
      console.error('[Email] RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: '이메일 서비스가 설정되지 않았습니다. RESEND_API_KEY를 확인해주세요.' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { type, formData, userEmail } = body;

    console.log('[Email] Received request:', { type, hasFormData: !!formData, userEmail });

    // userEmail이 없어도 관리자에게는 발송 (SWOT/R&D는 전화번호만 있음)
    // if (!userEmail) {
    //   return NextResponse.json(
    //     { error: '이메일 주소가 필요합니다.' },
    //     { status: 400 }
    //   );
    // }

    // 폼 타입에 따른 제목 및 내용 생성
    let adminSubject = '';
    let adminContent = '';
    let userSubject = '';
    let userContent = '';

    if (type === 'strategy') {
      adminSubject = `[벤처메이커] 종합 진단 신청 - ${formData.name || '익명'}`;
      adminContent = `
        <h2>종합 진단 신청이 접수되었습니다.</h2>
        <h3>신청자 정보</h3>
        <ul>
          <li><strong>성명:</strong> ${formData.name || '-'}</li>
          <li><strong>회사명:</strong> ${formData.company || '-'}</li>
          <li><strong>이메일:</strong> ${userEmail}</li>
          <li><strong>업종/아이템:</strong> ${formData.industry || '-'}</li>
          <li><strong>기업 단계:</strong> ${formData.year || '-'}</li>
          <li><strong>매출 규모:</strong> ${formData.revenue || '-'}</li>
          <li><strong>주요 고민:</strong> ${formData.concerns || '-'}</li>
        </ul>
        <p><strong>접수 시간:</strong> ${new Date().toLocaleString('ko-KR')}</p>
      `;

      userSubject = '[벤처메이커] 종합 진단 신청이 접수되었습니다';
      userContent = `
        <h2>종합 진단 신청이 정상적으로 접수되었습니다.</h2>
        <p>${formData.name || '고객'}님,</p>
        <p>벤처메이커에 종합 진단 신청을 해주셔서 감사합니다.</p>
        <p>전문 컨설턴트가 검토 후 빠른 시일 내에 연락드리겠습니다.</p>
        <hr>
        <h3>신청 내용</h3>
        <ul>
          <li><strong>업종/아이템:</strong> ${formData.industry || '-'}</li>
          <li><strong>기업 단계:</strong> ${formData.year || '-'}</li>
          <li><strong>매출 규모:</strong> ${formData.revenue || '-'}</li>
          <li><strong>주요 고민:</strong> ${formData.concerns || '-'}</li>
        </ul>
        <p>문의사항이 있으시면 언제든지 연락주세요.</p>
        <p>감사합니다.<br>벤처메이커</p>
      `;
    } else if (type === 'rnd') {
      adminSubject = `[벤처메이커] R&D 연구 과제 생성 요청 - ${formData.name || '익명'}`;
      adminContent = `
        <h2>R&D 연구 과제 생성 요청이 접수되었습니다.</h2>
        <h3>신청자 정보</h3>
        <ul>
          <li><strong>성명:</strong> ${formData.name || '-'}</li>
          <li><strong>회사명:</strong> ${formData.company || '-'}</li>
          <li><strong>이메일:</strong> ${userEmail}</li>
          <li><strong>연락처:</strong> ${formData.rndPhone || '-'}</li>
          <li><strong>주력 제품/서비스:</strong> ${formData.rndItem || '-'}</li>
          <li><strong>기술적 특징:</strong> ${formData.rndTech || '-'}</li>
        </ul>
        <p><strong>접수 시간:</strong> ${new Date().toLocaleString('ko-KR')}</p>
      `;

      userSubject = '[벤처메이커] R&D 연구 과제 생성 요청이 접수되었습니다';
      userContent = `
        <h2>R&D 연구 과제 생성 요청이 정상적으로 접수되었습니다.</h2>
        <p>${formData.name || '고객'}님,</p>
        <p>벤처메이커에 R&D 연구 과제 생성 요청을 해주셔서 감사합니다.</p>
        <p>요청하신 연락처(${formData.rndPhone || '-'})로 상세한 리포트가 발송될 예정입니다.</p>
        <hr>
        <h3>신청 내용</h3>
        <ul>
          <li><strong>주력 제품/서비스:</strong> ${formData.rndItem || '-'}</li>
          <li><strong>기술적 특징:</strong> ${formData.rndTech || '-'}</li>
        </ul>
        <p>문의사항이 있으시면 언제든지 연락주세요.</p>
        <p>감사합니다.<br>벤처메이커</p>
      `;
    } else if (type === 'swot') {
      adminSubject = `[벤처메이커] SWOT 분석 요청 - ${formData.name || '익명'}`;
      adminContent = `
        <h2>SWOT 분석 요청이 접수되었습니다.</h2>
        <h3>신청자 정보</h3>
        <ul>
          <li><strong>성명:</strong> ${formData.name || '-'}</li>
          <li><strong>회사명:</strong> ${formData.company || '-'}</li>
          <li><strong>이메일:</strong> ${userEmail}</li>
          <li><strong>연락처:</strong> ${formData.swotPhone || '-'}</li>
          <li><strong>업종/아이템:</strong> ${formData.swotItem || '-'}</li>
          <li><strong>우리만의 강점:</strong> ${formData.swotStrength || '-'}</li>
        </ul>
        <p><strong>접수 시간:</strong> ${new Date().toLocaleString('ko-KR')}</p>
      `;

      userSubject = '[벤처메이커] SWOT 분석 요청이 접수되었습니다';
      userContent = `
        <h2>SWOT 분석 요청이 정상적으로 접수되었습니다.</h2>
        <p>${formData.name || '고객'}님,</p>
        <p>벤처메이커에 SWOT 분석 요청을 해주셔서 감사합니다.</p>
        <p>요청하신 연락처(${formData.swotPhone || '-'})로 상세한 리포트가 발송될 예정입니다.</p>
        <hr>
        <h3>신청 내용</h3>
        <ul>
          <li><strong>업종/아이템:</strong> ${formData.swotItem || '-'}</li>
          <li><strong>우리만의 강점:</strong> ${formData.swotStrength || '-'}</li>
        </ul>
        <p>문의사항이 있으시면 언제든지 연락주세요.</p>
        <p>감사합니다.<br>벤처메이커</p>
      `;
    } else if (type === 'consult') {
      adminSubject = `[벤처메이커] 상담 신청 - ${formData.name || '익명'}`;
      adminContent = `
        <h2>상담 신청이 접수되었습니다.</h2>
        <h3>신청자 정보</h3>
        <ul>
          <li><strong>성명:</strong> ${formData.name || '-'}</li>
          <li><strong>이메일:</strong> ${userEmail}</li>
          <li><strong>전화번호:</strong> ${formData.phone || '-'}</li>
          <li><strong>회사명:</strong> ${formData.company || '-'}</li>
          <li><strong>업종:</strong> ${formData.industry || '-'}</li>
          <li><strong>지역:</strong> ${formData.region || '-'}</li>
          <li><strong>상담 분야:</strong> ${formData.field || '-'}</li>
          <li><strong>상담 가능 시간:</strong> ${formData.availableTime || '-'}</li>
          <li><strong>남기실 말씀:</strong> ${formData.message || '-'}</li>
        </ul>
        <p><strong>접수 시간:</strong> ${new Date().toLocaleString('ko-KR')}</p>
      `;

      userSubject = '[벤처메이커] 상담 신청이 접수되었습니다';
      userContent = `
        <h2>상담 신청이 정상적으로 접수되었습니다.</h2>
        <p>${formData.name || '고객'}님,</p>
        <p>벤처메이커에 상담 신청을 해주셔서 감사합니다.</p>
        <p>전문 컨설턴트가 검토 후 빠른 시일 내에 연락드리겠습니다.</p>
        <hr>
        <h3>신청 내용</h3>
        <ul>
          <li><strong>상담 분야:</strong> ${formData.field || '-'}</li>
          <li><strong>상담 가능 시간:</strong> ${formData.availableTime || '-'}</li>
        </ul>
        <p>문의사항이 있으시면 언제든지 연락주세요.</p>
        <p>감사합니다.<br>벤처메이커</p>
      `;
    } else {
      return NextResponse.json(
        { error: '잘못된 요청 타입입니다.' },
        { status: 400 }
      );
    }

    // 관리자에게 이메일 발송
    console.log(`[Email] Sending email to admin: ${ADMIN_EMAIL}`);
    console.log(`[Email] Subject: ${adminSubject}`);
    
    let adminEmailResult: { data?: { id: string }; error?: { message: string; name?: string } };
    try {
      adminEmailResult = await resend.emails.send({
        from: 'onboarding@resend.dev', // Resend 테스트 발신. 실제 수신을 위해 도메인 인증 필요: https://resend.com/domains
        to: ADMIN_EMAIL,
        subject: adminSubject,
        html: adminContent,
      });
      
      if (adminEmailResult.error) {
        console.error('[Email] Resend API error:', adminEmailResult.error);
        return NextResponse.json(
          {
            error: '이메일 발송에 실패했습니다.',
            details: adminEmailResult.error.message || JSON.stringify(adminEmailResult.error),
            hint: 'Resend 대시보드(https://resend.com/domains)에서 도메인 인증을 완료했는지 확인하세요. 인증 전에는 onboarding@resend.dev로 특정 수신자만 가능할 수 있습니다.',
          },
          { status: 502 }
        );
      }
      
      console.log(`[Email] Admin email sent successfully:`, adminEmailResult.data?.id);
    } catch (resendError) {
      console.error('[Email] Failed to send admin email:', resendError);
      throw resendError;
    }

    // 신청자에게 자동 응답 이메일 발송 (실제 이메일 주소인 경우만)
    let userEmailResult = null;
    if (userEmail && userEmail.includes("@") && !userEmail.includes("@kakao.talk") && !userEmail.includes("@temp.com")) {
      try {
        console.log(`[Email] Sending auto-reply to user: ${userEmail}`);
        userEmailResult = await resend.emails.send({
          from: 'onboarding@resend.dev', // Resend 기본 도메인 (도메인 설정 후 변경 가능)
          to: userEmail,
          subject: userSubject,
          html: userContent,
        });
        
        if (userEmailResult.error) {
          console.error('[Email] Resend API error for user email:', userEmailResult.error);
        } else {
          console.log(`[Email] User email sent successfully:`, userEmailResult.data?.id);
        }
      } catch (userEmailError) {
        console.error('[Email] Failed to send user email:', userEmailError);
        // 사용자 이메일 발송 실패는 관리자 이메일 발송을 막지 않음
      }
    }

    return NextResponse.json({
      success: true,
      adminEmailId: adminEmailResult.data?.id,
      userEmailId: userEmailResult.data?.id,
    });

  } catch (error) {
    console.error('[Email] Email sending error:', error);
    console.error('[Email] Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      name: error instanceof Error ? error.name : undefined,
    });
    
    return NextResponse.json(
      { 
        error: '이메일 발송에 실패했습니다.', 
        details: error instanceof Error ? error.message : 'Unknown error',
        errorType: error instanceof Error ? error.constructor.name : typeof error,
      },
      { status: 500 }
    );
  }
}
