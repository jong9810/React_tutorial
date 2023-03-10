//-------------------------------------------------------------------------------------------------------------------------------------------------

// 프로그래밍 팁
// 남의 코드를 가져올 때 <script> 태그에 src="코드 경로"로 불러온다.

// 코드를 가장 깔끔하게 짜는 방법은 안 짜는 것이다(프로그래밍계의 속담).
// ex) this(클래스 컴포넌트)가 어렵기 때문에 this를 안 쓰는 방법(함수 컴포넌트)이 나온 것이다.
// React로 만들지 않은 사이트도 React로 만들 수 있을 정도가 되려면 state 찾는 훈련을 해야한다.

// React 감 잡는 훈련!!!
// 아무 웹 사이트를 켜고 그 사이트에서 state가 무엇일지 찾아보기
// 더 나아가서 찾은 state가 어떤 데이터 타입일지 상상해보기
// ex) 로그인 state : boolean(true==로그인 함, false==로그인 안 함)

// CSS로 구현할 수 있으면 CSS로 하고, 그게 어려울 경우 state를 사용해서 구현하는 게 좋다.

// JSX랑 JavaScript는 웬만하면 섞어쓰지 말고 분리하는 것이 좋다.

//-------------------------------------------------------------------------------------------------------------------------------------------------

// REACT
// React 자체는 라이브러리이지만, React 생태계를 통틀어서는 프레임워크가 맞다.
// React는 state가 바뀌면 어딘가에 저장되어 있는 데이터가 화면에 보이게 한다.
// React는 자바스크립트이다.
// React는 데이터 중심으로 움직인다.

// React 사용 목적
// React의 주 목적은 데이터와 화면을 일치시키는 것이다(데이터 바뀜 -> 화면 자동으로 바뀜).

// React 주의사항
// React에서는 기존 html 태그는 소문자로, 사용자가 만든 컴포넌트는 대문자로 시작해야한다.
// React에서는 닫는 태그를 작성하지 않으면 에러가 발생한다.
// 리액트에서 문자열은 ""로, 자바스크립트 코드는 {}로 묶어주어야 한다.
// 반환하는 값이 여러 줄일 경우 소괄호로 묶어준다(return (값);). <- 코드 가독성을 위해서
// return에는 태그가 하나만 와야 한다(여러 개 태그 반환하는 경우에는 <></>(fragment)로 묶어주면 됨).
// react에서는 스테이트 객체를 함부로 바꾸지 말고 복사해서 수정해야 한다(불변성).
// ex)
// this.state.liked = true; // (X)
// this.setState({liked: true}); // (O) : 스테이트를 수정하는 방법(setState 메서드)

// pop, push, shift, unshift, splice -> 배열을 직접적으로 수정(불변성을 훼손시킴)
// splice, concat -> 새로운 배열을 만들어냄(불변성을 훼손시키지 않음)

// JavaScript : 화면이 어떻게 바뀔지 상상 -> 화면에 있는 데이터 자바스크립트로 바꿔주기
// React : 데이터가 어떻게 바뀔지 상상 -> 화면을 바꿔주기

// React 구성요소
// 컴포넌트(component) : 데이터와 화면을 하나로 묶어놓은 것(사용자 정의 태그).
// 스테이트(state) : 데이터(화면의 바뀔 부분을 스테이트로 만들어 주면 됨).
// 화면(screen) : render의 return 부분.

// React 방식(class, function)
// react를 사용하는 방법은 함수 방식과 클래스 방식으로 두 가지이다.
// 클래스 방식은 ErrorBoundary에서만 사용되고 거의 사용되지 않는다.

// 클래스 컴포넌트 : 코드를 읽을 수 있을 정도만 익히면 된다.

// 함수 컴포넌트
// React.useState() 메서드를 사용하여 스테이트를 정의하고 수정한다.
// ex) const [liked, setLiked] = React.useState(false);
// 함수 컴포넌트도 클래스 컴포넌트와 비슷하게 return 한 값이 화면에 표시됨.
// 함수 컴포넌트를 사용하면 this를 사용하지 않아도 돼서 헷갈릴 일이 없다(함수 컴포넌트 장점).
//

// ErrorBoundary
// 사이트 : https://velog.io/@bbaa3218/React-%EC%97%90%EB%9F%AC-%EB%B0%94%EC%9A%B4%EB%8D%94%EB%A6%ACError-Boundary
// 에러 바운더리는 하위 컴포넌트 트리의 어디에서든 자바스크립트 에러를 기록하며 깨진 컴포넌트 트리 대신 폴백 UI를 보여주는 React 컴포넌트로,
// 에러 경계는 렌더링 도중 생명주기 메서드 및 그 아래에 있는 전체 트리에서 에러를 잡아낸다.

// 코드
// ReactDOM.render(<LikeButton />, document.querySelector('#root')); // React 17버전 코드
// ReactDOM.createRoot(document.querySelector('#root')).render(<LikeButton />); // React 18버전 코드
// 웹팩의 핫 리로딩을 사용하려면 리액트 18버전 코드를 사용해야 한다.

// React에서 조건문 & 반복문
// React 정의 : Component의 return 안의 코드가 React이다.
// {this.state.liked ? 'Liked' : 'Like!'} // 조건문 대신 삼항 연산자를 사용
// {[1,2,3].map((i)=>{return <div>i<div>;})} // 반복문 대신 배열 map 메서드를 사용

