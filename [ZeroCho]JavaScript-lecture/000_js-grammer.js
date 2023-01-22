// 문자열과 다른 자료형을 연산할 때, 더하기 연산은 다른 자료형을 문자형으로 형변환 시킨 후 더해준다.
// 더하기를 제외한 나머지 연산은 문자열을 다른 자료형으로 형변환 시킨 후 연산을 진행한다.
// 웬만하면 자료형을 똑같이 맞춰준 후에 연산을 하는 것이 예상하지 못한 결과가 나오는 것을 막는 방법이다.

// typeof 데이터 : 인자로 전달해준 값의 자료형을 결과로 반환해주는 함수

// 비교 연산자
// ==, != : 연산자를 기준으로 왼쪽에 있는 값과 오른쪽에 있는 값만을 비교해서 결과를 boolean 자료형으로 반환해준다.
// ===, !== : 값과 자료형을 모두 비교해서 결과를 반환해준다.
// 웬만하면 ===, !==을 사용하는 것이 좋음. 예상치 못한 결과를 줄일 수 있다.

// !!데이터 or boolean(데이터) : 데이터를 boolean 자료형으로 변환해주는 연산자나 함수이다.
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
// console.log() 는 결과만 확인하고 싶을 때(디버깅 할 때) 사용한다.

// 자주 보이는 에러는 외워두는 것이 좋다.
// console.log()를 사용할 때, console 객체를 선언하지 않아도 에러가 발생하지 않는 이유?
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

// 변수를 선언하고 초기화할 때는 undefined를 반환해주지만,
// 이미 선언된 변수의 값을 변경할 때는 변경되는 값을 반환해준다.
// 사소하지만 아주 중요한 차이 (아직까지는 와닿지 않는다.)

// 상수, const
// const로 선언하면 값을 변경할 수 없다. (엄밀히 말하면 변경할 수 있는 경우도 있지만 일반적으로는 불가능하다.)
// const로 선언할 때는 초기화를 반드시 같이 해주어야 한다. (const 변수는 초기화할 때만 대입 연산자를 사용할 수 있다.)

// 변수, var : 옛날에 많이 사용했지만, 최근에는 var 대신 let을 사용한다.
// var은 기본적으로 let과 동일하지만, let과 다르게 같은 변수 이름으로 재선언할 수 있다.
// var로 변수를 선언할 때는 undefined, Infinity, let도 변수명으로 사용할 수 있다.(버그가 많이 발생해서 잘 안씀.)
// var 변수는 선언되기 전에도 코드에 선언이 되어 있다면 접근이 가능하고, let은 선언이 된 후에만 접근이 가능하다. (var의 이상한 특성 중 하나, 호이스팅)

// js는 기본적으로 코드를 위에서 아래로, 왼쪽에서 오른쪽으로 읽고 실행한다.
// 예외적으로 대입연산자(=)는 오른쪽을 먼저 연산하고 왼쪽에 대입해준다.
// 비동기 함수(setTimeout, setInterval) 등은 코드의 위치와는 상관없이 특정 조건이 되면 실행해준다.
// setTimeout()을 사용할 때는 데이터와 화면 변경 코드 모두 setTimeout()메서드 안에 인수로 주는 것이 좋다.
// 그래야 화면과 결과가 동시에 출력됨.

// 조건문
// if-else, if-else if 구문
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

// if문 중첩 제거하는 과정
// (1) if문 다음에 나오는 공통된 절차를 각 분기점 내부에 넣는다.
// (2) 분기점에서 짧은 절차부터 실행하게 if문을 수정한다.
// (3) 짧은 절차가 끝나면 return(함수 내부의 경우)이나 break(반복문 내부의 경우)로 중단한다.
// (4) else를 제거한다.

// 조건부 연산자(삼항 연산자)
// (조건식) ? (true일 경우 동작문) : (false일 경우 동작문)
// 조건식에 따라 동작문을 실행하여 결과값을 반환해준다!!
// 조건부 연산자를 사용하면 코드의 길이를 줄일 수 있지만, 코드의 가독성을 떨어뜨리는 경향이 있다.
// 조건부 연산자를 중첩할 때, 중첩된 부분을 소괄호로 묶어주거나 줄을 바꾸고 들여쓰기를 하면 코드의 가독성을 높일 수 있다.

// 반복문

// (1) while문
// while문은 시작, 조건식, 종료식이 흩어져 있어서 가독성이 떨어질 수 있지만,
// 무한반복문(break; 사용)에서는 while문을 사용하는게 보기 더 좋을 수 있다. (언제 끝날지 모르는 반복문)

// (2) for문
// for문은 시작, 조건식, 종료식을 생략이 가능하고  한 줄에 묶여 있어 가독성이 좋다.
// break; : 특정한 조건을 만족할 때 반복문을 멈추고 싶을 때 사용 -> if(조건식){break;}
// continue; : 특정한 조건일 때만 반복문을 건너뛰고 싶을 때 사용 -> if(조건식){continue;}

// 객체 : 자료형의 일종으로 배열(array), 함수(function), 배열이나 함수가 아닌 객체(object, 객체 리터럴)로 나뉜다.

// 1. 배열 : 다양한 자료형들을 하나로 묶어놓은 것
// 배열 안에는 같은 자료형이 아닌 값들도 넣을 수 있다. ex) let arr = ['a', 10, [1,2], b(변수), undefined, null, true]
// const로 선언한 객체는 객체를 통째로 바꾸는 것(대입)은 불가능하지만 객체 내부를 바꾸는 것(수정)은 가능하다.
// ex) const arr = [1,2,3,4,5].push(6) -> [1,2,3,4,5,6]
// ex) arr[0] = 0 -> [0,2,3,4,5,6]

// 배열 메서드

// (1) 원본 변형시키는 메서드

// 배열.unshift(값) : 배열 맨 첫 번째 자리에 값을 추가할 때 사용

// 배열.shift() : 배열 맨 첫 번째 자리의 값을 제거할 때 사용

// 배열.push(값) : 배열 맨 마지막 자리에 값을 추가할 때 사용

// 배열.pop() : 배열 맨 마지막 자리의 값을 제거할 때 사용

