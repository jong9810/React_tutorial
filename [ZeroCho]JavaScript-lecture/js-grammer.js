// 문자열과 다른 자료형을 연산할 때, 더하기 연산은 다른 자료형을 문자형으로 형변환 시킨 후 더해준다.
// 더하기를 제외한 나머지 연산은 문자열을 다른 자료형으로 형변환 시킨 후 연산을 진행한다.
// 웬만하면 자료형을 똑같이 맞춰준 후에 연산을 하는 것이 예상하지 못한 결과가 나오는 것을 막는 방법이다.

// typeof 데이터 : 인자로 전달해준 값의 자료형을 결과로 반환해주는 함수

// 비교 연산자
// ==, != : 연산자를 기준으로 왼쪽에 있는 값과 오른쪽에 있는 값만을 비교해서 결과를 boolean 자료형으로 반환해준다.
// ===, !== : 값과 자료형을 모두 비교해서 결과를 반환해준다.
// 웬만하면 ===, !==을 사용하는 것이 좋음. 예상치 못한 결과를 줄일 수 있다.

// !! or boolean('') : 값을 boolean 자료형으로 변환해주는 연산자나 함수이다.
// ''(빈 문자열), 0, false, NaN, undefined, null, document.all 값은 false로, 나머지는 모두 true로 변환된다.

// NaN : Not a Number의 약자로, 자료형은 number이지만 NaN은 숫자가 아닌 값을 의미한다.
// NaN == NaN 자기 자신을 비교했을 때 false값을 반환하는 유일한 원시값이다.

// 빈 자료형
// undefined : 반환할 값이 없을 때 반환되는 값, 기본값
// null : 의도적으로!! 빈 값을 대입할 때 많이 사용한다.
// undefined와 null은 값은 빈 값으로 같지만 자료형이 다르다.
// 협업할 때 변수에 undefined값이 있는 것과 null값이 있는 것은 완전히 다른 의미로 해석된다.
// undefined -> 아직 값이 할당이 안된 변수인지 의도적으로 값을 할당하지 않은 것인지 알 수 없다..
// null -> 동료가 의도적으로 값을 null로 바꿨다는 것을 확실히 알 수 있음!!

// typeof null의 실행 결과는 "object"이고, 잘 알려진 자바스크립트 언어의 버그이다.
// 언어가 만들어진 초창기에 생긴 버그로 언어가 이미 많이 사용된 후에 발견되었기 때문에 고치지 않고 유지하고 있다.

// let number = 1;
// number; : number 변수에 저장된 값(1) 자체를 반환해줌
// console.log(number); : number 변수에 저장된 값(1)을 화면에 보여주고 undefined값을 반환해줌.(화면에 결과만 출력하고 값은 반환x)

// 자주 보이는 에러는 외워두는 것이 좋다.
// console.log()에서 console 객체를 선언하지 않아도 에러가 발생하지 않는 이유?
// console은 브라우저가 이미 선언을 해주었기 때문에 사용 가능하다.
// 브라우저가 console과 같이 기본적인 도구들을 제공해준다.
// window, document(웹페이지 조작), console 등등

// let : 같은 이름으로 변수가 다시 선언되는 것이 불가능하다.
// js에서 변수명은 한글, 한자, 숫자도 가능하고 특수문자 중에서는 $, _를 포함할 수 있다.
// 주의할 점은 변수명에 띄어쓰기는 불가하고, 숫자는 변수명의 첫 글자로 나오면 안된다.
// 변수명 웬만하면 영어와 특수문자로 짓는 것이 좋고, 최대한 자세하고 명확하게 그 값이 뭔지를 알 수 있도록 짓는 것이 중요하다!!

// let으로 변수를 선언할 때, 변수명으로 사용하면 안되는 이름이 몇 가지 있다. 에러가 뜨기 때문에 암기할 필요는 없다.
// 예약어 : 이미 의미와 용법이 지정되어 사용되는 단어로서, 프로그래머가 임의로 다른 목적이나 의미로 바꾸어 사용할 수 없는 단어.
// await, break, case, catch, class, const, continue, debugger, default, delete, do, else, enum, export, extends,
// false, finally, for, function, if, import, in, instanceof, new, null, return, super, switch, this, throw, true,
// try, typeof, var, void, while, with, yield
// 예약어이지만 변수명으로 사용 가능한 경우도 있고, 예약어가 아니지만 변수명으로 사용하지 못하는 예외적인 경우도 있다.
// ex) let은 예약어가 아니지만 변수명으로 사용하지 못한다.

