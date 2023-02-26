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
// 1) 자료 결합도(Data Coupling)
//
// 2) 스탬프 결합도(Stamp Coupling)
//
// 3) 제어 결합도(Control Coupling)
//
// 4) 외부 결합도(External Coupling)
//
// 5) 공통 결합도(Common Coupling)
//
// 6) 내용 결합도(Content Coupling)
//

// - 응집도(Cohesion)
// 한 모듈 내부의 처리 요소들이 서로 관련되어 있는 정도를 의미한다.
// 즉, 모듈이 독립적인 기능을 수행하는지 또는 하나의 기능을 중심으로 책임이 잘 뭉쳐있는지를 나타내며 모듈이 높은 응집도를 가질수록 좋다.
// 1) 기능적 응집도(Functional Cohesion)
//
// 2) 순차적 응집도(Sequential Cohesion)
//
// 3) 통신적 응집도(Communicational Cohesion)
//
// 4) 절차적 응집도(Procedural Cohesion)
//
// 5) 일시적 응집도(Temporal Cohesion)
//
// 6) 논리적 응집도(Logical Cohesion)
//
// 7) 우연적 응집도(Coincidental Cohesion)
//