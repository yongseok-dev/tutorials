# CSS: 선택자의 세계
## Crucial!
- Element
    - universal selector: `*{}`
        정말 모든 요소에 추가되기 때문에 리소스의 낭비가 발생한다.
    - 셀랙터 컨바인: `h1, h2 {}`
- ID: `#ID`
    - 고유식별자로 중복 되면 안된다. 
    - 띄어쓰기가 포함될 수 없다. 
    - 가급적 최소화 사용(정적 페이지 내 10개 정도)
- Class: `.class`
- Descendent: `li a {}` 
    - li 자식요소 중 a를 선택
- CSS Specificity
    - 선택되는 이유가 뭔지, 무엇이 먼저 적용되는지
## Important
- Adjacent: `h1 + p{ }` 인접선택자
- Direct Descendent: `div > li P{ }` 바로 하위요소
- Attribute
- Pseudo Elements
- Pseudo Class
## Nice To Have
- [컬러팔레트](https://coolors.co/palettes/trending)

[<- 뒤로](./section06.md) [홈](../info.md) [다음 ->](./section08.md)