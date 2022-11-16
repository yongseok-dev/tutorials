# OAuth

- user의 요청으로 인증 제공자가 accessToken을 발급 -> 우리 서비스는 엑세스 토큰을 활용 인증
- 우리가 회원정보를 가지고 있지 않으면서, 회원을 식별할 수 있다

## 주체

1. Resource Owner
2. Resource Server
3. Auth
4. Client

## 등록

- 클라이언트가 리소스서버에 정보를 등록해야 함.
  Client ID, Client Secret, Authorized redirect URIs

## 인증

- 클라이언트 Authorized redirect URIs를 준비해야함.
- 서로 최소한의 권한만 받아가는 것이 좋음
- 사용자의 동의가 필요함

### 과정

- Resource Owner (로그인)-> Resource Server
- Resource Server (callback?code=XX)-> Resource Owner
- Resource Owner (callback?code=XX 접속)-> Client
- Client (id,key,code)-> Resource Server

## 액세스 토큰 발급

- Resource Server는 (id,key,code)를 확인 (AccessToken발급)-> client

## Client에서의 활용

- Resource Server와 API를 통해서 통신

## refresh token

- RFC6749
