# 섹션 10: SQL소개
## 모듈소개 및 마무리
- 현실적인 데이터 저장하기
    - 메모리에 계속 저장하기는 어렵고, 파일은 속도가 느림
- 데이터 접근성 중요(효율성, 속도)
## SQL
- 테이블 컬럼 레코드, 테이블 간의 커넥트 유리
- 데이터 스키마 사용의 장점
- 관계형데이터베이스 장점
- 쿼리: 구조화된 명령어
- 하나의 공유된 클라우드 데이터베이스를 만들이 거여룸
## NoSQL
- database, collections, documents
- 빠르고 효과적
- 스키마 없음, 관계 없음
- 수평스케일링이 쉽다
## 스케일
- 수평스케일링
    - 서버를 추가함 무한정 능릴 수 있음
- 수직스케링링
    - CPU 메모리 등을 올리는 방법
    - 무한정 늘릴 수 없다.
## MySQL
- MySQL Community Downloads
    [server](https://dev.mysql.com/downloads/mysql/)
    [workbench](https://dev.mysql.com/downloads/workbench/)
- schema 생성
## node-SQL 연결
- $ 'npm install --save mysql2'
- database.js 설정파일 생성
    - `.promise()` 처리가 필요함
- app.js 에 설정파일 로드
- excute() -> SQL 사용 가능
    - 비동기를 고려해서 `then().catch()`사용
    - SELECT: [데이터 레코드, 메타데이터]로 넘어오니 result[0]로 받으면 레코드만 확인 가능하다.
    - INSERT: VALUES (?,?,?),["A","B","C"] 꼴로 입력이 필요하다.

[<- 뒤로](./section09.md) [홈](../info.md) [다음 ->](./section11.md)