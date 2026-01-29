# ChatGPT API 연동 문제 해결 가이드

## 현재 에러: "ChatGPT API 호출에 실패했습니다."

### 1. 환경 변수 확인
- `.env.local` 파일이 프로젝트 루트에 있는지 확인
- 파일 내용: `OPENAI_API_KEY=sk-proj-...` 형식인지 확인
- **중요**: Next.js는 `.env.local` 변경 후 서버 재시작이 필요합니다!

### 2. 서버 재시작
```bash
# 개발 서버 중지 (Ctrl+C)
# 그 다음 다시 시작
npm run dev
```

### 3. API 키 확인
제공하신 API 키가 `sk-proj-`로 시작하는데, 이것이 정상적인 OpenAI API 키인지 확인이 필요합니다.

일반적인 OpenAI API 키 형식:
- `sk-`로 시작
- 약 51자 길이

만약 다른 API 서비스의 키라면, API 엔드포인트를 변경해야 할 수 있습니다.

### 4. 에러 상세 정보 확인
브라우저 개발자 도구 (F12) → Console 탭에서 에러 상세 정보를 확인하세요.

### 5. 서버 로그 확인
터미널에서 Next.js 서버 로그를 확인하세요. 다음과 같은 메시지가 보일 수 있습니다:
- "API key format may be incorrect"
- "OpenAI API Error: ..."

### 6. API 키 테스트
터미널에서 다음 명령어로 API 키가 제대로 로드되는지 확인:
```bash
node -e "require('dotenv').config({ path: '.env.local' }); console.log(process.env.OPENAI_API_KEY ? 'Key loaded' : 'Key not found')"
```

## 일반적인 해결 방법

1. **서버 재시작**: 가장 흔한 원인입니다
2. **API 키 재확인**: OpenAI 대시보드에서 새 API 키 생성
3. **환경 변수 경로 확인**: `.env.local`이 프로젝트 루트에 있어야 함
4. **API 사용량 확인**: OpenAI 계정의 사용량 한도 확인

## 추가 디버깅

개발 모드에서 더 자세한 로그를 보려면:
- 브라우저 콘솔 확인
- 서버 터미널 로그 확인
- Network 탭에서 `/api/chat` 요청의 응답 확인