// 배열.splice(지우고 싶은 값의 인덱스, 지우고 싶은 값의 개수, 지워진 자리에 추가할 값)
// : 배열 중간의 값을 한 개 또는 여러 개 제거하거나 추가할 때 사용
// 배열.splice(1) -> 인덱스 1부터 끝까지 모든 값을 제거
// const로 선언한 배열의 원소를 모두 제거하고 싶을 때는, array.splice(0)을 하면 된다.

// 배열.join(',') : 배열의 원소들 사이에 ','을 추가해서 문자열로 만들어줌

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

// (2) 원본을 유지하는 메서드

//

// 배열.includes(값) : 배열 안에 값이 있으면 true, 없으면 false를 반환 (조건식에 자주 쓰임)

// 배열.indexOf(값) : 배열의 앞에서부터 값이 있나 검색하고 없으면 -1, 있으면 인덱스를 반환

// 배열.lastIndexOf(값) : 배열의 끝부분부터 값을 검색하고 없으면 -1, 있으면 인덱스를 반환

// 2. 함수 : 반복적인 작업을 덜하기 위해 자주 사용하는 코드를 함수로 정의해놓고 필요할 때마다 호출해서 사용한다.

// 반복되는 코드가 나오는 경우 함수를 만드는 것이 좋다.
// 함수를 만들 때 코드에서 달라지는 부분을 매개변수로 정하면 된다.

// 함수를 리턴하는 함수 : 고차원 함수(high order function)
// 고차원 함수에서 중괄호와 리턴이 생략된 경우가 많으니 눈에 익혀두자.
// 고차 함수는 함수끼리의 중복을 막기 위해 사용한다

// 함수의 이름을 정해주는 방법
// function a(){}  : 함수 선언문
// const b = function(){};  : 함수 표현식
// const c = () => {};  : 화살표 함수

// 화살표 함수인 경우, 중괄호 바로 다음 return이 오면 중괄호와 return을 생략해도 된다.

// 이름이 없는 함수(=익명 함수 : 딱 한번만 사용하는 함수일 때 주로 사용)
// function(){}
// ()=>{}

// 반환값 return
// 함수는 return을 생략하면 기본값인 undefined를 반환해주고, 반환을 한 후에는 함수를 종료한다.
// 항상 함수의 마지막에는 return undefined;가 생략되어 있다고 생각하면 된다(함수의 마지막 줄에서 undefined를 반환하고 함수를 종료).
// 반환하는 값은 모든 자료형이 가능하고 함수를 반환해줄 수도 있다. 함수를 반환해주는 함수를 고차함수라고 부른다.
// 여러 값을 반환할 때는 배열이나 객체로 반환해주어 한다.

// 매개변수(parameter)와 인자(argument)
// 함수를 선언할 때는 매개변수(parameter), 함수를 호출할 때는 인자(argument)
// 함수를 호출할 때, 인자가 매개변수와 연결되어서 값이 함수로 전달된다.
// 예약어 arguments : 함수 내에서 사용 가능하고, 함수가 전달받은 인자를 배열로 가진다(단, 화살표 함수에서는 사용 불가!).
// 함수 안에서 변수 선언하면 함수 안에서 사용할 수 있고, 함수 바깥에서 선언된 변수를 함수 안에서 사용할 수도 있다.
// 함수 안에서 선언한 변수를 함수 바깥에서 사용할 수는 없다.
// ex) function func(매개변수1, 매개변수2) {} : 함수 선언
// ex) func(인자1, 인자2); : func 함수 호출

// 매개변수와 인자의 개수가 다른 경우
// (1) 매개변수가 더 많은 경우 : 앞의 매개변수 부터 인자를 전달받고, 남은 매개변수에는 기본값인 undefined가 대입된다.
// (2) 인자가 매개변수보다 더 많은 경우 : 앞의 인자부터 매개변수로 값을 전달하고, 남은 인자는 무시된다.

// 3. 객체 리터럴 : 배열이나 함수가 아닌 객체 중에서 특정한 형식을 갖춘 객체를 객체 리터럴이라고 부른다.
// 어떠한 대상에 대해 관련있는 속성의 이름을 정해주고 값을 주어서 중괄호(braces)로 묶은 형태 === 객체 리터럴
// ex) const person = {name:'김종인', age:25, gender:'M', };
// 인덱스 대신 속성의 이름을 통해 인덱싱할 수 있다.
// ex) person['name'] -> '김종인'  or  person.name -> '김종인'

// 객체 리터럴 사용시 주의할 점들
// 마지막 속성에 값을 주고나서 쉼표를 찍는 것을 추천한다!! 다음 값을 추가할 때 한 줄만 작성하면 되고 에러 발생률도 줄일 수 있음.
// 속성 이름에 띄어쓰기나 숫자가 포함되어 있거나 첫 글자로 숫자가 오는 경우에는 속성이름을 문자열로 묶어줘야 한다!
// 속성 이름을 문자열로 묶어준 경우에는 그 속성에 접근할 때 객체.속성명으로 하면 에러가 뜬다.
// ex) person.3 score = [100, 98, 87]; (X) -> person['3 score'] = [100, 98, 87]; (O)
// 대괄호로 접근할 경우에는 속성명을 꼭 ''로 묶어주어야 한다!! 따라서 되도록이면 person.name 방식으로 접근하는 것이 좋다.
// 속성 이름과 같은 이름의 변수가 있을 경우에 변수가 대입돼서 예상하지 않은 결과가 나올 수 있음.

// 객체 속성 제거하기
// delete person.gender; -> gender 속성 제거됨.

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

// 태그의 id 속성은 고유한 값으로 주는 것이 좋다(js에서 id는 하나의 값만 가진다고 여기기 때문).
// id와 비슷한 속성으로 class가 있는데 class는 같은 값을 여러 번 주어도 상관없다.
// class 속성은 띄어쓰기를 통해 여러 값을 부여할 수도 있다.

