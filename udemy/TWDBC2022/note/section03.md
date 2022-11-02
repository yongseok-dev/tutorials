# HTML:기초
## Crucial!
- HTML: HyperText markup Language
    - 초기 논문, 연구자료를 공유하기 위해 사용(구조화, 링크, 규격적 서식이 필요했음)
    - tag: `<i>이탤릭체</i>`
    - 필수 구조가 있음 -> Skeleton `!+Tap ->|`
        - `<!DOCTYPE html>`: 문서 시작
        - `<html></html>`: 최상위 태그
        - `<head></head>`: 메타정보 및 CSS, JS 링크, 검색에 주로 걸리는 부분임
        - `<body></body>`: 정보가 담겨 있음
- Element
    - VSCode: Tap ->| 사용하면 단축입력 편리
    - 브라우저를 차별하지 않고 적용된다.
- Paragraph `<p></p>`
    - 문단 구성, 블록요소 속성
- Heading `<h1></h1>...<h6></h6>`
    - 문단의 제목으로 세션을 구분하는 역할->H1 문서 최상위 제목, 다음은 순차적으로 적용되어야 함
    - 자체적으로 글자크기를 다르게 가지고 있음
- List 
    - `<ol><ol/>`: 숫자
    - `<ul></ul>`: 점
    - `<li></li>`: list item로 ol, ul의 하위 내용물로 넣어준다.
    - li 내부에 추가적인 ol, ul 사용이 가능하다.
- Anchor Tag `<a href=""></a>`
    - 속성: 태그와 태그 사이가 아닌, 여는 태그 내부에 선언 `<a href="">`
    - 추가적인 정보를 제공한다
- Image `<img src="">`
    - 닫는 태그가 없다
    - 속성에 `src="이미지 주소(경로/파일명.확장자)"`를 추가하면 된다.
    - 접근성을 고려해 `alt="이미지 설명"`을 넣을 수 있다. 이미지를 불러오지 못한 경우(스크린 리더 등)
- Boilerplate
    - html: `<!-- 주석 -->` 
    - VSCode: `cmd + /`
## Important
- MDN:Mozilla Developer Network
    - 공식문서는 아닌 오픈소스 HTML, CSS, JS에 대한 정보 제공
    - 언어배경, 튜토리얼, 태그소개 등
- Inspector
    - mac: cmd+option+i
    - win: F12
    - Elements: 원하는 요소를 쉽게 확인 가능. 내가 원하는 부분을 수정해 볼 수 있음(현 클라이언트에서만 변경 됨)
## Nice To Have
- VSCode Formating    
    - mac: `cmd + shift + P` -> Format Document(`shift + option + F`)
    - On Save: Settings -> format On Save 언어별로 설정 가능

* 연습문제를 제공하는 형태가 흥미로웠다.

[<- 뒤로](./section02.md) [홈](../info.md) [다음 ->](./section04.md)