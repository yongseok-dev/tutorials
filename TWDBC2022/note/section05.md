# HTML: table, form
## Crucial!
- `<table>`
    - 과거에는 표를 사용한 레이아웃과 디자인이 많았다.
    - 지금은 데이터를 제공하는 것이 의미에 맞을 것
    - `<th>`: 첫행의 컬럼명 입력 위치
    - `<tr>`: 테이블 row
    - `<td>`: 테이블 데이터 셀
- `<form>`: 전송 -> HTTP 요청
    - 여러 입력 칸의 컨테이너: 버튼, 입력창(id, pw), 샐렉트박스 등
    - action: 어디로 보낼지
    - method: 어떤 방식으로 보낼지 결정
- input
    - type: 'text', 'password', 'color' 등 많다, 입력 창 및 모양이 달라진다.(브라우저 차이도 발생)
        - checkbox -> checked -> on value, 여러개 선택 가능 미선택시 값이 가지 않음
        - radio -> 동일 name 여러개 중 하나만 선택
    - placeholder: 창 내부에서 안내
    - name: 전송되는 값의 이름
    - value: 전송되는 값
- label
    - input(ID에 연결)의 이름표에 해당하고, 레이블 클릭시 해당 인풋 포커싱 -> 체크박스의 경우 레이블을 클릭해도 체크가 됨
    - `<label><input></label>`: 형태도 가능함
- button
    - 통상 제츨울 위한 버튼 사용, 폼 밖에서는 동작하지 않음(JS 사용하면 다르게 동작하도록 만들 수 있다.)

## Important
- `<thead>` `<tbody>` `<tfoot>`
    - 정보의 역할을 제공
- range & text area
    - `type="range"`: min max step 설정가능 
    - `<textarea></textarea>`: 크기 지정 가능
- 유효성 검사
    - form, input의 빌트인 HTML
        - `required` 속성, `minrength`,`maxrength`
        - email, url 등을 type에 사용시 최소조건(해당 패턴)을 걸어준다.
    - frontend JS
    - backend

## Nice To Have
- `Colspan` `Rowspan`
    - `<td colspan="2">`-> 옆으로 2칸을 차지함
    - `<td rowspan="2">`-> 아래로으로 2칸을 차지함

* 연습문제
    - table 작성하기
[<- 뒤로](./section04.md) [홈](../info.md) [다음 ->](./section06.md)