// const [liked, setLiked] = React.useState(false); // 구조분해 할당 or 비구조화 할당
// 위 한줄 코드와 아래 두 줄 코드는 완전히 같은 코드이다(객체가 아니라 배열로 할당해야함).
// const liked = React.useState(false)[0]; // state
// const setLiked = React.useState(false)[1]; // state를 바꾸는 함수

// React Developer Tools
// 개발자 도구에 Components, Profiler 탭이 생김.
// Components 탭 : 컴포넌트와 스테이트를 확일할 때 사용
// Profiler 탭 : 성능 문제를 해결할 때 사용

//-------------------------------------------------------------------------------------------------------------------------------------------------

// JSX

// JavaScript + XML -> 자바스크립트이지만 형태는 html과 비슷한 문법

// 기존의 React.createElement() 대신에 html의 태그 문법으로 작성한다.

//-------------------------------------------------------------------------------------------------------------------------------------------------

// Babel 라이브러리

// JSX를 만나면 React.createElement()로 바꿔줌.

// babel 라이브러리 불러오기
// 1) <head> 태그에 아래 코드 추가.
// <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
// 2) babel 라이브러리 적용할 <script> 태그에 아래와 같이 type 속성 적용.
// <script type="text/babel">

//-------------------------------------------------------------------------------------------------------------------------------------------------

// 1. 구구단 게임

// <></> or React.Fragment : 빈 태그(fragment)로 태그들을 감싸주면 렌더링 할 때 쓸데없는 div 태그 하나가 생성되는 것을 막을 수 있다.
// () : 그룹 연산자, 연산의 우선순위를 바꿔줄 때도 사용하지만, 코드 가독성을 높일 때 사용하기도 한다(이 경우에는 생략 가능).

// 자바스크립트 기본 이벤트 핸들러 종류
// onClick, onChange, onSubmit, onLoad, onInput, onFocus, onBlur 등
// input 태그에서 변화가 있을 때, onChange나 onInput을 통해 콜백함수를 줄 수 있다.

// 이벤트 핸들러 팁
// <form> 태그로 감싸놓은 경우에는 <form> 태그에 onSubmit을 주고, <input>과 <button> 태그만 사용하는 경우 <button> 태그에 onClick을 준다.

// input 태그 속성
// value="값" : input 태그의 초기값을 "값"으로 설정해준다.
// input; <input ref={(c) => {this.input = c;}}/> : 클래스 컴포넌트에서 DOM을 input 변수에 대입해주는 코드이다.
// input 속성에 value와 onChange는 같이 써줘야 한다(컨트롤드 인풋).
// 만약 onChange가 없을 경우에는 defaultValue 속성으로 주면 된다(언컨트롤드 인풋).

// 클래스 컴포넌트를 사용하는 경우 콜백함수를 따로 뺄 때, 화살표 함수로 만들어야 한다(클래스 안에 있는 화살표 함수에서 this 가 클래스를 가리킴).
// render() 안에 메서드가 정의되어 있는 경우, render()를 호출할 때마다 메서드가 생성되기 때문에 성능에 좋지 않을 수 있다.
// 클래스 컴포넌트는 this.setState(), 함수 컴포넌트는 useState()메서드를 사용해서 state를 관리할 수 있다.

// state가 바뀌면 화면이 바뀌므로, 바뀐 state 값은 다음 화면에 보여줄 데이터이다.
// 바뀌기 전 state는 현재 화면에 보이는 데이터이다.
// setState() 안에 메서드를 정의해서 이전 state값으로 현재 state값을 만들어서 사용할 수 있다.

// setState()는 비동기 코드이다.
// 따라서 동일한 setState()를 여러 번 작성하고 실행을 시켜도 여러 번 적용이 되지 않을 수도 있다.
// 그렇기 때문에 이전 state 값을 현재 state 값으로 사용할 때에는 setState() 안에 메서드로 정의해서 사용하는 것이 좋다(setState 안에 this.state가 들어갈 때).

// React를 사용하면 document는 거의 사용하지 않는다.
// React가 화면을 컨트롤 해주고, 개발자는 데이터만 변경해준다고 생각하면 된다.

// React에서 class 속성은 사용할 수 없고 대신 className- 속성으로 사용해야 한다(javascript class와 헷갈리기 때문에 막힘).
// <label> 태그에 for 이라는 속성도 마찬가지 이유로 htmlFor로 대체해서 사용해야 한다.

// React Hook
// https://ko.reactjs.org/docs/hooks-overview.html
// Hook은 함수 컴포넌트에서 React state와 생명주기 기능(lifecycle features)을 “연동(hook into)“할 수 있게 해주는 함수이다.
// Hook은 class 안에서는 동작하지 않습니다. 대신 class 없이 React를 사용할 수 있게 해주는 것이다(function).
// (하지만 이미 짜놓은 컴포넌트를 모조리 재작성하는 것은 권장하지 않는다. 대신 새로 작성하는 컴포넌트부터는 Hook을 이용하면 된다.)

// React Hooks 종류
// 1) useState() : state를 선언하고 초기화할 때 사용.
// 2) userRef() : ref prop으로 DOM을 가져올 때 사용. 가져온 DOM을 사용할 때는 current를 붙여주어야 함. ex) inputRef.current.focus()
// 3) useEffect()

