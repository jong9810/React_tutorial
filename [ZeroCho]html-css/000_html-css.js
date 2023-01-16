// 웹(Web) : 1개 이상의 사이트가 연결되어 있는 인터넷 서비스의 한가지 형태(World Wide Web의 줄임말)
// 웹은 전 세계의 컴퓨터를 연결하여 정보 공유를 하는 데에 주 목적이 있음. 연결된 상태를 네트워크에 연결되어 있다고 표현함.
// 인터넷 : 1개 이상의 네트워크가 연결되어 있는 형태
// 프로토콜(Protocol) : 네트워크 상에서 약속한 통신 규약(HTTP, FTP, SMTP, POP, DHCP)
// IP : 네트워크 상에서 컴퓨터를 식별할 수 있는 주소
// DNS : IP 주소를 인간이 쉽게 외우도록 맵핑한 문자열
// Port : 해당 컴퓨터의 구동되고 있는 프로그램을 구분할 수 있도록 부여한 번호
// HTML(HyperText Markup Language), CSS(Cascading Style Sheets)
// HyperText : 하이퍼링크를 통해 어떤 문서에서 다른 문서로 접근할 수 있는 텍스트
// Markup : (콘텐츠를) 표시하다
// Language : 언어
// 렌더링 : HTML 코드가 웹브라우저를 통해 해석되고 표현되는 과정

// 제로초 HTML-CSS 강의

// 1. 웹 개발 꿀팁
// 개발자도구에서 Element 탭에서는 웹의 html과 css가 작성하고, Console 탭에서는 javascript를 작성한다.
// Element 탭에서 ctrl + F를 하면 검색할 수 있다.
// Sources 탭에는 웹에 사용된 이미지, 폰트, 코드를 다 볼 수 있다.
// 개발자 도구를 키고 ctrl + shift + C 를 누른 후 웹 페이지에서 궁금한 곳을 누르면 해당하는 태그로 바로 이동해준다.
// 프론트 엔드에서 작업하는 내용은 모두에게 공개되기 때문에 보안에 위험한 내용은 쓰면 안된다.
// './' : 현재 폴더를 의미한다.
// 웹 표준을 완벽하게 지키진 않더라도 최대한 웹 표준에 가깝게 만드는 것이 좋다.
// 구역 안에서 가운데 정렬될 부분은 가로, 세로에 상관없이 div로 먼저 묶어주자(div 태그 자체를 가운데 정렬 시키기 위해).

// html 배치가 뒤죽박죽 되어있으면 나중에 수정하거나 에러가 어디서 났는지 찾을 때(유지보수) 엄청 고생한다.
// 따라서 html 구조를 먼저 잘 잡아놓고, 레이아웃 잡는 것을 심혈을 기울여서 해야한다.
// 세부적인 디자인은 그 이후에 하면 된다.

// 레이아웃 잡는 과정
// 웹의 구역을 크게 가로로 먼저 나누어서 생각해보면 레이아웃을 잘 잡을 수 있다.
// 그 다음에 크게 나눈 구역에서 또 가로로 구역을 나누고,
// 가로로 나눌 구역이 더이상 없다면 세로로 구역을 나누어서 태그를 배치한다.

// UI/UX 개발자들은 버튼 클릭시 마우스 모양이 화살표인지 손가락인지로도 논쟁한다(마우스 모양에 따라 클릭률이 달라짐).
// 웹 개발자들은 웹 사용자 편의를 위해 탭처리, 음성지원 등도 신경써야 한다.

// headings map : 웹의 머릿말 태그에 따라 트리 구조로 보여줌(크롬 확장프로그램).
// validity 확장 플러그인 : html5 웹 표준에 맞게 html문서를 작성했는지 검사해줌.
//

// 2. HTML 태그 설명

// 태그 안에는 속성을 줄 수 있는데 attributes라고도 함.
// html은 빈 태그인 경우 닫는 태그를 넣지 않아도 작동은 되지만, 그래도 작성하도록 하자.

