// - 모듈화(Modularization)
// 소프트웨어를 각 기능별로 나누는 것을 말한다.
// 각각의 기능별로 나누어진 모듈화의 결과를 모듈(Module)이라고 하며 서브루틴(Subroutine), 소프트웨어 내의 프로그램 또는 작업 단위 등의 의미로 사용된다.
// 좋은 모듈화는 목적에 맞는 기능만으로 모듈을 나누는 것이다.
// 각각의 모듈은 주어진 기능만을 독립적으로 수행하며 다른 모듈과 적게 연관되어야 한다(독립성이 높은 모듈일수록 좋음).
// 독립성이 높으면 해당 모듈을 수정하더라도 다른 모듈에 끼치는 영향이 적으며 오류가 발생하더라도 쉽게 문제를 발견하고 해결할 수 있다는 장점이 있다.
// 모듈의 독립성은 결합도와 응집도로 측정한다.

// - 결합도(Coupling)
// 서로 다른 모듈 간의 상호 의존하는 정도 또는 연관된 관계를 의미한다.
// 자바의 클래스로 예를 들면, 결합도가 높은 클래스는 다른 클래스와 연관된 정도가 높다.
// 따라서 해당 클래스를 변경하면 연관된 클래스도 변경해야 하며, 다른 코드에서 클래스를 재사용하기도 어렵다.
// - 결합도가 낮은 순서
// 자료 결합도 < 스탬프 결합도 < 제어 결합도 < 외부 결합도 < 공통 결합도 < 내용 결합도
// - 결합도 종류
// 1) 자료 결합도(Data Coupling)
// 가장 낮은 결합도를 갖는다(가장 좋은 결합 형태).
// 모듈끼리 단순히 파라미터 등을 통해 데이터를 주고 받는 경우이다.
// 여기서 주고 받는 데이터는 모듈의 기능 수행에 있어서 로직을 제어하거나 하지 않는 순수한 자료형 요소이다.
// 또한 한 모듈을 변경하더라도 다른 모듈에는 영향을 끼치지 않는 결합 상태이다.
// 2) 스탬프 결합도(Stamp Coupling)
// 두 모듈이 동일한 자료 구조를 참조하는 형태의 결합도이다.
// 즉, 모듈 간의 인터페이스로 배열 또는 오브젝트 등이 전달되는 경우를 말한다.
// 자료 구조의 형태가 변경되면 그것을 참조하는 모든 모듈에 영향을 주며 변경되는 필드를 실제로 참조하지 않는 모듈에도 영향을 준다.
// 자료 결합도와의 차이점은 단순 데이터 타입이 아닌 오브젝트 형태의 자료 구조를 전달한다는 것이다.
// 3) 제어 결합도(Control Coupling)
// 어떤 모듈이 다른 모듈 내부의 논리적인 흐름을 제어하는 요소를 전달하는 경우를 말한다.
// 예를 들면, 파라미터로 전달되는 값에 따라서 모듈 내부 로직의 처리가 달라지는 Flag 값 등으로 결합되는 형태이다.
// 4) 외부 결합도(External Coupling)
// 모듈이 외부에 있는 다른 모듈 또는 데이터를 참조할 때의 결합 형태를 말한다.
// 외부 결합도는 모듈의 외부 데이터, 통신 프로토콜 등을 공유할 때 발생한다.
// 데이터를 참조 또는 공유하는 결합 형태가 이어서 살펴볼 공통 결합도와 비슷하기 때문에 외부 결합도에 대한 설명이 생략되는 경우도 있지만,
// 외부 결합도는 공통 데이터와 달리 참조하는 데이터가 외부에 위치한다.
// 5) 공통 결합도(Common Coupling)
// 여러 모듈이 하나의 데이터 영역을 참조하여 사용하는 형태이다.
// 전역 변수(global variable)를 예로 들 수 있다.
// 전역 변수의 변경이 여러 모듈에 영향을 끼칠 수 있다.
// 6) 내용 결합도(Content Coupling)
// 가장 높은 결합도를 갖는다(가장 좋지 않은 결합 형태).
// 어떤 모듈이 사용하려는 다른 모듈의 내부 기능과 데이터를 직접 참조하는 경우이다.
// 다른 모듈의 로컬 데이터에 접근하는 경우처럼 사용하고자 하는 모듈의 내용(코드)을 알고 있어야 한다.
// 모듈의 변경이 발생하는 경우 이를 참조하는 모듈의 변경이 반드시 필요하게 되므로 가장 좋지 않은 결합 형태이다.

// - 응집도(Cohesion)
// 한 모듈 내부의 처리 요소들이 서로 관련되어 있는 정도를 의미한다.
// 즉, 모듈이 독립적인 기능을 수행하는지 또는 하나의 기능을 중심으로 책임이 잘 뭉쳐있는지를 나타내며 모듈이 높은 응집도를 가질수록 좋다.
// - 응집도가 높은 순서
// 기능적 응집도 > 순차적 응집도 > 통신적 응집도 > 절차적 응집도 > 일시적 응집도 > 논리적 응집도 > 우연적 응집도
// - 응집도 종류
// 1) 기능적 응집도(Functional Cohesion)
// 응집도가 가장 높으며, 가장 좋은 응집 형태이다.
// 모듈 내의 모든 요소들이 하나의 기능을 수행하기 위해 구성된 경우를 말한다.
// 예를 들면, 코사인(cosine)과 같은 삼각함수를 계산하는 기능을 모아둔 함수 등이다.
// 2) 순차적 응집도(Sequential Cohesion)
// 한 요소의 출력이 다른 요소의 입력으로 사용되는 형태이다.
// 어떤 모듈이 특정 파일을 읽고 처리하는 기능을 하는 것 등과 같다.
// 3) 통신적 응집도(Communicational Cohesion)
// 모든 요소들이 동일한 입력 또는 출력 데이터를 사용하여 서로 다른 기능을 수행하는 경우이다.
// 앞서 살펴본 순차적 응집도와 다르게 처리 순서가 중요하지 않다.
// 4) 절차적 응집도(Procedural Cohesion)
// 모듈내에서 여러 개의 기능 요소가 순차적으로 수행되지만 다음 기능 요소로 데이터가 아닌 흐름 제어 요소가 전달되는 경우이다.
// 예를 들면, 파일을 읽을 때 접근 허가를 확인한 후에 파일을 읽는 형태 등이다.
// 5) 일시적 응집도(Temporal Cohesion)
// 각 기능 요소들이 순서에 상관없이 특정 시점에 반드시 수행되는 경우이다.
// 예를 들면, 프로그램이 구동될 때 초기화시키는 모듈이나 예외 상황이 발생했을 때 오류 로그를 개발자에게 전송하는 기능 등 순서에 상관없는 경우를 말한다.
// 6) 논리적 응집도(Logical Cohesion)
// 유사한 성격을 갖거나 특정 형태로 분류되는 처리 요소들로 모듈을 구성하며 논리적으로 비슷한 기능을 수행하지만 서로의 관계는 밀접하지 않은 형태이다.
// 7) 우연적 응집도(Coincidental Cohesion)
// 응집도가 가장 낮으며, 가장 좋지 않은 응집 형태이다.
// 모듈 내부의 각 구성 요소들이 아무런 관련 없이 구성된 형태이다.
// 앞서 살펴본 논리적 응집도와 비슷하지만, 유사한 성격이나 형태가 없으며 모듈 수정이 사이드 이펙트를 발생시킬 가능성이 매우 높다.