// 나만의 변수명 정하는 규칙 : $가 앞에 붙은 변수는 태그를 가르키고 $$는 태그 여러 개를 가르킨다.
// querySelector의 인자로 'div span'이라고 주면 div의 자손 태그인 span 태그들을 선택해준다.
// 자식 태그 : 부모 태그 바로 아래에 포함된 태그들을 지칭함.
// 자손 태그 : 부모 아래에 포함된 모든 태그를 지칭함.
// 자식 태그를 선택해야할 경우 : querySelector('div>span')
// querySelector의 인자로는 태그 이름 뿐만 아니라 id(#), class(.) 속성도 줄 수 있다.
// id 속성은 html에서 고유하기 때문에 복잡한 태그인 경우 querySelector의 인자로 id값만을 주면 된다.
// ex)
// const $input = document.querySelector('input');
// console.log($input);
// const $button = document.querySelector('button');

// 태그.addEventListener('이벤트 이름', 리스너함수) : 이벤트가 발생될 때마다 리스너함수를 호출해준다.
// 리스너 함수에는 함수의 리턴값이 아닌 함수 자체를 인자로 주어야 하기 때문에 '함수이름()'(x) '함수이름'(o)
// 예외적으로, addEventListener의 두 번째 인수로 준 함수가 고차함수라면 함수이름(인수)으로도 가능.
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

// 배열.join(',') : 배열의 원소들 사이에 ','을 추가해서 문자열로 만들어줌
// 문자열.split('') : ''를 기준으로 문자열을 쪼개서 배열로 만들어줌
// 태그.innerHTML : innerHTML속성에 문자열을 할당할 때, 문자열 안에 html 태그가 있으면 인식해서 적용시켜줌.
// 태그.textContent : textContent속성에 값을 할당할 때, 값 안에 있는 html태그도 문자열로 인식해서 그대로 찍어줌.
// document.createElement('태그') : 태그를 생성시켜줌
// 태그.appendChild : 반드시 createTextNode로 텍스트를 만든 후에 그 값을 전달해주어야 한다. 여러 개 추가도 불가능(잘 안 쓰임).
// 태그.append : appendChild의 단점을 보완한 메서드로, 여러개 추가가 가능하고 문자열인 경우에는 createTextNode로 생성하지 않아도 된다.
// ex)
// $result.append(document.createElement('br'), `${winner}님이 이겼습니다.`);
// : $result 태그에 한 줄을 띄어주고 텍스트를 표시해줌.

// 배열에 대한 반복문 역할을 하는 메서드 종류, forEach(), map(), fill()
// 배열 메서드들은 성능은 for문보다 좀 떨어지지만 연달아 사용할 수 있어서 코드의 가독성을 더 높일 수 있다.

// forEach((el, idx)=>{콜백})메서드
// : 배열의 모든 원소에 대해 한 번씩 콜백함수를 실행해서 새로운 원소를 보여준다(원본은 안 바뀜).
// : 인수로는 콜백 함수를 주고 그 함수의 인수로는 배열의 원소와 인덱스를 줄 수 있다.

// map((el, idx)=>{콜백})메서드
// : 배열을 어떻게 바꿀지 콜백함수로 정의해서 인수로 주면 결과를 보여준다(원본은 안 바뀜).
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

// 재귀함수 : 자기 자신을 호출하는 함수
// setTimeout()과 setInterval을 let 변수에 저장하면 해당 타이머의 아이디가 저장됨.
// clearTimeout(타이머 아이디), clearInterval(타이머 아이디) : 타이머를 중간에 꺼줌.

// setInterval(콜백함수, 시간간격[ms]) : 시간간격마다 콜백함수를 실행해준다.
// setInterval()은 재귀 setTimeout()과 비슷한 결과를 나타낸다.
// setInterval()은 시간간격을 보장하려는 노력이 들어가 있는 함수이고,
// 재귀 setTimeout()은 시간간격을 보장하려는 노력이 없다.

// setTimeout(콜백함수, 시간[ms]) : 인수로 준 시간 이후에 콜백함수를 실행해준다.
// setTimeout()과 setInterval()은 브라우저가 자기 할 일을 다 끝내고 나서 실행되므로 시간이 정확하지 않을 수 있다.

// removeEventListener() : 생성한 addEventListener()를 지워주는 함수, 클릭은 되지만 자바스크립트의 event객체가 전달되지 않게 만듦.
// removeEventListener()를 사용할 때 주의할 점은 두 번째 인수의 함수가 같아야 한다(참조관계이어야 한다!)는 것이다.
// 따라서 함수를 변수에 넣어준 후에 그 변수를 removeEventListener() 두 번째 인자로 주면 실수를 안 할 수 있다.

// 조건식 꿀팁!
// diff === '강아지' || diff === '사자' || diff === '고양이' || diff === '거북이' (x)
// ['강아지', '사자', '고양이', '거북이'].includes(diff) (o)
// ['강아지', '사자', '고양이', '거북이'].indexOf(diff) > -1 (o)

// 변수를 선언할 때 공통되는 특성이 있는 변수들이 많은 경우 객체로 묶어서 사용하는 것이 좋다. 변수명 충돌을 막을 수 있다.

// 6. 반응속도 체크

// 변수 선언 위치에 따라 스코프가 달라지기 때문에 변수가 어떻게 사용될지 잘 생각하고 변수 선언 위치를 결정해야 한다.

// html class 속성은 띄어쓰기를 통해 여러 클래스를 줄 수 있다. ex) <div class="waiting ready now"></div> : waiting, ready, now 클래스
// 위와 같이 여러 클래스를 적용하는 경우, 태그.classList를 통해 접근할 수 있다 (유사 배열로 반환해줌).
// 중복된 클래스를 주는 경우에는 중복을 제거해줌.

// 태그.classList 메서드 contains, add, replace, remove
// 태그.classList.contains('클래스') : 태그에 클래스로 '클래스'가 있다면 true, 없다면 false를 반환함.
// 태그.classList.add('클래스') : 태그에 새로운 클래스 추가.
// 태그.classList.replace('기존 클래스', '수정 클래스') : '기존 클래스'를 '수정 클래스'로 이름을 바꿈.
// 태그.classList.remove('클래스') : '클래스'를 제거함.