// Hook 사용시 단점
// 클래스 컴포넌트는 렌더링될 때 render() 부분만 새로 실행되기 때문에 메서드들이 다시 생성되지 않는다.
// 함수 컴포넌트는 렌더링될 때마다 컴포넌트 안의 함수(메서드)가 새로 생성되기 때문에 조금 더 느릴 수 있다(최적화 문제).
// Hooks 사용할 때 state 들을 하나의 객체로 저장할 경우, state를 바꿀 때 모든 state 들을 다시 적어주어야 해서 불편함.
// 따라서 Hooks 에서는 state 를 하나씩 따로 선언해주어야 한다.

// 하나의 함수 안에서 여러 state가 바뀌어도 여러 번 렌더링 되지 않고 한 번만 렌더링된다.
// Hooks가 비동기이기 때문에 setState를 모아서 한 번에 처리하기 때문에 렌더링이 한 번만 일어난다.
// setState가 비동기이기 때문에 이전 데이터를 사용하지 못해서 setState 내에 함수를 넣어서 이 문제를 해결한다(카운터(counter) 예제에서 많이 쓰임).

// DOM(Document Object Model, 문서 객체 모델)
// DOM은 객체 지향 모델로써 구조화된 문서를 표현하는 방식이다.
// DOM은 HTML, XML 문서의 프로그래밍 interface 이다.
// DOM은 자바스크립트와는 독립적인 기술 표준이다.
// DOM은 HTML, CSS와 같은 W3C의 기술의 한 종류이다.
// DOM은 문서의 구조화된 표현(structured representation)이다.
// 쉽게 말하면 html 태그를 document.querySelector()로 선택한 것이 DOM이다.

//-------------------------------------------------------------------------------------------------------------------------------------------------

// 2. 구구단 게임

// 웹 팩(Web Pack)
// 여러 개의 자바스크립트 파일을 하나로 합쳐서 하나의 자바스크립트 파일로 만들어주는 프로그램
// 바벨 적용, 쓸데없는 코드 삭제(console.log 등) 등 기능 사용 가능
// 웹팩을 사용하려면 node.js를 알아야 한다.
// 자바스크립트 파일이 엄청 많아도 html에서 사용하는 파일은 하나이기 때문에, 파일을 하나로 만들기 위해 웹팩을 사용한다.

// @babel/core: 기본적인 바벨.
// @babel/preset-env: 브라우저에 맞게 최신 문법을 옛날 문법으로 바꾸어줌(환경에 맞게 알아서 바꿔줌).
// @babel/preset-react: jsx를 react 문법으로 바꿔줌.
// babel-loader: 바벨과 웹팩을 연결해줌.
// 주의! 바벨 설정할 때, presets 만 해보고 에러가 나면 거기 나온 plugin을 추가해주는 것이 좋다(최소한의 것들만).

// 웹팩 절차
// (1) 터미널에서 프로젝트를 생성할 디렉토리로 이동한 후에 npm init
// (2) react 설치하기 위해 터미널에 npm i react react-dom
// (3) client.jsx, index.html, webpack.config.js, WordRelay.jsx(실제 웹에 보여줄 내용) 등 파일을 생성한다.
// (4) 웹팩 설치하기 위해서 터미널에 npm i -D webpack webpack-cli
// (5) webpack 설정에 필요한 바벨, 웹팩 서버 등 preset과 plugin을 설치한다.
// ex1) npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader
// ex2) npm i -D webpack-dev-server @pmmmwh/react-refresh-webpack-plugin react-refresh
// (6) webpack.config.js 파일에서 필요한 설정들을 해준다.
// (7) index.html 에서 <body> 태그 안에 <div id="root"></div>를 작성한다.
// (8) index.html 에서 하나로 합쳐진 파일을 <script src="./dist/app.js"></script>로 불러온다.
// (9) package.json 파일에서 '"test": ""'부분을 "dev": "webpack serve --env development" 으로 바꾼다.
// (10) 터미널에서 프로젝트를 생성한 디렉토리로 이동한 후에 npm run dev라고 입력한다.

// webpack.config.js(웹팩 설정 사이트: https://github.com/browserslist/browserslist)
/*/ ex)
const path = require('path'); // node에서 제공하는 경로를 조작하는 프로그램(파일)?
const webpack = require('webpack');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin'); 

module.exports = {
  name: 'word-relay-setting', // 어떤 파일에 설정을 해주는지 설명(생략해도 됨)
  mode: 'development', // 실제 서비스에서는 production으로 바꾸면 됨.
  devtool: 'eval', // 개발할 때는 'eval', 배포할 때는 'hidden-source-map'
  resolve: {
    extensions: ['.js', '.jsx'],
  }, // entry.app에 입력한 파일명 중 resolve.extensions에 입력한 확장자를 가진 파일을 찾아준다(entry.app에 확장자 생략가능).

  // entry랑 output이 제일 중요하다.
  entry: {
    app: ['./client'], // client.jsx 파일에서 WordRelay.jsx 파일을 이미 불러오고 있기 때문에 client.jsx만 입력하면 된다.
  }, // 입력 : 하나로 합칠 파일들을 배열로 입력한다.

  module: {
    rules: [
      {
        test: /\.jsx?/, // 규칙을 적용할 파일들(정규표현식: js와 jsx파일)
        loader: 'babel-loader', // 바벨 loader
        exclude: path.join(__dirname, 'node_modules'), // 모듈을 적용할 때 제외할 파일 경로
        options: {
          presets: [
            ['@babel/preset-env', {
              targets: {
                browsers: ['> 5% in KR', 'last 2 chrome versions'], // 최근 2 버전만 호환되게 하는 설정(최적화할 때 중요하다)
              },
              debug: true,
            }], // @babel/preset-env 의 설정을 적용하는 방법 
            '@babel/preset-react'
          ], // 적용할 바벨 preset들(preset: plugin들을 모은 것)
          plugins: [
            'react-refresh/babel', // 바벨이 최신 문법을 옛날 js 문법으로 번역할 때, 핫 리로딩 기능도 추가해줌.
        ], // 바벨 plugin들(plugin: 확장 프로그램)
        }, // 바벨에 대한 설정들
      },
    ],
  }, // entry에 있는 파일들을 가져와서 module을 적용한 후 output으로 보낸다.

  plugins: [
    new webpack.LoaderOptionsPlugin({debug: true}), // loader, options에 debug: true를 넣어줌
    new RefreshWebpackPlugin(), // 웹팩 서버 핫 리로딩 사용하기 위해 넣어줌(빌드 할 때마다 실행됨).
  ],

  output: {
    // path.join(기존경로, 합칠경로) -> 기존 경로와 합칠 경로를 받아서 하나의 경로로 함쳐준다.
    // __dirname : 현재 폴더 경로
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/',
  }, // 출력 : 합쳐진 파일을 어디에 저장할지, 어떤 이름으로 저장할지 등을 입력한다.

  devServer: {
    devMiddleware:{publicPath: '/dist/'}, // 웹팩이 빌드한 파일들이 저장될 경로
    static:{directory: path.resolve(__dirname)}, // 실제 존재하는 정적 파일들의 경로(index.html 등)
    hot: true, // 핫 리로딩
    port: 3000, // 몇 번 포트에 생성할지 설정
  },
};
*/

