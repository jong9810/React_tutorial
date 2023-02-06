//-----------------------------------------------------------------------------------------------------------------------------------------------
// 생활코딩 NodeJs 강의

// 강의에 앞서 기초 배경지식
// http : 웹 브라우저와 웹 서버가 서로 통신하는 방법
// 개발자도구 Network 탭 : 웹 브라우저와 웹 서버가 데이터를 주고 받는 것을 보여주는 도구
// 웹의 동작 원리 : 웹 브라우저가 웹 서버에 정보를 요청(request)하고, 웹 서버는 웹 브라우저에게 응답(response)한다.

// request-response procedure
// Request Header : 웹 브라우저가 웹 서버에게 정보를 요청할 때 자동으로 작성되는 요청서.
// Response Header : 웹 브라우저가 작성한 요청서에 따라 정보를 만든 후에 응답 헤더를 통해 웹 브라우저에게 전송.
// 그 후에 웹 브라우저는 응답 헤더에 적혀있는 내용을 참고해서 여러 작업을 처리하게 된다.

// Request Headers 속성들
// User-Agent : 어떤 브라우저에서 정보를 요청하고 있는지(모바일인지 데스크탑인지 등)
// Accept-Language : 웹 브라우저가 처리할 수 있는 언어
// Accept-Encoding : 요청한 정보의 크기가 너무 클 때, 웹 서버는 데이터를 압축해서 보내는데 압축을 해제하는 방식의 종류

// Response Headers 속성들
// Content-Encoding : 웹 서버가 정보를 어떤 방식으로 압축해서 보낼지
// Content-Type : 응답한 정보가 어떤 방식으로 인코딩되었고, 어떤 확장자인지 등
// Set-Cookie :

// Cookie : 웹 사이트에 로그인 하면 웹 서버에서 사용자가 로그인을 했었다는 사실을 쿠키를 통해 알 수 있다.
// 로그인 뿐만 아니라 웹 사이트에서 어떠한 활동을 했는지도 쿠키로 저장이 된다.
// 쿠키 -> 세션 -> 인증으로 확장된다.

//-----------------------------------------------------------------------------------------------------------------------------------------------

// NodeJs 강의

// NodeJs란? : javascript 실행기
// javascript를 브라우저에서 실행할 때는 브라우저 자체에 javascript의 인터프리터가 있어서 가능하지만,
// 백엔드로 실행하기 위해서는 인터프리터가 없기 때문에 NodeJs를 설치해야 한다.

// npm(Node Package Manager)이란? https://www.npmjs.com/
// nodeJs에서 필요한 툴(모듈)들을 다운받는 곳
// 필요한 모듈을 찾거나 모듈의 사용법을 찾으려면 공식 사이트로 가면 된다.
// npm init 명령어를 사용하면 다운받은 패키지(모듈)을 정리할 수 있다(package.json 파일 생성).
// npm i -g (모듈이름): 내 컴퓨터의 모든 폴더에 해당 모듈을 사용가능하게 해준다(웬만하면 사용 X).
// package.json : 설치한 모듈들의 대략적인 내용을 빠르게 알 수 있는 파일.
// package-lock.json : 설치한 모듈들의 자세한 내용을 알 수 있는 파일.
// npm uninstall (모듈이름) : 모듈을 삭제해준다.

// 모듈 종류
// express : nodeJs를 사용하여 웹 프레임워크를 만드는 모듈
// figlet : 아스키 아트를 만들어주는 모듈

// 포트 : 서버의 선착장, 예시) 서버에 요청을 할 때 어떤 입구(포트)로 들어갈지 입력
// 포트마다 다 다른 프로그램을 실행할 수 있다(포트 규격도 존재).
// 내 컴퓨터의 ip로 접속할 수도 있고 localhost로도 접속할 수 있다.

// HTTP 메소드 : 요청을 할 때, 요청의 목적이나 종류 등을 알리기 위해 사용하는 메소드.
// 1) get 요청 : 주소창에서 데이터를 다 넘기는 방법.
// 2) post 요청 : 주소창이 아니라 내부적으로 body에 데이터를 담아서 전달하는 방법.

// 라우팅
// 특정 포트 안에 여러 파일의 경로
// ex) youtube.com/channel/ 에서 /channel/ 부분부터 라우팅이라고 할 수 있다.
// 라우팅에 따라 보이는 html 페이지가 달라진다.

// 콜백함수
// 함수 안 쪽에 함수가 끝나고 실행할 콜백함수를 넣어줄 수 있다.
// 즉, 콜백함수는 함수에 넣어주는 함수이고, 함수가 끝나고 실행된다.

//-----------------------------------------------------------------------------------------------------------------------------------------------

//

//-----------------------------------------------------------------------------------------------------------------------------------------------