// new Date() 객체 (문자열x)
// new Date() : 현재 시스템의 시각을 측정해줌.
// new Date(2021, 2, 31, 18, 30, 5) : 2021년 3(2+1)월 31일 18시 30분 5초 (월은 인덱스로 생각하면 됨.)
// new Date().getFullYear() : 현재 시스템의 연도를 가져옴. ex) 2023년 => 2023
// new Date().getMonth() : 현재 시스템의 월보다 1 작은 값 ex) 1월 => 0
// new Date().getDate() : 현재 시스템의 날짜 ex) 31일 => 31
// new Date().getHours() : 현재 시스템의 시 ex) 오후 6시 => 18
// new Date().getMinutes() : 현재 시스템의 분 ex) 30분 => 30
// new Date().getSeconds() : 현재 시스템의 초 ex) 5초 => 5
// new Date().getMilliseconds() : 현재 시스템의 밀리초 ex) 537밀리초 => 537
// const now = new Date(); now.setDate(23) : 변수에 저장된 날짜를 변경할 때 setDate()메서드 사용
// 이 이외에도 표준시로 변환하는 메서드나 시차를 고려해서 시간 수정해주는 메서드, 날짜를 문자열로 변환해주는 toLocaleString()메서드 등도 있다.

// 배열.reduce((누적값, 현재값, 인덱스) => {수식; return 새로운 누적값}, 초기값) : 배열의 거의 모든 메서드를 구현 가능한 만능 메서드!!
// : 누적값을 초기값으로 초기화하고, 배열의 각 원소에 대해 배열의 각 원소들을 현재값으로 받아서 함수 안의 수식을 적용한 후에 다시 누적값으로 돌려줌.
// : 최종적으로 반환되는 값은 배열의 모든 원소에 대해 수식을 적용했을 때 값이다.
// : 초기값을 생략하는 경우, 누적값은 배열의 0번째 인덱스 원소값을 받고, 현재값은 배열의 1번째 인덱스부터 마지막 인덱스까지 수식 적용됨.
// ex) records.reduce((a, c) => a + c) / records.length : records 원소들의 평균 구하는 코드
// ex) ['철수', '영희', '현영', '한솔'].reduce((a, c, i) => {a[i] = c; return a}, {}) : 배열을 객체 리터럴로 변환하는 코드

// debugger : 프로그램 실행시 해당 부분에서 멈추어 줌. 개발자 도구 들어가면 디버거 모드로 바뀌어 있고,
// 각각의 변수(스코프 별로 정리되어서 표시해줌)들에 저장된 값을 확인할 수도 있다.

// 7. 틱택토 게임

// 객체에 대한 구조분해 할당
// 변수명과 어떤 객체(document 등) 안의 속성, 메서드의 이름이 같은 경우 구조분해 할당을 사용할 수 있다.
// 예시와 같이 여러 개의 변수를 선언할 때 코드 길이를 대폭 줄일 수 있다.
// ex)
// const { body } = document;
// ===
// const body = document.body;
// ex)
/* a, b, c, e를 구조분해 할당하고 싶다면,
const obj = {
  a: 'hello',
  b: {
    c: 'hi',
    d: { e: 'wow' },
  },
};
const { a, b, b: { c }, b: { d: { e } } } = obj;
*/

// 배열에 대한 구조분해 할당
// ex)
// const arr = [1, 2, 3];
// const [one, two, three] = arr;
// ===
// const one = arr[0]; const two = arr[1]; const three = arr[2];
// two를 사용하지 않으려면
// const [one, , three] =arr; // two를 스킵하고 one, three만 선언.

// 이벤트 버블링 : 기본값
// html은 body>table>tr>td 태그에서 td태그를 클릭하면 body, table, tr, td 모두에서 이벤트가 발생한다.
// 따라서 td를 눌렀을 때 $table.addEventListener('click', onClick); 코드도 $td.addEventListener('click', onClick); 과 동일하게 동작함.

// event.currentTarget
// 만약 td를 클릭했을 때, td가 아니라 table 태그에 동작을 넣고 싶으면 event.target이 아니라, event.currentTarget을 하면 됨.
// event.currentTarget은 addEventListener()를 붙인 태그를 가르킨다.

// event.stopPropagation()
// 이벤트 버블링 현상을 막기 위한 메서드
// event.preventDefault()와 같은 방식으로 사용하면 된다.

// 이벤트 캡쳐링 (<-> 이벤트 버블링)
// 부모 태그를 클릭했을 때, 자식한테도 이벤트가 발생하게 하는 것(잘 안쓰임)
// addEventListener(입력, 함수, useCapture) : useCapture 인수 자리에 true를 주면 캡쳐링을 사용할 수 있다.
// ex) 팝업이 떴을 때, 팝업 바깥쪽을 클릭하면 팝업이 사라지게 할 때 이벤트 캡쳐링을 쓰면 된다.

// 태그.parentNode : 태그의 부모 태그를 선택해줌.
// 태그.children : 태그의 자식 태그를 모두 반환해줌. (유사 배열로 반환 -> 인덱스로 접근 가능)
// td.cellIndex : 해당 태그가 테이블에서 몇 열에 있는지 알려줌. td태그 속성
// tr.rowIndex : 해당 태그가 테이블에서 몇 행에 있는지 알려줌. tr태그 속성

// 유사배열 : 배열처럼 보이지만 실제로는 객체인 것.
// 유사배열은 배열과 달리 forEach나 map 메서드를 사용하지 못한다.
// Array.from(유사배열)을 하면 유사배열을 배열로 변환해줌.

// 1차원 배열.every() : 함수를 인수로 주고, 배열의 각각의 원소를 함수에 넣어서 판별.
// 함수에 넣은 결과가 배열의 원소 모두 다 true이어야만 true, 하나라도 false인 경우 false를 반환. (1차원 배열에만 가능)
// ex)
// rows.flat().every((td) => td.textContent); // : rows 배열의 모든 원소에 텍스트가 들어있으면 true, 하나라도 비어있으면 false

// flat() : 다차원 배열의 차원을 하나 낮춰주는 배열 메서드