// 주의사항!
// command not found 에러가 뜰 때 해결방안
// 1) package.json 파일에 scripts 부분에다가 "dev": "webpack"이라고 적고 터미널에서 npm run dev로 실행한다.
// 2) 터미널에서 npx webpack이라고 입력해서 실행한다.
// 3)

// webpack.config.js
// plugin과 preset이 엄청 많기 때문에 먼저 최소한의 plugin과 preset만 추가한다.
// npm run dev를 해보고 에러가 뜨면 거기에 나온 plugin이나 preset을 추가한다.
// 자주 사용하는 preset, plugin은 공식문서를 읽어보는 것이 좋다(공식문서 링크: https://webpack.js.org/).
// webpack.config.js의 순서는 mode, entry, module, plugins, output 순으로 하는 게 좋다.
//

// 파일을 쪼갤 때, 윗 부분에 필요한 패키지나 파일들을 import하고, 아랫 부분에 다른 곳에서 쓸 컴포넌트를 export 해주어야 함.
// (1) import 예시
// const React = require('react');
// const {Component} = React;
// (2) export 예시
// module.exports = WordRelay; // WordRelay : 컴포넌트 이름 or 파일명 or 닉네임? 모르겠음

// react-refresh
// @pmmmwh/react-refresh-webpack-plugin
// webpack-dev-server : webpack.config.js에 적어준 대로 빌드의 결과물을 만든 후에 publicPath에 적어준 경로에 메모리로 저장해준다.
// 그 다음 index.html을 실행하면 핫 리로딩(변경점을 감지하여 결과물을 수정)하여 저장했던 결과물을 실행해준다.
// 핫 리로딩은 리로딩과 다르게 기존 데이터를 유지하면서 화면을 바꿔준다.

// path.resolve(__dirname) : resolve 는 / 를 절대경로로 처리, join 은 상대경로로 처리한다.

// HMR(Hot Module Replacement) :
// WDS(Webpack Dev Server) :

// 컨트롤드 인풋(controlled input) vs 언컨트롤드 인풋(uncontrolled input)
// 설명 사이트: https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/

// 1. 언컨트롤드 인풋 : value와 onChange 속성이 없는 <input> 태그(event.target 객체를 사용하여 value 값을 가져오는 방식)
// 언컨트롤드 인풋은 <input> 태그의 value 가 onSubmit 내부에서만 사용될 경우에는 사용하는 것도 나쁘지 않다.
// ex) 인풋에 값 입력하고 onSubmit에서 받아서 사용하는 경우(진짜 간단한 경우)
// 언컨트롤드 인풋에 초기값을 주고 싶은 경우 value가 아니라 defaultValue로 주면 된다(value가 있으면 컨트롤드 인풋으로 간주될 수 있기 때문).
// 하지만 value 가 더 복잡하게 사용되는 경우에는 컨트롤드 인풋을 사용하는 것이 좋다.

// 2. 컨트롤드 인풋 : 속성으로 value가 있고 onChange 속성으로 value를 바꿔 주는 <input> 태그
// 컨트롤드 인풋을 꼭 사용해야하는 경우
// (1) dynamic inputs : input에 값을 입력할 때 빨간 밑줄이 쳐진다던가 글자 색이 바뀐다던가 하는 변화가 있는 input인 경우
// (2) conditionally disabling submit button : 경우에 따라서 submit 버튼이 작동하지 않도록 하는 경우(버튼 자체가 안 눌리도록 할 수 있음)
// (3) instant field validation : 비밀번호와 같이 value 값이 조건을 만족하는지 안하는지 판단해야 하는 경우
// (4) enforcing input format : 비밀번호와 같이 value의 형식을 지정해주어야 하는 경우
// (5) several inputs for one piece of data : 여러 input 에서 받은 데이터를 하나로 합쳐야하는 경우

