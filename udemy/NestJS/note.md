# NestJS

## Typescript

- NestJS 기본 ts
- ts의 역할 - js의 주석과 같은 역할 / 브라우저와 node에 영향을 주지 않는다.
- 코드 작성 중 버그를 찾아주는 동료 역할 -> 편라함을 알고 있기
  -> 우리는 결국 js를 작성한다는 사실을 알고 있어야 함

### typescript 맛보기

- `tsc filename.ts` -> ts 컴파일
- `ts-node filename.ts` -> ts 실행
- interface를 통해서 해당 객체의 속성을 정의할 수 있고, 오류를 실시간으로 확인 가능

## 언어의 구문을 이해하기 -> 문서를 보면 된다.

### type: js에서 객체의 값과 객체가 가진 메소드의 요약이다.

#### 원시타입

- string
- number
- boolean
- void
- undefined
- symbol
- null

#### 객체타입

- functions
- arrays
- classes
- objects

#### type inference

- 선언과 할당을 동시에하면, 타입추론이 사용됨

#### variables type annotations

- 함수에서 무엇을 반환할지 모르는 경우
- 나중에 변수를 초기화 해야하는 경우
- type 이 변해야하는 경우

#### functions

- 인수에 대해서는 타입추론을 얻지 못하기 때문에 annotation으로 할당
- 리턴 값은 타입추론 발생하지만, 수동 할당이 적절함

#### objects

- 형태 기억하기

## TS의 디자인 패턴을 이해하기

### Tip

- 더미 API https://jsonplaceholder.typicode.com