// some() : every()의 반대
// 배열의 원소가 하나라도 true인 경우 true, 모두 false인 경우 false.
// every()와 some()은 결과가 판정되면 바로 메서드를 빠져나감.
// some()은 하나라도 true면 true, every()는 모두 true여야 true!!!

// forEach('함수')에서 함수 안에서 return을 해도 forEach는 빠져나오지 않는다. forEach문을 빠져나오는 방법은 거의 없다?

// 부모태그.removeChild(자식태그) : 자식태그를 html코드에서 제거해줌
// 부모태그.remove(자식태그) : 자식태그를 화면에서 제거해줌
// 부모태그.replaceChildren(자식태그, 다른태그) : 자식태그를 다른태그로 교체해줌.
// replaceChildren()에 인자로 아무것도 주지 않으면 자식태그를 전부 삭제함.

// 태그.parentNode : 부모 태그에 접근하여 태그로 반환해줌.
// 태그.parentElement : 태그.parentNode와 비슷한 결과 반환. 차이는 아직 모르겠음.

// 태그.childNodes : 모든 자식태그 접근하여 유사배열로 반환해줌. 인덱스를 사용하여 선택 가능.
// 태그.children : 태그.childNodes와 비슷한 결과 반환. 차이는 아직 모르겠음.
// 태그.childElementCount : 태그의 자식태그 개수를 숫자 자료형으로 반환해줌.

// 배열.splice() : 배열안의 원소를 잘라내지 않고 결과를 보여준 후, 원래 배열 그대로 반환.
// 배열.splice(0) : 배열안의 원소를 모두 잘라내고 결과를 보여준 후, 빈 배열을 반환.
// 배열.filter((원소) => 조건) : 조건에 만족하는 원소만 모은 배열을 결과로 보여줌(원본 변화X, 1차원 배열만 가능);

// 8. 텍스트 RPG
// display (css 속성)
// 태그에 속성으로 style="display:none"을 주면 화면에 표시하지 않음.
// 태그에 속성으로 style="display:block"을 주면 화면에 표시해줌
// 여러 화면을 만들어놓고 전환할 때 주로 사용.

// 변수가 많아질수록 변수가 무슨 역할을 하는지 명확히 알 수 있도록 변수명을 지어주는 것이 중요하다!

// input 태그의 type 속성이 "number"일 때, $input.value를 하면 문자열로 변환된다.
// 따라서 input 값을 숫자로 받고 싶을 때는 $input.valueAsNumber을 하면 된다.

// 참조관계, 얕은 복사, 깊은 복사
// 참조 관계인 경우에는, 원본이 변하면 참조 관계에 있는 데이터도 변한다.
// 얕은 복사인 경우에는, 가장 바깥쪽 객체만 복사가 되고 내부에 있는 객체는 참조관계가 된다.
// 깊은 복사인 경우에는, 가장 바깥쪽 객체 뿐만 아니라 내부에 있는 객체도 복사가 된다.
// 객체 안에 객체가 있는 경우에는 깊은 복사를 해야지만 참조관계가 끊기게 된다!
// ex)
// const monster1 = monster[0]; // 참조관계
// const monster2 = {...monster[0]}; // 얕은 복사 : 이 방법이 제일 낫다.(코드의 의도가 가장 잘 나타남)
// 얕은 복사는 slice()나 concat() 메서드를 사용하는 방법도 있다.
// const monster3 = JSON.parse(JSON.stringify(monster[0])); // 깊은 복사
// JSON.parse(Json.stringify())는 성능이 좋지 않고, 함수나 Date, Math같은 객체를 복사할 수 없다는 단점이 있음.
// 따라서, 깊은 복사는 라이브러리를 사용하는 경우가 많다. ex) lodash 라이브러리 안의 clone() 메서드 등

// 객체 속성으로 메서드를 줄 때,
// attack : function(monster) {} // 왼쪽 코드를 줄여서 아래와 같이 쓴다.
// attack(monster) {} // 엄밀하게는 다르지만 지금 단계에서는 상관없다.

// this
// this를 사용할 때는 화살표 함수를 사용하면 안된다. 화살표 함수에서 this는 window 객체를 가리키기 때문.
// 기본적으로 this는 window 객체를 가리키지만, 객체 안에서 선언된 메서드를 사용할 때 this는 객체 자기자신을 가리킨다.
// ex)
// const b = {name: '김종인', sayName() {console.log(this === b);}};
// b.sayName(); // true : this === b
// const bf = b.sayName();
// bf(); // false : this === window
// 객체.메서드()를 할 때에만 this가 객체 자기자신을 가리킨다!!

// 클래스 : 코드를 더 체계적으로 짜기 위해서 사용. (클래스도 객체임)
// 객체를 공장처럼 찍어내고 싶거나, 객체끼리 상호작용이 많을 때 클래스를 사용하면 편리하다.

// 생성자 함수, new
// 생성자 함수는 여러 객체를 공장처럼 찍어내기 위해 선언하는 함수이고,
// 객체를 생성할 때, new 생성자함수(속성들)를 변수에 할당하면, 새로운 객체를 만들어서 그 안에 속성을 넣어서 리턴해줌.
// new를 빼먹으면 생성자 함수 안의 this가 window를 가리키므로 window의 속성을 바꿔버림. 조심해서 사용해야 한다!
// 생성자 함수의 이름은 대문자로 시작하게 하는 것이 관례임. (자바스크립트 개발자들 간의 약속)
// ex)
/*
function Monster(name, hp, att, xp) {
  this.name = name;
  this.hp = hp;
  this.att = att;
  this.xp = xp;
}
const monster1 = new Monster('슬라임', 25, 10, 11);
const monster1 = new Monster('슬라임', 26, 10, 10);
*/
// 생성자 함수는 생성한 객체에 메서드를 추가할 때 prototype 객체를 사용한다.
/*
monster1.prototype.attack = function(monster){
  monster.hp -= this.att;
  this.hp -= monster.att;
};
*/