// 사소하지만 아주 중요한 차이 (아직까지는 와닿지 않는다.)
// 변수를 선언하고 초기화할 때는 undefined를 반환해주지만,
// 이미 선언된 변수의 값을 변경할 때는 변경되는 값을 반환해준다.

// 상수, const
// const로 선언하면 값을 변경할 수 없다. (엄밀히 말하면 변경할 수 있는 경우도 있지만 일반적으로는 불가능하다.)
// const로 선언할 때는 초기화를 반드시 같이 해주어야 한다. (const는 초기화할 때만 대입 연산자를 사용한다.)

// 변수, var : 옛날에 많이 사용했지만, 최근에는 var 대신 let을 사용한다.
// var은 기본적으로 let과 동일하지만, let과 다르게 같은 변수 이름으로 재선언할 수 있다.
// var로 변수를 선언할 때는 undefined, Infinity, let도 변수명으로 사용할 수 있다.(버그가 많이 발생해서 잘 안씀.)
// var 변수는 선언되기 전에도 코드에 선언이 되어 있다면 접근이 가능하고, let은 선언이 된 후에만 접근이 가능하다. (var의 이상한 특성 중 하나)

// js는 기본적으로 코드를 위에서 아래로, 왼쪽에서 오른쪽으로 읽고 실행한다.
// 예외적으로 대입연산자(=)는 오른쪽을 먼저 연산하고 왼쪽에 대입해준다.
// 비동기 함수(setTimeout, setInterval) 등은 코드의 위치와는 상관없이 특정 조건이 되면 실행해준다.

// 조건문
// if-else if-else 구문
// switch-case 구문 : if문을 좀더 편하게 만든 구문
/* 
switch(조건식){
  case 비교조건식:
    동작문1;
    동작문2;
    break;
  default:
    동작문;
    break;
}
*/
// switch-case구문은 조건에 만족할 경우 그 밑의 코드까지 다 실행이 된다.
// 따라서 break;를 넣어서 switch문을 탈출하게 하는 방법도 많이 사용된다.
// default: if구문의 else와 동일한 역할을 한다.

// 조건문 안에 조건문을 중첩하는 경우, 들여쓰기가 너무 깊이 돼서 코드의 가독성을 떨어뜨릴 수 있다.
// 이 문제의 해결방안은 조건문의 중첩을 줄이기 위해 조건식을 더 논리적으로 짜는 방법이 있다.

// 조건부 연산자(삼항 연산자)
// (조건식) ? (true일 경우 동작문) : (false일 경우 동작문)
// 조건식에 따라 동작문을 실행하여 결과값을 반환해준다!!
// 조건부 연산자를 사용하면 코드의 길이를 줄일 수 있지만, 코드의 가독성을 떨어뜨리는 경향이 있다.
// 조건부 연산자를 중첩할 때, 중첩된 부분을 소괄호로 묶어주거나 줄을 바꾸고 들여쓰기를 하면 코드의 가독성을 높일 수 있다.

// 반복문

// 1. while문
// while문은 시작, 조건식, 종료식이 흩어져 있어서 가독성이 떨어질 수 있지만,
// 무한반복문(break; 사용)에서는 while문을 사용하는게 보기 더 좋을 수 있다. (언제 끝날지 모르는 반복문)

// 2. for문
// for문은 시작, 조건식, 종료식을 생략이 가능하고  한 줄에 묶여 있어 가독성이 좋다.
// break; : 특정한 조건을 만족할 때 반복문을 멈추고 싶을 때 사용 -> if(조건식){break;}
// continue; : 특정한 조건일 때만 반복문을 건너뛰고 싶을 때 사용 -> if(조건식){continue;}

// 객체 : 자료형의 일종으로 배열(array), 함수(function), 배열이나 함수가 아닌 객체(object)로 나뉜다.

// 1. 배열 : 다양한 자료형들을 하나로 묶어놓은 것
// 배열 안에는 같은 자료형이 아닌 값들도 넣을 수 있다. ex) let arr = ['a', 10, [1,2], b(변수), undefined, null, true]
// const로 선언한 객체는 객체를 통째로 바꾸는 것(대입)은 불가능하지만 객체 내부를 바꾸는 것(수정)은 가능하다.
// ex) const arr = [1,2,3,4,5].push(6) -> [1,2,3,4,5,6]
// ex) arr[0] = 0 -> [0,2,3,4,5,6]