// Node.js
// https://hanamon.kr/nodejs-%EA%B0%9C%EB%85%90-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0/
// 쉽게 말하면 자바스크립트의 실행기.
// Node.js는 JavaScript를 서버에서도 사용할 수 있도록 만든 프로그램이다.
// Node.js는 V8이라는 JavaScript 엔진 위에서 동작하는 자바스크립트 런타임(환경)이다.
// Node.js는 서버사이트 스크립트 언어가 아니다. 프로그램(환경)이다.
// Node.js는 웹서버와 같이 확장성 있는 네트워크 프로그램을 제작하기 위해 만들어졌다.

// javascript 런타임, 비동기, 이벤트 루프
// https://hanamon.kr/javascript-%eb%9f%b0%ed%83%80%ec%9e%84-%ec%9e%91%eb%8f%99-%eb%b0%a9%ec%8b%9d-%eb%b9%84%eb%8f%99%ea%b8%b0%ec%99%80-%ec%9d%b4%eb%b2%a4%ed%8a%b8-%eb%a3%a8%ed%94%84/
// 런타임이란 프로그래밍 언어가 구동되는 환경을 말한다.
// 자바스크립트 런타임의 종류로는 웹 브라우저(크롬, 파이어폭스, 익스플로러 등)프로그램과 Node.js 라는 프로그램이 있다.

//-------------------------------------------------------------------------------------------------------------------------------------------------

// 3. 숫자야구 게임

// require - module.exports
// node의 모듈 시스템(common.js라고 부름, 웹팩에서는 꼭 node 모듈 시스템을 사용해야 함)
// 클래스나 함수를 module.exports에 할당하면 다른 파일에서 require 해서 사용할 수 있다.

// import - (export default || export const)
// es2015의 모듈 시스템(React(== jsx파일)에서 많이 사용함)
// require와 import는 호환이 되는 경우가 많다.
// 원래는 node 모듈 시스템을 사용해야 되지만 바벨이 es2015모듈 시스템을 node 모듈 시스템으로 바꿔준다.

// node 모듈 시스템에서 es2015 모듈 시스템으로 바꾸기
// 1) import : require -> import
// ex)
// const React = require('react');
// const {Component} = React;
// ->
// import React, {Component} from 'react';

// 2) export : module.exports -> export default, module.variable -> export const variable
// 엄밀히 말하면 module.export와 export default는 다르다(React에선 호환돼서 상관없음).
// ex)
// module.exports = WordRelay;
// module.hello = 'a'; or module.exports = {hello: 'a'};
// ->
// export default WordRelay;
// export const hello = 'a';

// 3) export const로 할 때와 export default로 할 때 import 차이
// default로 export한 경우에는 한 파일에서 한 번만 import 가능하지만,
// const로 export한 경우에는 변수명만 다르다면 한 파일에서 여러번 import 가능하다.
// ex)
// export const hello = 'a';
// export default NumberBaseball;
// ->
// import {hello};
// import NumberBaseball;

// webpack.config.js에서는 require, client.jsx, NumberBaseball.jsx 등에서는 import를 보편적으로 사용한다.
// 사실 다 require를 사용하면 아무 문제 없지만, import를 사용해서 개발을 하는 사람도 있으니 알아두자.

// react 반복문
// react에서 return 안에서는 반복문을 사용할 수 없기 때문에 map함수를 사용한다.
// map 콜백함수에서 return에 공통적으로 반복되는 부분은 그대로 쓰고, 바뀌는 부분을 배열로 만들어서 {el}로 넣어준다.
// 바뀌는 부분이 여러 개인 경우, 2차원 배열이나 배열-객체로 만들어서 map 함수를 적용하면 된다.

// map과 forEach 차이
// forEach는 배열의 원소를 하나씩 도는 for문을 메서드 형태로 바꾼 것이고,
// map은 배열의 원소나 배열의 원소 개수만큼 어떠한 동작을 하기 위해서 사용하는 메서드이다.

// <li>태그 key 속성(React)
// 리액트에서 <li>태그를 사용할 때는 key속성으로 고유한 값을 주어야 한다(id속성과 비슷).
// key 속성으로 index 값을 넣어주는 것은 성능 최적화에 문제가 되기 때문에 하지 말자(index 자체를 사용하면 안됨).
// 요소가 추가만 되는 배열인 경우에는 index를 key 속성으로 주어도 되지만 기본적으로 안된다고 알고 있자.
// react에서 key를 기준으로 요소를 추가하거나 수정, 삭제를 판단하기 때문에 index를 key 속성값으로 주면 배열의 순서(index)가 바뀔 때 문제가 생긴다.

// 컴포넌트 여러 파일로 쪼개서 만드는 이유
// 1) 하나의 파일로 만들면 코드가 너무 길어져서 가독성이 떨어지기 때문에 컴포넌트를 여러 파일로 쪼개서 import 해서 코드를 줄인다.
// 2) 반복문에서 성능 문제가 많이 발생하는데 그러한 것들을 해결하기 위해서 컴포넌트를 여러 파일로 쪼갠다(반복문 단위로 파일 쪼개는 것이 일반적).
// 3) 파일로 쪼개면 컴포넌트를 import만 해주면 어디서든 사용할 수 있기 때문에 재사용성 면에서도 좋다.

