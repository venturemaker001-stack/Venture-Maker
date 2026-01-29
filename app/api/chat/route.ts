import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// 테스트용 모의 응답 생성 함수 (원본 규칙: 100자 헤드라인 + 꿀팁 3가지)
function generateMockResponse(type: string, data: any): string {
  if (type === 'strategy') {
    return `**${data.industry} 기업의 혁신성장형 벤처인증을 통한 정책자금 확보와 세제 혜택 극대화 전략**

### 실무 적용 꿀팁 3가지

1. **벤처인증 준비**: 기술사업계획서 작성 시 R&D 투자 비중을 30% 이상으로 설정하면 심사 가점이 높아집니다.

2. **정책자금 신청**: 벤처인증 획득 후 6개월 이내에 신청하면 승인률이 2배 이상 높아집니다.

3. **세제 혜택 활용**: 법인세 50% 감면을 받으려면 창업벤처중소기업 요건을 충족해야 하므로, 사업자등록일 기준을 반드시 확인하세요.`;
  } else if (type === 'rnd') {
    return `**${data.item}의 품질 향상을 위한 기업부설연구소 연구과제명 추천 및 R&D 전략**

### 실무 적용 꿀팁 3가지

1. **연구과제명 작성**: "개발", "연구", "기술" 등의 키워드를 포함하면 심사에서 높은 점수를 받을 수 있습니다.

2. **기업부설연구소 설립**: 연구전담요원 2인 이상 배치 시 인증 요건을 충족할 수 있습니다.

3. **R&D 투자 증빙**: 연구개발비를 매출 대비 3% 이상 투자하면 벤처인증 심사에서 우대받습니다.`;
  } else if (type === 'swot') {
    return `**${data.item}의 강점을 극대화하고 약점을 보완하는 차별화 전략 SWOT 분석**

### 실무 적용 꿀팁 3가지

1. **강점 활용**: 핵심 경쟁력을 사업계획서에 구체적으로 명시하면 벤처인증 심사에서 높은 점수를 받을 수 있습니다.

2. **기회 포착**: 정부 정책자금과 인증 제도를 적극 활용하여 성장 동력을 확보하세요.

3. **위협 대응**: 시장 경쟁이 치열한 분야이므로, 특허나 기술 인증을 통한 진입 장벽을 구축하는 것이 중요합니다.`;
  }
  return '모의 응답을 생성할 수 없습니다.';
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data } = body;

    // 테스트 모드: 환경 변수에서 USE_MOCK_RESPONSE 확인
    const useMock = process.env.USE_MOCK_RESPONSE === 'true';
    
    if (useMock) {
      console.log('🧪 Using mock response for testing');
      const mockResponse = generateMockResponse(type, data);
      return NextResponse.json({ 
        success: true,
        content: mockResponse,
        mock: true, // 클라이언트에서 모의 응답임을 알 수 있도록
      });
    }

    // API 키는 환경 변수에서 가져옵니다
    const apiKey = process.env.OPENAI_API_KEY;
    
    if (!apiKey) {
      console.error('OPENAI_API_KEY is not set in environment variables');
      console.error('Available env vars:', Object.keys(process.env).filter(k => k.includes('OPENAI') || k.includes('API')));
      return NextResponse.json(
        { 
          error: 'API 키가 설정되지 않았습니다. 서버 환경 변수를 확인해주세요.',
          hint: '.env.local 파일이 있는지 확인하고, 서버를 재시작했는지 확인하세요.'
        },
        { status: 500 }
      );
    }

    // OpenAI 클라이언트 초기화
    const client = new OpenAI({
      apiKey: apiKey,
    });

    // 프롬프트 생성 (원본 HTML 코드 규칙 그대로)
    let prompt = '';
    const outputInstruction = "결과는 100자 이내의 매력적인 헤드라인 1줄과, 실무에 적용 가능한 중점 꿀팁 3가지로 간략하게 요약해서 마크다운 형식으로 보여주세요.";

    if (type === 'strategy') {
      const { industry } = data;
      prompt = `당신은 수석 경영 컨설턴트입니다. 업종: ${industry} 기업을 위한 핵심 성장 전략을 분석해주세요. ${outputInstruction}`;
    } else if (type === 'rnd') {
      const { item } = data;
      prompt = `당신은 R&D 전문가입니다. 아이템: '${item}'에 적합한 기업부설연구소 연구과제명을 추천해주세요. ${outputInstruction}`;
    } else if (type === 'swot') {
      const { item } = data;
      prompt = `당신은 전략가입니다. 아이템: '${item}'에 대한 SWOT 분석을 해주세요. ${outputInstruction}`;
    } else {
      return NextResponse.json(
        { error: '잘못된 요청 타입입니다.' },
        { status: 400 }
      );
    }

    // ChatGPT API 호출 (OpenAI SDK 사용)
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: '당신은 벤처메이커의 전문 경영 컨설턴트입니다. 실용적이고 구체적인 조언을 제공합니다.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const aiText = completion.choices[0]?.message?.content || '응답을 생성할 수 없습니다.';

    return NextResponse.json({ 
      success: true,
      content: aiText,
    });

  } catch (error) {
    console.error('API Error:', error);
    
    // OpenAI SDK 에러 처리
    if (error instanceof OpenAI.APIError) {
      let errorMessage = 'ChatGPT API 호출에 실패했습니다.';
      
      if (error.status === 401) {
        errorMessage = 'API 키가 유효하지 않습니다. API 키를 확인해주세요.';
      } else if (error.status === 429) {
        errorMessage = 'API 사용량 한도를 초과했습니다. 잠시 후 다시 시도해주세요.';
      } else if (error.status === 500) {
        errorMessage = 'OpenAI 서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
      } else if (error.message) {
        errorMessage = `API 오류: ${error.message}`;
      }
      
      return NextResponse.json(
        { 
          error: errorMessage, 
          details: {
            code: error.code,
            type: error.type,
            message: error.message,
          },
          status: error.status,
        },
        { status: error.status || 500 }
      );
    }
    
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