// 배열 요소 수정하기
// arr.unshift(값) : 배열 맨 첫 번째 자리에 값을 추가할 때 사용
// arr.shift() : 배열 맨 첫 번째 자리의 값을 제거할 때 사용
// arr.push(값); 또는 arr[arr.length] = 값 : 배열 맨 마지막 자리에 값을 추가할 때 사용
// arr.pop() : 배열 맨 마지막 자리의 값을 제거할 때 사용
// arr.splice(지우고 싶은 값의 인덱스, 지우고 싶은 값의 개수, 지워진 자리에 추가할 값)
// : 배열 중간의 값을 한 개 또는 여러 개 제거하거나 추가할 때 사용
// arr.splice(1) -> 인덱스 1부터 끝까지 모든 값을 제거
// const로 선언한 배열의 원소를 모두 제거하고 싶을 때는, array.splice(0)을 하면 된다.

// 배열에서 요소 찾기
// target.includes(값) : target 배열 안에 값이 있으면 true, 없으면 false를 반환 (조건식에 자주 쓰임)
// target.indexOf(값) : 배열의 앞에서부터 값이 있나 검색하고 없으면 -1, 있으면 인덱스를 반환
// target.lastIndexOf(값) : 배열의 끝부분부터 값을 검색하고 없으면 -1, 있으면 인덱스를 반환

// 2. 함수 : 반복적인 작업을 덜하기 위해 자주 사용하는 코드를 함수로 정의해놓고 필요할 때마다 호출해서 사용한다.
// 이름이 없는 함수(=익명 함수 : 딱 한번만 사용하는 함수일 때 주로 사용)
// function(){}
// ()=>{}

// 이름을 정해주는 방법
// function a(){}  : 함수 선언문
// const b = function(){};  : 함수 표현식
// const c = () => {};  : 화살표 함수

// 반환값 return
// 함수는 return을 생략하면 기본값인 undefined를 반환해주고, 반환을 한 후에는 함수를 종료한다.
// 항상 함수의 마지막에는 return undefined;가 생략되어 있다고 생각하면 된다. 함수의 마지막 줄에서 undefined를 반환하고 함수를 종료
// 반환하는 값은 모든 자료형이 가능하고 함수를 반환해줄 수도 있다. 함수를 반환해주는 함수를 고차함수라고 부른다.
// 여러 값을 반환할 때는 배열이나 객체로 반환해주어 한다.

// 매개변수(parameter)와 인자(argument)
// 함수를 선언할 때는 매개변수(parameter), 함수를 호출할 때는 인자(argument)
// 함수를 호출할 때 준 인자가 함수 선언할 때 준 매개변수와 연결되어서 값을 함수로 전달해준다.
// 예약어 arguments : 함수 내에서 사용 가능하고, 함수가 전달받은 인자를 배열로 가진다. 단, 화살표 함수에서는 사용 불가!
// 함수 안에서 변수 선언해서 사용할 수도 있고, 함수 바깥에서 선언된 변수를 함수 내에서 사용할 수도 있다.
// ex) func(인자1, 인자2); : func 함수 호출
// ex) function func(매개변수1, 매개변수2) {} : 함수 선언

// 매개변수와 인자의 개수가 다른 경우
// (1) 매개변수가 더 많은 경우 : 앞의 매개변수 부터 인자를 전달받고, 남은 매개변수에는 기본값인 undefined가 대입된다.
// (2) 인자가 매개변수보다 더 많은 경우 : 앞의 인자부터 매개변수로 값을 전달하고, 남은 인자는 무시된다.

// 3. 객체 리터럴 : 배열이나 함수가 아닌 객체 중에서 특정한 형식을 갖춘 객체를 객체 리터럴이라고 부른다.
// 어떠한 대상에 대해 관련있는 속성의 이름을 정해주고 값을 주어서 중괄호(braces)로 묶은 형태 === 객체 리터럴
// ex) const jongin = {name:'김종인', age:25, gender:'M',};
// 인덱스 대신 속성의 이름을 통해 인덱싱할 수 있다.
// ex) jongin['name'] -> '김종인  or  jongin.name -> '김종인