// 3. HTML 태그 종류

// head : 문서의 부가적인 내용을 담고 있다.
// 파비콘(favicon) : 인터넷 웹 브라우저의 주소창에 표시되는 웹사이트나 웹페이지를 대표하는 아이콘

// meta : 문서에 대한 정보를 담고 있다.

// link : 다른 파일을 불러올 때 사용하는 태그
// rel 속성으로 어떤 파일을 불러오는지 나타내고, href 속성으로 불러올 파일의 경로, 파일이름을 주면된다.

// body : 화면을 그려주는 태그들을 담고 있다.
// 웹에서 즐겨찾기 아래부터 스크롤바까지가 화면을 나타낸다.

// heading 태그들 : 머릿말 태그. h1, h2, h3, h4, h5, h6가 있고, 숫자가 작을 수록 글자 크기가 크다(중요도 표시 역할).

// fieldset : 테두리를 만들어주는 태그.

// legend : 범례 태그.

// input : 기본값(type="text")은 텍스트를 입력받는 창을 만들어준다.
// type 속성에 따라 역할이 바뀌는데, checkbox, radio 등이 있다.
// type이 "checkbox" 이면, 여러 개를 선택할 수 있지만 "radio"인 경우 name 속성에 같은 범주로 묶여있는 경우 한 가지만 선택 가능하다.

// textarea : input 태그와 비슷하게 텍스트를 입력받지만, 긴 텍스트를 입력받아야 할 때 사용한다. 창을 늘리고 줄일 수 있다.

// ul : unordered list. 순서가 없는 목록을 만들어서 나열해준다.
// ol : ordered list. 순서가 있는 목록을 만들어서 나열해준다.
// li : list item. ul이나 ol의 자식 태그로 넣어주면 목록에 하나의 원소가 됨.

// img : src 속성에 이미지 파일의 경로와 파일이름을 넣으면 이미지를 화면에 표시해준다.
// alt 속성에 넣은 내용은 화면에는 나타나지 않지만 이미지에 대한 설명을 적어줄 수 있다.

// i : i 태그로 감싸면 텍스트를 기울어진 스타일로 만들어줌(italic)

// b : b 태그로 감싸면 텍스트를 굵게 표시해줌(bold)
// i 태그나 b 태그 같은 태그는 디자인적인 요소인데 css가 아니라 html이 담당해도 되는지에 대한 논쟁이 있다고 함.

// span : 텍스트 단위로 공간을 분할해줌.
// css display 속성의 속성값이 inline이다.

// div : 행 단위로 공간을 분할해줌(division). 레이아웃을 잡을 때 구역을 나누는 태그로 아주 많이 사용된다.
// css display 속성의 속성값이 block이다.
// div가 너무 많이 사용되다 보니, div 태그를 구분하기 위해 예전에는 id 속성에 head, main, footer, nav 등을 주고 사용하였다.
// html5가 되면서 어떤 구역인지 나타내주는 header, nav, article, main, footer 등 태그를 만들어주었다(시멘틱 구조태그).

// 시멘틱 구조 태그 종류(Semantic tag)
// header : 페이지나 콘텐츠의 머리말 부분에 사용하는 div 태그
// footer : 웹 페이지의 가장 아래 쪽에 위치하는 웹에 대한 부가적인 정보를 보여주는 꼬리말 부분에 사용하는 div 태그
// main : 웹 페이지의 주 내용이 작성되는 부분에 사용하는 div 태그(딱 한번만 사용해야 함 <- 웹 표준)
// nav : 네비게이션 바 영역에 사용하는 div 태그
// section : article보다 큰 영역을 나타낼 때 사용하는 div 태그
// article : 보통 제목 태그와 문단 태그를 포함하며 여러 문단을 묶어주고, 개별 콘텐츠에 사용하는 div 태그
// aside : 콘텐츠나 페이지의 사이드 영역에 사용하는 div 태그(퀵 메뉴, 스크롤탑버튼 등)
// details : 사용자가 보거나 숨길 수 있는 세부 콘텐츠를 정의할 때 사용하는 div 태그
// summary : <details> 태그를 통해 보이는 콘텐츠를 담는 div 태그
// figure : 일러스트레이션, 다이어그램, 사진, 코드 목록 등 자체 포함된 콘텐츠들을 담을 때 사용하는 div 태그
// figcaption : <figure> 태그로 정의한 콘텐츠들의 제목, 설명 등을 작성하는 div 태그