// props
// props는 리액트 컴포넌트에 값을 전달하기 위한 매개변수 역할을 한다(html의 속성과 비슷).
// ex)
// <Try index={i} /> // 컴포넌트 index 프롭에 i 값을 넣어줌.
// this.props.index 로 컴포넌트 내에서 i 값에 접근 가능하다.
// 숙달되기 전까지는 먼저 하나의 파일에 다 작성하고 컴포넌트로 만들고 싶은 부분을 새로운 파일로 만드는 방식으로 하는 게 좋다(top-down).
// 컴포넌트들을 먼저 만들고 조합하는 방식(bottom-up)은 입문자에게는 좀 어렵다.
// props가 생겨서 컴포넌트를 쪼갤 수 있기 때문에 컴포넌트들 간에 부모 자식 관계가 생긴다.
// ex)
// NumberBaseball 컴포넌트 안에 Try 컴포넌트가 있으면 Try 컴포넌트의 부모는 NumberBaseball 컴포넌트가 된다.
// 부모가 자식에게 props를 물려준다(props가 있으면 부모가 있구나라고 알아챌 수 있음).

// 복잡한 프로젝트로 가면 상속이 부모 자식간 뿐만 아니라 할아버지 손자간 등에서 발생할 수도 있다.
// 그럴 경우에 문제가 발생할 확률이 올라가는데 이때 사용하는 것이 redux, context, mobx 등이다.
// 쉽게 말하면 자산을 관리해주는 은행 역할을 하는 것이 redux, context, mobx 이다.

// react 주석 -> render(){return('이 부분이 react이다')}
// {/* react 주석은 js의 블록 주석을 중괄호로 감싸준 형태이다. */}

// 클래스 컴포넌트 안에 함수를 함수 선언문으로 선언하려면, 생성자 함수를 사용해야 하고,
// 생성자 함수 안에 this.함수 = this.함수.bind(this);라는 해괴한 코드를 작성해야 한다(함수 안에서 this 사용하게 하기 위해).
// 따라서, 화살표 함수를 사용해서 생성자 함수도 사용하지 않고 해괴한 코드도 작성하지 않도록 하는 것이 좋다.
// render()와 constructor()는 예외적으로 extends Component가 처리를 해주기 때문에 화살표 함수를 사용할 필요가 없다(this 사용 가능).

// 배열 state에 값을 추가할 때 push를 사용하면 안된다(불변성에 위배되기 때문).
// react는 예전 state와 현재 state가 다를 때 렌더링 해준다.
// push를 사용하면 react가 state에 어떤 변화가 생겼는지 감지하지 못한다.
// 배열에 push를 하면 참조관계 때문에 예전 state도 바뀌기 때문에 예전 state === 현재 state : true가 된다.
// 따라서 state가 배열인 경우에는 복사를 해서 요소를 추가한 후 setState를 통해 state를 바꿔주어야 한다.

// 함수 컴포넌트에서 useState()는 값을 넣어주면 변수를 그 값으로 초기화 해주고,
// useState()에 함수를 넣어주면 그 함수를 한 번 호출해서 리턴값으로 변수를 초기화 해준다(lazy init이라고 함). ex) useState(getNumbers)
// 만약 useState(getNumbers)를 해주면 렌더링될 때마다 함수는 실행이 되지만 리턴값은 처음 한 번만 변수에 저장되고 나머지는 무시한다.
// setAnswer()에는 함수(getNumbers)를 넣어주는 것보단, 함수의 리턴값(getNumbers())를 넣어주는게 맞다.
// setAnswer()도 useState()와 마찬가지로 값과 함수를 넣어줄 수 있기 때문에 함수를 넣어주어도 동작할 수도 있긴 하다.
// 하지만 setAnswer()에는 예전 스테이트로 현재 스테이트를 바꿔줄 때만 함수로 넣어주고, 그 이외에는 값을 넣어주자.

// 개발 모드에서 배포모드로 바꾸는 방법
// webpack.config.js에서 mode: 'production'으로 바꾼다.
// webpack.config.js 맨 위에 process.env.NODE_ENV = 'production'; 코드를 추가한다(환경변수를 'production'으로 설정).

// 웹 서비스 만들 때 주의사항
// react는 오픈하되, redux는 절대 오픈하면 안된다(보안 상 위험할 수 있음).

// react developer tools
// 리액트 컴포넌트 구조와 state, props 등을 확인할 수 있다.
// state나 props가 바뀌면 렌더가 다시 된다.
// highlight updates 옵션을 체크하면 렌더가 될 때마다 컴포넌트 테두리에 색이 나타난다.
// 처음에는 초록색 계열 테두리가 나타나고, 렌더가 짧은 시간동안 많이 일어날 수록 색이 빨간 계열로 바뀐다.
// 성능 문제를 해결할 때 가장 먼저 문제가 나타나는 부분을 확인할 수 있는 방법이다.
// ex) 바뀌지 않는 컴포넌트가 다시 렌더링 되는 문제(이런 것들이 쌓여서 성능이 나빠짐).

// react 컴포넌트가 리렌더링 되는 경우
// 1) 컴포넌트의 state가 바뀔 때
// 2) 컴포넌트의 props가 바뀔 때
// 3) 부모 컴포넌트가 리렌더링 될 때

// react setState() 렌더링 문제
// setState를 호출하는데 state를 바꾸지 않아도 렌더링이 되는 문제가 있다.
// shouldComponentUpdate()메서드 : render()처럼 리액트에서 지원하는 메서드
// 따라서 shouldComponentUpdate 메서드를 사용하면 어떤 경우에 렌더링을 다시 해주어야 할지 정의해줄 수 있다.
// shouldComponentUpdate()메서드를 사용하지 않고 Component 대신 PureComponent를 import 해서 사용해도 된다.
// 기본적으로 리액트는 부모 컴포넌트가 리렌더링 되면 자식 컴포넌트도 같이 리렌더링 된다.
// PureComponent를 사용하면 부모를 따라 리렌더링 되는 문제도 해결할 수 있다.