// 객체 리터럴 사용시 주의할 점들
// 마지막 속성에 값을 주고나서 쉼표를 찍는 것을 추천한다!! 다음 값을 추가할 때 한 줄만 작성하면 되고 에러 발생률도 줄일 수 있음.
// 속성 이름에 띄어쓰기나 숫자가 포함되어 있거나 첫 글자로 숫자가 오는 경우에는 속성이름을 문자열로 묶어줘야 한다!
// 속성 이름을 문자열로 묶어준 경우에는 그 속성에 접근할 때 jongin.name(x)으로 하면 에러가 뜬다. jongin['name'](o)
// 대괄호로 접근할 경우에는 문자열로 꼭 묶어주어야 한다!! 되도록이면 jongin.name 방식으로 접근하는 것이 좋다.
// 속성 이름과 같은 이름의 변수가 있을 경우에 변수가 대입돼서 예상하지 않은 결과가 나올 수 있음.

// 객체 속성 제거하기
// delete jongin.gender; -> gender 속성 제거됨.

// 함수와 배열은 객체를 특수한 모양으로 만들어 놓은 것일 뿐, 객체의 특성을 모두 가진다.

// 메서드(method) : 객체의 속성으로 함수를 값으로 주었을 때, 그 속성을 특별히 메서드라고 부른다.
// ex) console.log() : console이라는 객체 안에 log라는 이름을 가진 메서드가 있어서 console.log()로 호출한다.

// 객체 꼭 알아두어야할 특징(배열, 함수, 객체 리터럴 모두 가지는 특징)
// {} === {} -> false : 객체끼리 비교할 때는 모양이 같더라도 항상 false가 반환됨
// js는 객체를 생성할 때 메모리의 새로운 위치에 속성을 저장하고, 객체에는 속성이 저장된 메모리의 위치를 저장한다.
// 따라서 두 객체를 생성하는 경우 메모리의 서로 다른 두 위치가 저장되므로 값을 비교하면 false를 반환한다.
// 객체 끼리는 변수에 넣어놓지 않은 경우 모양이 같아도 항상 새롭게 생성되기 때문에 비교연산을 하면 false를 반환한다.
// 객체끼리는 서로 참조 관계를 가질 수 있고, 원시값은 서로 참조 관계를 가질 수 없다.
// 참조 관계 : 하나의 객체의 속성이 바뀌면 그 객체를 참조하고 있는 객체도 값이 변한다.
// 원시값(객체를 제외한 자료형)은 메모리에 값 자체를 저장한다고 생각해도 좋다.(약간 다르긴 하지만 일단 이렇게 생각하자)
// 비교 연산자는 사실 값을 비교하는 것이 아니라 값이 저장된 메모리의 위치를 비교하는 것이다!!
// 객체가 생성되는 공간과 원시값이 생성되는 공간은 분리되어 있다.
// 두 개의 변수에 같은 원시값을 대입하면 두 변수 모두 같은 위치를 가르키지만,
// 두 개의 변수에 같은 객체값을 대입하면 두 변수는 각각 새로운 객체를 생성하여 다른 위치를 가르키게 된다.

// 자바스크립트 게임

// 1. 끝말잇기 게임

// 태그의 id 속성은 고유한 값으로 주는 것이 좋다. js에서 id는 하나의 값만 가진다고 여기기 때문
// id와 비슷한 속성으로 class가 있는데 class는 같은 값을 여러 번 주어도 상관없다.
// class 속성은 띄어쓰기를 통해 여러 값을 부여할 수도 있다.

// 나만의 변수명 정하는 규칙 : $가 앞에 붙은 변수는 태그를 가르키고 $$는 태그 여러 개를 가르킨다.
// querySelector의 인자로 'div span'이라고 주면 div의 자손 태그인 span 태그를 선택해준다.
// 자식 태그 : 부모 태그 바로 아래에 포함된 태그들을 지칭함.
// 자손 태그 : 부모 아래에 포함된 모든 태그를 지칭함.
// 자식(or 자손)만 선택해야할 경우 : querySelector('div>span')
// querySelector의 인자로는 태그 이름 뿐만 아니라 id(#), class(.) 속성도 줄 수 있다.
// id 속성은 html에서 고유하기 때문에 복잡한 태그인 경우 querySelector의 인자로 id값만을 주면 된다.
// ex)
// const $input = document.querySelector('input');
// console.log($input);
// const $button = document.querySelector('button');