// class 문법 : 생성자 함수 기능 + prototype 객체
// 생성자 함수와 동일한 기능을 가지고, 객체를 생성할 때 new를 빼먹으면 오류가 뜸.(window 속성 변경하는 것을 막을 수 있음)
// class 안에 메서드를 선언하는 것도 가능하다. (화살표 함수 사용 불가능)
// 과거 생성자 함수와 다르게 관련있는 코드들을 한 곳에 모아둘 수 있어서 좋다.
// ex)
/*
class Monster{
  constructor(name, hp, att, xp){
    this.name = name;
    this.hp = hp;
    this.att = att;
    this.xp = xp;
  }
  attack(monster) {
    monster.hp -= this.att;
    this.hp -= monster.att;
  }
}
*/

// class 내에서도 관련있는 것끼리 묶어놓는 것이 코드를 읽기 편하다.
// constructor(){}에는 초기값들을 넣어주고, 다른 행동들은 관련있는 것끼리 메서드로 묶어둔다.

// class 안에서도 this는 그때그때 달라질 수 있고, this는 함수가 호출될 때 결정된다.
// this가 뭔지 알기 위해서는 함수를 호출하는 시점의 this를 찾아야 한다.
// 태그.addEventListener('click',func)에서 func 함수 안의 this는 태그를 가리킨다.(암기!)
// 따라서 addEventListener 메서드에 인수로 주는 함수는 화살표 함수를 쓰거나
// addEventListener 메서드 바깥에서 this를 _this변수에 저장한 후에 addEventListener 안에서는 _this를 사용해야 한다.
// this에 익숙하지 않으면 this를 사용할 때마다 console.log(this);를 해보는 것이 좋다.

// function() {} 안에서 this는 자기 자신만의 this를 가리키고, (function 마다 this가 가리키는 것이 다를 수도 있다!)
// () => {} 안에서 this는 바깥쪽 block의 this를 그대로 받아온다.
// 화살표 함수가 나온 이유는 함수 안에서 this가 달라지는 문제를 해결하기 위해서이다.

// 함수.bind(document)() : 함수가 가리키는 this를 document로 바꾸어줌
// 단, 화살표 함수는 bind() 메서드 사용해도 함수 바깥쪽의 this를 그대로 가져옴.

// 코드를 짤 때, 큰 틀(순서도)을 먼저 만들어 놓고, 그 다음에 세세한 메서드들을 정의하는 것이 좋다.

// 상속, 부모 클래스, 자식 클래스
// 부모 클래스를 생성하고 자식 클래스가 상속하면 부모 클래스에 있는 모든 속성, 메서드를 사용가능하다.
// 부모 클래스 위에 또 부모 클래스를 생성할 수도 있다. (조부모 클래스, ...)
// 부모 속성과 겹치는 경우, super(속성1, 속성2, ...) 메서드를 사용해서 중복되는 속성을 줄 수 있다. (부모의 생성자 함수 호출)
// 겹치지 않는 속성은 this.속성 = 값; 으로 주면 된다.
// 상속은 겹치는 속성, 메서드를 제거하기 위해 사용함.

// 부모 클래스의 메서드와 동일한 메서드를 사용하는 경우에는 생략해도 된다.
// 자식 클래스의 메서드를 호출할 때 자식 클래스에 메서드가 없는 경우, 자바스크립트는 부모 클래스, 조부모 클래스, ...을 순서대로 찾아본다.
// 부모 클래스의 메서드와 살짝 다른 경우, 메서드를 똑같이 만들고 super.메서드();를 한 후에 다른 부분은 코드로 짜면 된다.
// super은 부모 객체를 가리킨다.

// 자식 클래스는 하나의 부모 클래스만 상속 받는 것이 가능하다.
// 부모 클래스는 여러 번 상속해주는 것이 가능하다.

// Math.min(num1, num2, num3, ...) : 인수들 중 가장 작은 숫자를 반환해주는 메서드

// 9. 카드 짝맞추기 게임

// 배열1.concat(배열2) : 원본 배열을 수정하지 않고 배열1과 배열2를 이어붙인 새로운 배열을 반환해줌.
// concat 메서드는 인수로 1차원 배열을 주면 배열을 풀어서 원소를 이어붙여준다. (가장 바깥쪽에 있는 배열만 풀어줌)
// 배열이 아닌 객체는 풀어주지 않는다.

// querySelector() : 연달아 사용할 수 있다. 태그의 자식 태그 중에서 선택할 수 있음
// ex)
// document.querySelector('head').querySelector('title');
// document.querySelector('head title');

// element.classList.toggle('클래스 이름') : '클래스 이름' 이라는 클래스가 있으면 제거하고, 없으면 생성해준다.

// 프로그램 성능은 2중 반복문에서나 중요하지 단순한 push, concat 메서드들은 프로그램의 성능에 영향이 거의 없다.

// 원본이 바뀌는 배열 메서드
// push, pop, shift, unshift, splice, sort 등

// 백그라운드 : 타이머를 처리하고 이벤트 리스너를 저장하는 공간.
// setTimeout 같은 함수가 실행되면 백그라운드에서 시간을 재고 시간이 되면 setTimeout의 콜백함수를 태스크 큐로 보냅니다.
// 또한, addEventListener로 추가한 이벤트를 저장했다가 이벤트가 발생하면 콜백 함수를 태스크 큐로 보냅니다.
// 백그라운드에서는 코드를 실행하는 것이 아니라 실행될 콜백 함수를 태스크 큐로 보내는 역할을 함.
// 대부분의 비동기 코드들은 백그라운드에 저장이 된다.
// 백그라운드 특징 : 비동기, 동시에 실행이 되고, 특정 조건이 달성되면 태스크 큐로 콜백함수를 보내준다.

// 태스크 큐 : 실행돼야 할 콜백 함수들이 줄을 서서 대기하고 있는 공간(queue : 줄)
// 태스크 큐에 먼저 들어온 순서대로 함수가 실행된다.
// 태스크 큐에서도 함수가 직접 실행되지는 않고, 함수가 차례대로 대기하는 공간이다.
// 함수는 모두 호출 스택에서만 실행된다.