// PureComponent : shouldComponentUpdate()메서드를 알아서 적용한 Component(클래스 컴포넌트에 적용 가능)
// state나 props가 바뀌었을 때만 컴포넌트를 리렌더링해준다(부모 리렌더링시 자식 리렌더링 막아줌).
// 단점은 객체나 배열같은 참조관계가 있는 state들은 PureComponent로 적용하기 까다롭다(push 같은 메서드 사용하면 바뀌었는지 판단하는 게 어려움).
// 따라서 참조관계가 있는 state들은 복사해서 값을 추가한 후 setState를 적용해야 한다(불변성 유지).
// state에 객체 구조를 사용하면 setState()를 할 때 렌더링되므로 객체 구조는 state로 사용하지 않는 것이 좋다.
// state는 복잡한 구조로 하면 PureComponent가 변화를 감지지 못해서 에러가 날 확률이 커지므로 간단한 구조로 하는 것이 좋다.

// 컴포넌트가 복잡해지는 경우, PureComponent를 적용하지 못할 수도 있다.
// 따라서 Component를 사용하고 shouldComponentUpdate 메서드를 사용해서 어떨 때 리렌더링 할지 정의해주는 경우도 많다.
// PureComponent나 shouldComponentUpdate는 성능 문제가 없다면 굳이 사용하지 않아도 되지만, 성능 문제가 발생하면 사용하는 것이 좋다!

// React.memo : 함수 컴포넌트에서 부모 컴포넌트 리렌더링시 자식 컴포넌트도 리렌더링 되는 것을 막아준다(클래스 컴포넌트의 PureComponent와 동일한 역할).
// memo를 적용해도 state나 props가 바뀌었을 때는 정상적으로 리렌더링 된다.
// memo를 적용하려면 memo()로 컴포넌트를 감싸주면 된다.
// memo를 적용하면 개발자 도구에 나타나는 컴포넌트의 이름이 바뀐다.
// 컴포넌트.displayName = '이름'; 을 작성해주면 해결 가능하다.
// ex) const Try = memo(...);
// Try.displayName = 'Try';
// memo는 가장 아래에 있는 자손 컴포넌트에는 웬만하면 사용하는 것이 좋다.

// React.createRef : 클래스 컴포넌트에 ref를 함수 컴포넌트의 ref와 비슷하게 만들어준다.
// ex)
/*
// <input> 태그 DOM 받아올 때
inputRef = createRef();
...
// 클래스 안의 함수 안에서 사용할 때
inputRef.current.focus();
...
// inputRef에 ref 전달해줄 때
<input ref={this.inputRef}> 
*/
// 기존의 클래스 컴포넌트에서 ref를 가져오는 방식은 함수를 정의하는 방법이었는데, 이 방법도 쓰이긴 한다.
// onInputRef() 함수 안에 다른 동작을 더 작성할 수 있다(좀 더 자유롭게 정의할 수 있음).

// 방법이 여러 개인 경우에는 방법에 따라 어떤 차이가 있고 왜 방법이 여러 개 생겼는지 알아두면 좋다.
// 방법이 여러 개이면 방법에 따라 미세한 차이가 있고 완벽하게 같진 않다.

// render() 안에 this.setState()를 사용하면 안된다(무한 루프).
// render를 실행하면 setState가 실행되고, 다시 render가 실행되고... 무한 반복

// 부모에게 받은 props는 자식 컴포넌트에서 절대로 직접 바꾸면 안된다(부모 컴포넌트에서만 변경해야함 - react 원칙?).
// 자식이 props를 바꾸면 부모의 state도 바뀌기 때문에, 뜻하지 않게 부모 컴포넌트가 바뀌게 된다.
// 자식 컴포넌트에서 props를 바꾸고 싶을 때
// 1) 자식 컴포넌트에 state를 만들어서 props를 넣어준다.
// 2) 그 다음 setState를 통해 자식 컴포넌트의 state를 바꿔준다.
// 이렇게 하면 부모의 state는 바뀌지 않고 자식의 state(== props)만 바꿔줄 수 있다(자식이 부모에 영향을 미치지 않음).

// 클래스 컴포넌트에서 생성자 함수 사용하면 생성자 함수 안에 다른 동작도 추가할 수 있어서 정밀한 제어를 할 수 있다.
// 함수를 사용하는 경우는 정밀한 컨트롤이 필요한 경우나 기존 객체로는 안되는 경우가 대부분이다.

// shouldComponentUpdate(nextProps, nextState, nextContext)
// nextProps는 props가 바뀌었는지, nextState는 state가 바뀌었는지 판단할 때 사용하는 매개변수이다.
// nextContext
// ex) Context 개념(props의 상위개념)
// 부모가 증손자한테 props를 줄 때 부모 -> 자식 -> 손자 -> 증손자 처럼 자식, 손자는 필요하지 않은 props를 받게 된다.
// 그 말은 props를 받을 때 쓸데없이 렌더링이 될 위험이 있다는 뜻이므로 좋지 않다.
// 따라서 부모 -> 증손자로 바로 props를 주는 방법이 바로 Context이다.
// Context를 응용한 것이 Redux이다.