// button : 버튼을 생성해주는 태그

// form : input 태그와 button 태그를 넣고 묶어주면 버튼을 누를 때마다 submit 이벤트를 발생시킴.

// iframe :

// table :

// 4. CSS 설명

// Cascading Style Sheet : 조상 태그의 CSS 속성이 기본적으로 있고 자식 태그의 CSS가 그것을 덮어씌운다.
// 태그에 아무런 CSS 속성을 주지 않으면 조상 태그의 CSS 속성을 그대로 받는다.
// 자식 태그에 조상 태그에 적용된 CSS 속성을 다른 속성값으로 정의해주면 조상 태그의 속성값이 아닌 자식 태그에 정의된 속성값을 따름.
// ex)
// html{color: red;}
// div{color: blue;}
// -> html 내의 다른 태그들의 글자색은 빨강, div 태그의 글자 색은 파랑

// 기본적인 구조는 타겟{속성명: 속성값;} 이다.
// 개발자 도구에 user agent stylesheet는 기본적으로 브라우저가 태그에 적용해주는 CSS 속성이다(브라우저마다 다를 수 있음).
// 크로스 브라우징 : 브라우저마다 다른 특징을 알고 잘 처리하는 웹 프로그래밍 기술.

// css 속성 적용 방법
// (1) 인라인 스타일시트(Inline Style Sheet) : html 태그 내에 style속성으로 정의하는 방식(권장하지 않음).
// (2) 인터널 스타일시트(Internal Style Sheet) : HTML 문서 안에 <style> 태그 안에 CSS 코드를 작성하는 방식.
// (3) 링킹 스타일시트(Linking Style Sheet) : 별도의 CSS 파일을 만들고 HTML link태그로 연결하는 방식.
// 하나의 파일에 모든 것을 담기 보다 역할에 따라 파일을 나누어 주는 것이 나중에 유지보수할 때 좋음.

// 선택자(selector)
// (1) # : id 선택자
// (2) . : class 선택자
// (3)

// 시멘틱 구조태그는 css 적용할 때 생략이 불가능하다.(div 태그만 생략가능)
// 자식 태그를 선택하고 싶을 때는 태그 > 태그{} 처럼 꺾쇠를 붙여주면 된다.
// 자손 태그를 선택할 때는 태그 태그{} 처럼 한 칸 띄어주면 된다.

// margin이 있는 부분은 기본적으로는 다른 컨텐츠가 오지 못한다.
// 하지만, 특별한 방법을 사용하면 margin 위에 컨텐츠를 위치시킬 수 있다(position).

// 5. CSS 속성 종류

// width : 태그의 폭을 설정해주는 속성
// height : 태그의 높이를 설정해주는 속성

// display : 태그가 차지하는 공간을 설정하거나 보이지 않게 설정할 수 있다.

// display 속성값 종류
// none : 태그가 보이지 않고, 코드 리더기에도 인식되지 않음.
// block : 태그가 공간의 전체 너비를 다 차지하게 만든다(width가 있든 없든 공간은 다 차지함).
// inline-block : 기본적으로 컨텐츠가 차지하는 공간만큼, width, height 속성을 정의한 경우 width, height만큼의 공간을 차지하게 만든다.
// inline : 컨텐츠가 차지하는 공간(텍스트, 이미지 등)만큼만 차지하게 만든다(빈 공간 마련 불가능).

// 박스 모델

// (1) margin :
// (2) padding :