// 이벤트 루프 : 태스크 큐에서 호출 스택으로 함수를 이동시키는 역할을 함.
// 호출 스택이 비어 있으면 이벤트 루프는 태스크 큐에서 함수를 하나씩 (들어온 순서대로) 꺼내 호출 스택으로 옮김.
// 호출 스택으로 이동한 함수는 그때 실행됨.
// 실행이 완료된 함수는 호출 스택에서 빠져나가게 되고, 호출 스택이 비면 이벤트 루프는 태스크 큐에 있는 다음 함수를 호출 스택으로 옮김.

// 호출 스택(anonymous 함수) : 함수들이 실행되는 공간 (함수들이 호출되는 호출 스택)
// 함수 선언문의 끝 중괄호에 도달해야지만 호출 스택에서 빠져나간다.
// 호출 스택이 비어있으면 일반적으로는 자바스크립트가 끝나지만, 백그라운드나 태스크 큐에 함수들이 있으면 완전한 종료는 아니다.

// 항상 어떤 태그가 실행이 된다 하면 anonymous 라는 함수로 감싸져 있다고 생각하면 된다.
// 자바 스크립트를 실행하는 것은 function anonymous를 실행하는 것과 같다.
// console.trace() : 호출 스택을 기록해주는 함수. console.trace()의 결과는 호출된 함수 순서의 역순임.

// setTimeout()이 정확하지 않은 이유는 setTimeout() 전에 호출 스택으로 간 함수가 일이 오래 걸리면 타이머 시간이 되어도
// 그 일이 다 끝나고 나서 setTimeout()이 호출 스택으로 이동해서 실행되기 때문에 정확하지 않다.

// 비동기 코드의 에러를 찾을 때는 호출 스택, 백그라운드, 태스크 큐를 그려놓고 순서대로 코드를 따라가 보는 것이 좋다.

// 이벤트 루프 분석 절차 & 규칙
// 코드를 실행하면 anonymous 함수 생성되고, 어떤 함수가 호출 되면 호출 스택으로 간 후 코드가 다 끝나면 anonymous 함수 나감.
// setTimeout은 호출되면 호출 스택에 가는 것과 동시에 백그라운드에 타이머가 저장됨.
// 타이머는 지정한 시간이 지난 후에 콜백 함수를 태스크 큐로 옮겨줌.
// 이벤트 루프는 호출 스택이 비어 있으면 태스크 큐에 있는 함수를 호출 스택으로 옮겨줌.
// 호출 스택은 호출 스택에 있는 함수를 실행하고 함수가 끝나면 함수를 내보냄.
// 호출 스택, 백그라운드, 태스크 큐가 모두 비어있으면 프로그램이 종료됨.
// 이 과정이 숙달이 되면 호출 스택은 별로 신경쓰지 않고 백그라운드와 태스크 큐만 잘 관리하면 된다는 것을 느낄 것임.

// 비동기의 꽃은 promise인데 그때도 이벤트 루프를 사용해서 코드를 검토하면 된다. (아직 뭔지 모르겠음)
// 실행 context : 스코프와 호출 스택을 연결한 것.
// 실행 context와 이벤트 루프가 자바스크립트할 때 꼭 배워야할 두 가지이다.

// 10. 지뢰찾기 게임

// 자바스크립트의 핵심 : lexical 스코프, 실행 context, 이벤트 루프, promise, prototype
// lexical 스코프 : 함수를 어디서 호출하는지가 아니라 어디에 선언하였는지에 따라 스코프가 결정됨.
// 함수를 선언한 시점에 상위 스코프가 결정된다.

// 호이스팅 : 변수를 선언하고 초기화했을 때 선언 부분이 최상단으로 끌어올려지는 현상.(초기화는 그대로 남아있음.)
// 함수 표현식 : const say = function(){};

// 함수 선언식 : function say() {}
// 화살표 함수 : const say = () => {};

// document.querySelector('#table tbody') : id가 'table'인 태그 안에 있는 tbody 태그를 선택.
// document.querySelector 인수를 줄 때, 한 칸 띄우면 자식태그를 선택할 수 있다.

// table 태그 내에 구획을 나누고 싶을 때는 thead, tbody, tfoot 태그를 사용할 수 있다.
// 기능은 없지만 테이블 내에 구역을 나누는 용도로 사용한다.

// 자바스크립트의 데이터는 최대한 적게 사용하고 html의 데이터를 사용하는 것도 좋다.

// 프로그램을 처음 개발할 때는 간단하게 구현을 하고 점점 기능을 더해가는 것이 결과를 확인할 수도 있고, 개발 속도도 빠르다.
// 데이터를 먼저 바꾸고나서 데이터를 바탕으로 화면을 수정하는 습관을 들이는 것이 좋다.

// data[-1] -> undefined : 배열에 -1 인덱스를 주면 undefined 반환함.
// slice, splice 메서드를 사용할 때는 마이너스 인덱스를 사용 가능하지만 마이너스 인덱스로 원소에 접근할 때는 undefined 반환.
// data[-1][-1] : undefined[-1] 이므로 에러가 남
// 앞 && 뒤 : 앞이 존재하면(true이면) 뒤를 실행한다.
// 앞 || 뒤 : 앞이 존재하지 않으면(false이면) 뒤를 실행한다.
// 앞 ?. 뒤 : 앞이 undefined나 null이면 평가를 멈추고 undefined를 반환한다. 그렇지 않으면 뒤까지 실행한다. (optional chaining)
// func?.(); // -> optional chaining은 함수인 경우에도 사용 가능하다
// 앞 ?? 뒤 : 앞이 undefined나 null이 아니면 앞, 그렇지 않으면 뒤를 실행한다. (nullish coalescing)

// 재귀함수 : 함수 안에 자기 자신을 호출하는 함수
// 재귀함수를 사용할 때 빈번하게 나타나는 에러 : Maximum call stack size exceed -> 호출 스택의 사이즈를 초과했다.
// 호출 스택 사이즈(call stack size) 확인하기 (13922개)
// let i = 0;
// function recurse() {
//   i++;
//   recurse();
// }
// try {
//   recurse();
// } catch (ex) {
//   alert('최대 크기는 ' + i + '\nerror: ' + ex);
// }