//-------------------------------------------------------------------------------------------------------------------------------------------------

// 4. 반응속도 체크

// reduce()메서드
// 배열.reduce((acc, cur, idx, src) => {callback}, ini);
// 1) acc(accumulator) : 누산기, 콜백의 반환값을 누적한다.
//    콜백의 첫 번째 호출이면서 ini를 제공한 경우 ini의 값이고, ini가 없는 경우 배열의 0번째 요소이다.
// 2) cur(currentValue) : 처리할 현재 요소.
// 3) idx(currentIndex) : 처리할 현재 요소의 인덱스.
//    ini를 제공한 경우 0, 그렇지 않으면 1부터 시작한다.
// 4) src(sourceArray) : reduce()를 호출한 배열.
// 5) ini(initialValue) : callback의 최초 호출에서 첫 번째 인수(acc)에 제공하는 값.
// acc, cur은 필수이고, 나머지는 필요한 경우 사용하면 된다.

// react는 항상 자바스크립트만 담당해준다. css는 하던대로 하면 된다.
// false, undefined, null은 jsx에서는 태그가 없음을 뜻한다.
// 배열 안에 jsx를 담아서 return 하면 배열의 원소를 차례대로 html에 추가된다(반복문과 비슷한 역할, 거의 안 쓰임).

// react 조건문
// 리액트에서 조건문은 삼항 연산자(?:)나 보호연산자(&&)로 {}안에 작성해준다.
// return 안에 작성하는 것이 가독성이 너무 안 좋으면 함수로 빼주기도 한다.
// ex1) 삼항 연산자
/*
{result.length === 0 
  ? <div>result의 길이가 0입니다.</div>
  : <div>result의 길이가 0이 아닙니다.</div>
}
*/
// ex2) 보호 연산자 : && 앞이 false이면 뒤는 실행하지 않고, && 앞이 true이면 뒤를 실행한다.
/*
{result.length === 0 && <div>result의 길이가 0입니다.</div>}
*/

// state로 정의하는 데이터들은 바뀌었을 때 화면이 바뀌길 원하는 것들이고,
// 값이 바뀌어도 화면이 바뀌지 않는 데이터들은 this.startTime과 같이 state와 따로 정의해주어야 한다.

// 렌더되는 부분에서 코드가 복잡한 경우 컴포넌트로 빼는 것이 좋다(함수로 빼도 되지만 컴포넌트로 빼는 것이 유지보수나 성능 문제 해결에 좋음).

// 함수 컴포넌트는 렌더링될 때마다 컴포넌트 안에 작성한 코드가 전부 실행된다(성능 문제 발생 가능성 있음).
// 따라서 useMemo, useCallback를 사용하여 해결한다.
// useMemo, useCallback은 useEffect를 배운 다음에 배울 예정이다.

// 클래스 컴포넌트를 함수 컴포넌트로 바꿀 때 주의할 점
// 클래스에서 this.timeout과 같은 값들은 함수에서 useRef를 사용한다.
// 대신 ref 안에 current 속성이 있기 때문에 timeout.current에 값을 할당해야 한다.

// state와 ref(DOM에 접근하지 않을 때)의 차이점
// state는 setState로 바꿀 때마다 리렌더링이 돼서 화면이 바뀐다.
// ref가 바뀔 때는 리렌더링이 되지 않는다(값이 바뀌어도 화면에는 반영되지 않는 변수는 ref로 만듦).

// react(return 안)에서 for, if문 사용하는 방법
// 블록({}) 안에 익명함수를 선언해서 바로 호출하는 방식으로 return 안에서 if, for문을 사용할 수 있다.
// 코드가 지저분해서 잘 안쓰임
/* {(() => {
  if(){}
  for(){}
})()}
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

// 5. 가위바위보 게임

// 리액트 라이프사이클
// 컴포넌트가 생겼다가 사라지는 동안을 컴포넌트의 라이프사이클이라고 한다.
// 1) 클래스
// constructor -> render -> ref -> componentDidMount ->
// (state/props 바뀔 때마다) -> shouldComponentUpdate(true) -> render -> componentDidUpdate
// (부모가 나를 없앴을 때) -> componentWillUnmount -> 소멸

// componentDidMount() 메서드
// render 함수가 실행되면 react가 RSPGame.jsx를 client.jsx의 DOM에 갖다 붙여준다.
// 그 순간에 특정한 동작을 명령할 수 있다.
// 렌더 함수가 처음 성공적으로 실행되면 react가 componentDidMount()를 실행해준다.
// 그 다음 리렌더링될 때는 componentDidMount()는 실행되지 않는다.

// componentDidUpdate() 메서드
// 리렌더링 된 뒤마다 해줄 동작을 명시해주는 메서드이다.

// componentWillUnmount() 메서드
// 컴포넌트가 제거되기 직전에 react가 componentWillUnmount()를 실행해준다.
// 컴포넌트가 사라지기 전에 해야하는 동작을 componentWillUnmount() 메서드 안에 명시해주면 된다.
// componentDidMount() 메서드에서 했던 작업들을 제거하는 용도로 많이 사용된다.
// 부모 컴포넌트가 componentWillUnmount()가 선언된 컴포넌트를 없앨 때 실행된다.

//-------------------------------------------------------------------------------------------------------------------------------------------------

// 6.

//-------------------------------------------------------------------------------------------------------------------------------------------------

// 7.

//-------------------------------------------------------------------------------------------------------------------------------------------------
