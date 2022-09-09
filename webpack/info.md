# Webpack
## 강좌정보
- [생활코딩 유튜브](https://www.youtube.com/watch?v=cp_MeXO2fLg&list=PLuHgQVnccGMChcT9IKopFDoAIoTA-03DA): 이 수업은 여러개의 파일을 하나의 파일로 묶어주는 개발 자동화 도구인 webpack을 다룹니다.(11개 강좌)

## 수강목적
- webpack에 대한 이해를 바탕으로 sass, typescript, jsx와 같은 언어들을 네이티브 언어로 컴파일한다.

## 기대효과
- webpack으로 생산성을 끌어올린다.

## 배울 내용
- webpack는 파일을 묶는 과정에서 여러가지 작업들이 실행되도록 작업 계획
- 개발 중에 파일이 수정 되었을 때 자동으로 브라우저의 내용을 리로드

## 학습방법
- 수강기간: 2022.09.09~

## 배운 것
### 사고/태도
- 프로그래밍 3단계
    - INPUT
    - PROCESS
    - OUTPUT
- 필요할 때 공부하자.
### 스킬
- 설정파일에도 조건문이 들어갈 수 있다면 보다 편하게 제어할 수 있는 가능성이 있음
### 지식
- 체이닝

## 1. 수업소개
- 자바스크립트의 경우 여러 패키지를 사용시 충돌이 발생할 가능성이높다.(var...)
    - 이를 해결하기 위해 Bundler(WebPack, Broserify, Parcel)를 사용
    - 여러 파일을 모듈에 넣을 수 있고, 자동화가 가능하다. 그러나 쉽지않다.

## 2. 웹팩이전의 세계와 모듈의 개념
- 수백개의 js 코드를 로드하고 있다면, 변수명의 충돌이 발생할 가능성이 많다.
- 여러 테크닉이 있음. 그 중 하나가 모듈임
- type="module" + export, import -> ES6 문법
- 네트워크 커넥션 수가 많아질 수록 속도가 저하되는 문제가 있음

## 3. 웹팩의 도입
- 여러 파일을 묶고,구버전 브라우저에서도 동작하도록 만들어주는 번들러의 필요에서 시작 
- webpack 설치
    $`npm install -D webpack webpack-cli`
    `.gitignore`에 `*/node_modules` 추가
- 엔트리 파일을 만들고 webpack 5.74.0 번들링
    $`npx webpack --entry ./source/index.js --output-path ./public/index_bundle.js`
- 버전 및 환경설정에 따라서 결과가 다를 수 있다.

## 4. 설정파일 도입
- 다양한 형태의 자원들을 webpack 사용시 단순하게 만들어준다.
- 체계적이고 보기 좋게 webpack [configuration](https://webpack.js.org/configuration/)를 사용해보자
- webpack.config.js 생성
- $`npx webpack --config webpack.config.js` => $`npx webpack`(단, webpack.config.js 이름 동일해야 동작)

## 5. 모드의 도입
- `mode: "development",` 변환된 코드를 조금은 풀어서 저장한다.
- 파일을 분리하거나, 조건문을 추가해 development, production을 스위칭하는 방법도 있다.

## 6. 로더의 도입
- webpack의 핵심: css 같은 파일도 함께 모듈화한다.
- [로더 키워드](https://webpack.js.org/loaders/)를 아는게 필요하다.
- Loading CSS: $`npm install --save-dev css-loader style-loader`
- 로더는 가공공장, config 모듈, 룰에서 파일을 만나면 로더다 돌아간다.(체이닝 동작)

## 7. output설정
- 파일을 어떻게 나눌 것 인지?
- entry, output에 정보를 추가한다.
    - `entry:{ index:"경로1", about:"경로2"}`
    - `filename: '[name]_bundle.js'`

## 8. 플러그인의 도입
- [플러그인](https://webpack.js.org/plugins/)은 결과물을 보다 자유롭게 다루게 된다.
- html-webpack-plugin 설치
    $`npm install --save-dev html-webpack-plugin`
- config 에서 로더와 다르게 직접 실행이 필요하다.
    - `const HtmlWebpackPlugin = require('html-webpack-plugin');`
    - `plugins:[new HtmlWebpackPlugin()]` 를 추가
- webpack output 위치의 파일을 삭제하고 webpack 을 돌리는게 좋다
    $`rm ./public/*.*; npx webpack`
- config 에서 `new HtmlWebpackPlugin()`에 인자를 넣어 주어야 각각 파일로 저장이 됨.
    ```javascript  
    new HtmlWebpackPlugin({
    template:'./source/index.html',
    filename:'./index.html',
    chunks:['index']
    }),
    ```
## 9. 선물
- 변경을 감지해서 webpack이 동작함
    $`npx webpack --watch`