// 호출 스택 사이즈를 초과하는 경우, 백그라운드와 태스크 큐에 함수를 나누어 주면 해결이 가능하다.(setTimeout)
// setTimeout(함수, 0)을 하면 백그라운드에 setTimeout, 태스크 큐에 함수를 주어서 호출 스택이 넘치는 것을 막을 수 있다.
// 연산량이 많아지면 브라우저가 느려지는 현상이 발생하므로 연산량을 최소화하는 코드를 짜야 한다.

// 태그.innerHTML = ''; -> 해당 태그 내에 있는 html 코드를 다 지움.
// const dev = false; dev && $td.textContent = 'X' // -> 개발 모드일 경우에만 X 표시

// 더블 클릭 이벤트 : 클릭과 클릭 사이의 간격이 몇 ms 미만이면 더블 클릭으로 간주.
// 왼쪽 오른쪽 동시 클릭 이벤트 : 왼쪽, 오른쪽 클릭이 몇 ms 미만이면 동시 클릭으로 간주.
// 이런 식으로 이벤트를 만들고 동작을 결정해줄 수 있다.

// 재귀 함수는 일단 구현을 해보고 그 다음에 하나하나 최적화 해나가면 쉽다.
// 처음부터 완벽하게 재귀함수를 구현하는 것은 불가능하다.

// 11. 2048 게임

// getElementByID : 태그의 id를 가지고 태그를 선택하는 메서드
// 인수로 아이디를 줄 때 #을 붙이지 않고, id만을 가지고 태그를 선택할 수 있다.
// querySelector 가 getElementById 보다 최근에 나온 메서드이고, 태그명, id, class 등을 가지고 태그를 선택가능함.
// 비슷한 메서드로 getElementsByClassName, getElementsByName, getElementsByTagName 등이 있다.

// 데이터를 바꾸고 화면도 같이 바꿔주는 작업이 굉장히 귀찮은 작업 중 하나이다.
// REACT, VUE, ANGULAR 등은 데이터를 바꾸면 화면을 자동으로 바꿔준다. (웹 개발자한테 필수)

// 함수 선언문으로 선언한 함수는 선언한 위치에 상관없이 코드 내에서 사용 가능하다.(호이스팅O)
// 화살표 함수로 선언한 경우에는 사용하기 전에 선언이 되어있어야 한다.(호이스팅X)

// document.createDocumentFragment()
// fragment : fragment에 자식 태그를 append 하면 메모리에만 저장되고 화면은 다시 그리지 않는다.(성능 향상을 위해 사용.)
// fragment 태그가 table에 append 되면 그제서야 fragment 태그가 사라지고 fragment의 자손 태그들이 table에 append 되면서 화면을 다시 그림.
// fragment없이 table태그에 자식 태그를 append 할 경우 append 하는 자식 태그의 개수만큼 화면을 다시 그리기 때문에
// 브라우저 속도가 매우 느려질 수 있다.

// 함수는 함수 바깥의 데이터(변수)를 많이 사용하지 않을수록 재사용성이 올라간다. (함수 내에서 선언된 변수를 주로 사용하면 좋다.)
// 함수 바깥의 데이터를 사용하면 바깥의 데이터에 함수가 의존적이게 되므로 재사용성이 떨어진다.

// 이벤트 종류
// keydown : 키보드 키를 눌렀을 때
// keyup : 키보드 키를 눌른 상태에서 떼었을 때
// mousemove : 마우스를 움질일 때
// keypress : 키보드 키를 계속 누르고 있을 때

// mousedown : 마우스를 클릭했을 때
// mouseup : 마우스를 클릭한 상태에서 떼었을 때
// drag, move, dragover, dragleave , dragenter, drop, drag 등 마우스 드래그 관련 이벤트도 있다.
// 마우스나 키보드 이벤트는 window나 document 같은 넓은 범위에 설정하는 경우가 많다.
// 마우스 이벤트는 위, 아래, 왼쪽, 오른쪽을 기준선을 정해서 구분할 수 있다.
// 마우스 이벤트의 속성에는 여러가지 좌표들이 있는데, clientX, offsetX, screenX, movementX가 있다.(Y도 동일한 종류가 있음)
// client :  현재 브라우저 페이지 내에서의 x, y 좌표를 가리킨다.(px단위로)
// page : 현재 브라우저 페이지 내에서의 x, y 좌표를 가리키지만, 스크롤이 있으면 스크롤한 픽셀값까지 포함해서 좌표를 나타낸다.
// offset :  이벤트를 연결한 대상을 기준으로 마우스의 x, y 좌표를 가져온다.
// offset : 페이지 내의 다른 태그에 이벤트를 연결한 경우, 태그 왼쪽 위의 좌표가 0이다(window에 이벤트를 연결하면 offset과 client가 같은 값).
// screen : 모니터를 기준으로 모니터 왼쪽 위의 좌표가 0이 된다.
// movement : 지난 mousemove 이벤트와 비교해 마우스를 얼마나 움직였는지 표시한다.

// 프로그램을 짤 때는 애매한 부분이 없어야 한다. 애매한 부분은 기준을 정해서 확실하게 만들어주어야 함.

// 개발을 할 때는 항상 극단적인 상황에서 에러가 자주 발생하므로,
// 개발 과정에서 테스트 할 더미 데이터를 만들어두고 테스트 할 때 사용하면 좋다.

// switch문에서 case문 안에 const나 let 변수선언을 하는 경우 {}로 묶어주어야 한다.
// const, let이 블록 스코프 이므로 중괄호 안에서만 사용된다.

// 코드를 예쁘게 잘 짜는 것보다 제대로 동작하게 짜는 것이 더 중요하다.
// 코드나 언어보다 머리속으로나 순서도를 이용해서 설계를 잘하는 것이 더 중요하다.
// 코딩할 때, 사람이 어떻게 하는지를 생각해보고 따라서 코딩하면 반은 맞는다.
// 반은 틀린 이유는, 사람은 비효율적으로 행동하는 경우가 있으므로 알고리즘을 배워서 적용하면 성능도 향상시킬 수 있다.

// forEach : 성능은 for문보다 낮지만, 코드의 가독성이 올라간다.
// for문 : 성능이 중요할 때 주로 쓴다.

// 12. 두더지 잡기
//
