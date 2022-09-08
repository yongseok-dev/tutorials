# HTML: Semantics 시맨틱
## Crucial!
- HTML5은 무엇인가?
    - living standard
    - HTML은 설치해 사용하지 않는다. 브라우저가 읽고 렌더링 할 뿐이다.
- Block inline
    - 주어진 요소가 문서에 어떻게(어떤 공간에) 위치하는지를 정하게 된다.
    - `<h1></h1>`, `<p></p>`는 block 요소로 한줄을 다 차지한다.
    - `<a></a>`는 inline 요소로 앞선요소의 끝 바로 다음에 붙는다.
- div span
    - `<div></div>` 제네릭 block 요소로 내부에 넣은 콘텐츠를 그룹화 하는 컨테이너
    - `<span></span>` 제네릭 inline 요소로 내부에 넣은 콘텐츠를 그룹화 하는 컨테이너
- Semantic -> 의미와 관련된 마크업의 중요성
    - 과거 `div`로 가득한 페이지를 보면 엘리먼트를 보고 의미, 역할을 예측할 수 없다.
    - 스크린 리더 hook으로 사용 됨
    - 본인과 타인이 코드를 읽을 때 도움이 됨: 하지만 사람들 마다 자신이 생각하는 의미로 작성하는 경우가 많음.
    - Elements -> 마크업을 강조하거나 의미를 부여할 수 있다.
        - `<section>`: 제네릭 컨테이너 문서내에서 특정의미(독립성)를 갖는 단위(동작은 div와 같다)
        - `<article>`: 독립적 구성으로 다시 사용이 가능한 것들 
        - `<nav>`: 네비게이션바
        - `<main>`: 문서의 중요 내용(반복되는 부분 제외)
        - `<header>`, `<footer>`: 문서 상단, 하단의 반복되는 정보를 담는 경우가 많다
        - `<aside>`: 엄밀하게 문서가 핵심이 아닌 정보를 담는 제네릭 컨테이너
        - `<summary>` `<deta ils>`
        - `<time datetime=""></time>`
        - `<figure>~<figcaption>~~</figcaption></figure>`

- HTML Entities([entity code](https://entitycode.com/))
    - 특정 문자를 브라우저에서 렌더링하는 과정에서 다른 문자로 바꿔준다.
    - 부등호 포함된 내용 예) `0 &lt; 6` -> `0 < 6`
    - `&~;` 형태의 약속
    - entity_name, entity_number 둘다 사용 가능 

## Important
- 
## Nice To Have
- VSCode Tip: [Emmet](https://emmet.io/)
    - 축약구문을 통해서 빠르게 마크업이 가능
    - `>` `*` `+` `$*5`(넘버링)

- est
    - `<hr>`: horizontal rule
    - `<sub>`: 아래 첨자
    - `<sup>`: 윗 첨자
    - `<br>`: line break 

## 연습문제
 - <h1>&#9731;Snowman Productions <sup>&reg;</sup></h1>
`<h1>&#9731;Snowman Productions <sup>&reg;</sup></h1>`

[<- 뒤로](./section03.md) [홈](../README.md) [다음 ->](./section05.md)