// 태그.addEventListener('이벤트 이름', 리스너함수) : 이벤트가 발생될 때마다 리스너함수를 호출해준다.
// 리스너 함수에는 함수의 리턴값이 아닌 함수 자체를 인자로 주어야 하기 때문에 '함수이름()'(x) '함수이름'(o)
// 예외적으로, addEventListener의 두 번째 인수로 준 함수가 고차함수라면 함수이름(인수)로도 가능.
// 콜백함수 : 어떠한 동작이 수행된 후에 연이어 호출되는 함수

// 태그의 내용에 접근할 때
// (1) 태그.textContext = 값; -> 대부분의 태그(button, div, span 등)
// (2) 태그.value = 값; -> input, select, textarea 등 입력을 받는 특수한 태그

// 2. 계산기

// if문 중첩 제거하는 과정
// (1) if문 다음에 나오는 공통된 절차를 각 분기점 내부에 넣는다.
// (2) 분기점에서 짧은 절차부터 실행하게 if문을 수정한다.
// (3) 짧은 절차가 끝나면 return(함수 내부의 경우)이나 break(반복문 내부의 경우)로 중단한다.
// (4) else를 제거한다.

// 반복되는 코드가 나오는 경우 함수를 만드는 것이 좋다.
// 함수를 만들 때 코드에서 달라지는 부분을 매개변수로 정하면 된다.
// addEventListener() 함수의 두 번째 인자로는 함수를 넣어주어야 한다.
// addEventListener() 함수에서 첫 번째 인자로 준 액션이 입력되면 두 번째 인자의 함수를 브라우저가 실행해준다.
// 그 때 브라우저가 실행하는 함수에 (event) 객체를 만들어서 인자로 넣어준다. ex) event.target.value 와 같은 속성 사용 가능

// 화살표 함수인 경우, 중괄호 바로 다음 return이 오면 중괄호와 return을 생략해도 된다.
// 함수를 리턴하는 함수 : 고차원 함수(high order function)
// 고차원 함수에서 중괄호와 리턴이 생략된 경우가 많으니 눈에 익혀두자.
// 고차 함수는 함수끼리의 중복을 막기 위해 사용한다.

// 3. 숫자야구 게임

// 프로그램의 오류는 배열이나 객체의 처음 or 끝에서 많이 발생하므로
// 극단적인 상황을 가정해보면 오류를 발견할 확률이 올라간다.

// input태그와 button태그를 같이 사용하는 경우 form 태그로 감싸주는 것이 일반적이다.
// form태그 안의 버튼을 누르면 submit이 호출된다.
// form의 기본동작은 웹이 새로고침되는 것이다.

// event.preventDefault()
// 기본동작을 원하지 않는 경우 event.preventDefault();를 리스너함수에 넣어주어야 함.
// event.preventDefault()는 가급적이면 함수 맨 꼭대기에 위치하는 것이 좋다.
// 조건에 따라 함수를 탈출하는 경우 조건식을 event.preventDefault() 위에 적을 경우에, 기본 동작이 취소되지 않아서 새로고침됨!

// event.target[0] : event.target 태그 안의 첫 번째 자식 태그
// event.target은 객체 리터럴인데, 인덱스로 접근하면 특정 태그를 선택하는 것도 가능하다.

// new Set(input) : 중복된 값을 제거해준다. (Set 자료형의 특징이 중복을 없애는 것이기 때문에)

// 배열.join('') : 배열의 원소를 문자열로 만들어줌
// 문자열.split('') : ''를 기준으로 문자열을 쪼개서 배열로 만들어줌
// 태그.innerHTML : innerHTML속성에 문자열을 할당할 때, 문자열 안에 html 태그가 있으면 인식해서 적용시켜줌.
// 태그.textContent : textContent속성에 값을 할당할 때, 값 안에 있는 html태그도 문자열로 인식해서 그대로 찍어줌.
// document.createElement('태그') : 태그를 생성시켜줌
// 태그.appendChild : 반드시 createTextNode로 텍스트를 만든 후에 그 값을 전달해주어야 한다. 여러 개 추가도 불가능. 잘 안 쓰임
// 태그.append : appendChild의 단점을 보완한 메서드로, 여러개 추가가 가능하고 문자열인 경우에는 createTextNode로 생성하지 않아도 된다.
// ex)
// $result.append(document.createElement('br'), `${winner}님이 이겼습니다.`);
// : $result 태그에 한 줄을 띄어주고 텍스트를 표시해줌.

