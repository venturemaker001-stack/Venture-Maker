# 이메일이 안 올 때 (Resend)

## 1. Resend 대시보드에서 확인

1. **https://resend.com** 로그인
2. **Logs** 메뉴에서 방금 보낸 이메일 상태 확인
   - **Delivered** → 수신자 메일함(스팸함 포함) 확인
   - **Bounced / Failed** → 아래 설정 점검

## 2. 도메인 인증 (가장 흔한 원인)

- `onboarding@resend.dev` 로만 보낼 때는 **수신 제한**이 있을 수 있습니다.
- **내 도메인**을 Resend에 추가하고 인증해야 `koreanting1104@gmail.com` 등 **아무 주소**나 수신 가능합니다.

**설정 방법:**

1. https://resend.com/domains 접속
2. **Add Domain** → 보유한 도메인 입력 (예: `venturemaker.co.kr` 또는 사용 중인 사이트 도메인)
3. 안내된 **SPF, DKIM** DNS 레코드를 도메인 관리 페이지에 추가
4. 인증이 **Verified** 로 바뀐 뒤, 코드에서 `from` 주소를 해당 도메인으로 변경  
   예: `from: 'Venture Maker <noreply@venturemaker.co.kr>'`

도메인이 없으면 서브도메인(예: `mail.벤처메이커도메인.com`)도 가능합니다.

## 3. 스팸함 확인

- Gmail/네이버 등 **스팸함**을 꼭 확인해 보세요.
- `onboarding@resend.dev` 로 보내는 메일은 스팸으로 분류되는 경우가 많습니다.

## 4. API 키와 수신 주소

- **API Keys**: https://resend.com/api-keys 에서 키가 활성 상태인지 확인
- **수신 주소**: 코드/환경변수의 `ADMIN_EMAIL` 이 실제로 받을 주소(`koreanting1104@gmail.com`)와 같은지 확인

## 5. 정리

| 상황 | 조치 |
|------|------|
| Logs에 Delivered | 수신자 스팸함 확인, 받는 주소 확인 |
| Logs에 Bounced/Failed | 도메인 인증 또는 Resend 안내 메시지 확인 |
| 이메일이 아예 안 감 | 도메인 인증 후 `from`을 인증된 도메인으로 변경 |

도메인 인증을 완료한 뒤에도 안 오면, Resend Logs에 나온 에러 메시지를 알려주시면 다음 단계 안내할 수 있습니다.
