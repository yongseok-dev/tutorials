# CSS: 기초
## Crucial!
- CSS: 디자인 요소
    - `selector{ key:value; }` 패턴
        세미콜론 없으면 브라우저에서 별도 에러 표시는 없지만 해당 블록이 무시된다.->에디터에서 확인할 것
    - 효율적 디자인이 가능하다.
    - 많이 쓰는 것은 기억하겠지만, 아니라면 검색을 활용하자!
    - 인라인 / head `<style></style>` / head `<link>`
- Basic CSS
    - color, background-color->컨테이너 요소의 공간을 채움(안쪽), background->그라데이션, 이미지 등도 설정 가능 
- Including Style Correctly
- Color Systems
    - 140개의 영문으로 컬러를 정해둠
    - 다른 색상은 빛의 3원색 RGB color 활용
        1. `rbg(0,0,0)`~`rgb(255,255,255)`
        2. `#000000`~`#FFFFFF`
- font-family property
    - 폰트의 변경->브라우저에 빌트인 된 폰트가 기본이 된다.
        - 기기에 설치된 브라우저에 따라서 결과가 달라질 수 있다는 것을 인지해야한다.
        - 예비 글꼴을 추가로 할당해둔다
    - 추가 설치
## Important
- Common Text Properties
    - txet-align
    - font-weight
    - font-size
        - Relative: em, rem, vh, vw, % ...
        - Absolute: px, pt, cm, in, mm
    - text-decoration: 색상, 윗줄 취소선 밑줄, 쉐입(물결,직선 등)
    - line-height: 
## Nice To Have
- text-transform: none | capitalize | uppercase | lowercase | initial | inherit


[<- 뒤로](../section05.md) [홈](../README.md) [다음 ->](./section06.md)