// 배열에 대한 반복문 역할을 하는 메서드 종류, forEach(), map(), fill()
// 배열 메서드들은 성능은 for문보다 좀 떨어지지만 연달아 사용할 수 있어서 코드의 가독성을 더 높일 수 있다.

// forEach((el, idx)=>{콜백})메서드
// : 배열의 모든 원소에 대해 한 번씩 콜백함수를 실행해서 새로운 원소를 보여준다.(원본은 안 바뀜)
// : 인수로는 콜백 함수를 주고 그 함수의 인수로는 배열의 원소와 인덱스를 줄 수 있다.

// map((el, idx)=>{콜백})메서드
// : 배열을 어떻게 바꿀지 콜백함수로 정의해서 인수로 주면 결과를 보여준다.(원본은 안 바뀜)
// : forEach()와 달리 원소 하나하나를 보여주지 않고 새로 만든 배열을 보여준다.

// Array(9) : 길이가 9인 빈 배열을 만들어줌
// Array(9).fill(0) : 배열을 0 으로 채워줌.
// fill()메서드 사용시 주의점
// fill() 메서드를 두 번 연속해서 사용하면 2차원 배열을 만들 수 있는데,
// 이러한 경우에는 참조관계가 되기 때문에 데이터가 한 번에 여러개씩 바뀔 수 있다.
// ex)
// let arr = Array(3).fill(Array(3).fill(0)); // 원소가 모두 0인 3*3 배열
// arr[0][0] = 1; arr; // 1열의 원소가 모두 1로 바뀜 (각 행이 모두 두 번째 fill()메서드로 만들어진 배열이므로 참조관계이다.)

// 4. 로또 추첨기

// slice(시작 인덱스, 끝 인덱스) : 배열의 '시작 인덱스'부터 '끝 인덱스' 전까지 잘라서 결과를 반환해줌.(원본 수정 X, '끝 인덱스'값 포함 X)
// 원본을 바꾸지 않고 정렬을 하고 싶은 경우 array.slice().sort((a,b)=>a-b);를 하면 된다.
// array.slice()를 하면 원본과 값이 똑같은 새로운 배열을 반환해주기 때문.

// sort()
// sort 인자로 함수를 주는데 반환값이 양수, 음수, 0이냐에 따라 결과가 다름.(sort는 원본을 바꿈)
// 문자열이 저장된 배열을 정렬하는 경우에는 array.slice().sort((a,b) => {a[0].charCodeAt() - b[0].charCodeAt()}) : 첫 글자만 비교
// array.slice().sort((a,b) => a.localeCompare(b)) : 사전 순서대로(오름차순) 정렬
// array.slice().sort((a,b) => b.localeCompare(a)) : 사전 순서의 반대로(내림차순) 정렬

// 함수 스코프(var), 블록 스코프(let, const)?
// 스코프 : 변수에 접근 가능한 범위
// 함수 스코프 : 함수 안에서 선언된 변수는 함수 바깥에서는 접근할 수 없다. 나머지 if, for, while, switch 안에서 선언된 var 변수는 {}바깥에서도 접근 가능!
// 블록 스코프 : 변수에 접근 가능한 범위가 {}기준으로 정해진다. {}안에서 선언된 변수는 {}바깥에서는 접근 불가능하다.
// let, const는 {}바깥에서는 접근이 불가능하고 블럭 안에 고정된다.
// var는 function 바깥에서만 접근 불가능하고 함수 이외의 블럭에는 고정이 안된다.

// 클로저(closure) : 함수와 함수 바깥에 있는 변수와의 관계 => variable(함수 스코프), 비동기 함수(setTImeout)가 만나면 클로저 문제가 발생한다.
// var i로 for문을 실행하는 경우, i가 함수 스코프 이므로 for문을 빠르게 통과하기 때문에 비동기 코드의 경우에는 이상한 결과를 출력해주었다.
// 따라서, 이 문제를 해결하기 위해서는 i 변수를 함수 안에 있는 변수로 만들어 주면 된다. (i를 함수의 인수로 주고, 함수 안에서 i를 j로 받아서 사용)
// var은 옛날 코드에는 사용되었기 때문에 알아두긴 해야하지만 코드를 작성할 때는 사용하지 않는 것이 좋다. (let, const만 사용)

// 5. 가위바위보 게임
//

// 6. 반응속도 체크
//

// 7.
//
