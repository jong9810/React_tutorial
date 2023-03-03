// 2022년 03월 정보처리기사 필기
//-------------------------------------------------------------------------------------------------------------------------------------------------

// 소프트웨어 설계

// 1. UI 설계 시 오류 메시지나 경고에 관한 지침
// (1) 메시지는 이해하기 쉬워야 한다. - 직관성
// (2) 오류로부터 회복을 위한 구체적인 설명이 제공되어야 한다. - 유효성
// (3) 오류로 인해 발생될 수 있는 부정적인 내용을 적극적으로 사용자들에게 알려야 한다. - 학습성
// (X) 소리나 색의 사용을 줄이고 텍스트로만 전달하도록 한다.

// 2. 애자일(Agile) 소프트웨어 개발에 대한 설명
// (1) 공정과 도구보다 개인과의 상호작용을 더 가치 있게 여긴다.
// (X) 동작하는 소프트웨어보다는 포괄적인 문서를 가치 있게 여긴다. -> 포괄적인 문서보다는 동작하는 소프트웨어를 가치 있게 여긴다.
// (3) 계약 협상보다는 고객과의 협력을 가치 있게 여긴다.
// (4) 계획을 따르기보다 변화에 대응하기를 가치 있게 여긴다.

// 3. 소프트웨어 설계에서 요구사항 분석에 대한 설명
// (1) 소프트웨어가 무엇을 해야하는가를 추적하여 요구사항 명세를 작성하는 작업이다.
// (2) 사용자의 요구를 추출하여 목표를 정하고 어떤 방식으로 해결할 것인지 결정하는 단계이다.
// (X) 소프트웨어 시스템이 사용되는 동안 발견되는 오류를 정리하는 단계이다.
// (4) 소프트웨어 개발의 출발점이면서 실질적인 첫 번째 단계이다.
// <해설>
// - 요구사항 분석 프로세스
// (요구사항)도출 -> (요구사항)분석 -> (요구사항)명세 -> (요구사항)확인

// 4. 객체지향 기법에서 상위 클래스의 메소드와 속성을 하위 클래스가 물려받는 것
// (X) Abstraction - 추상화
// (X) Polymorphism - 다형성
// (X) Encapsulation - 캡슐화
// (4) Inheritance - 상속
// <해설>
// - Object-Oriented-Programming.js 참고

// 5. 설계 기법 중 하향식 설계 방법과 상향식 설계 방법에 대한 비교 설명
// (1) 하향식 설계에서는 통합 검사 시 인터페이스가 이미 정의되어 있어 통합이 간단하다.
// (2) 하향식 설계에서 레벨이 낮은 데이터 구조의 세부 사항은 설계 초기 단계에서 필요하다.
// (3) 상향식 설계는 최하위 수준에서 각각의 모듈들을 설계하고 이러한 모듈이 완성되면 이들을 결합하여 검사한다.
// (X) 상향식 설계에서는 인터페이스가 이미 성립되어 있지 않더라도 기능 추가가 쉽다.
// <해설>
// - TopDown-BottomUp.js 참고

// 6. 자료 흐름도(DFD, Data Flow Diagram)의 각 요소별 표기 형태
// (1) Process : 원
// (2) Data Flow : 화살표
// (X) Data Store : 삼각형 -> 평행선
// (4) Terminator : 사각형
// <해설>
// - Data-Flow-Diagram.js 참고

// 7. 소프트웨어 개발에 이용되는 모델(Model)에 대한 설명
// (1) 모델은 개발 대상을 추상화하고 기호나 그림 등으로 시각적으로 표현한다.
// (2) 모델을 통해 소프트웨어에 대한 이해도를 향상시킬 수 있다.
// (3) 모델을 통해 이해 당사자 간의 의사소통이 향상된다.
// (X) 모델을 통해 향후 개발될 시스템의 유추는 불가능하다. -> 유추가 가능하다.
// <해설>
// - 소프트웨어 개발시 모델은 향후 개발될 시스템을 유추하기 위해서 하는 활동이며, 주로 시스템 개발자가 수행한다.

// 8. 다음의 설명에 해당하는 언어는?
// - 객체지향 시스템을 개발할 때 산출물을 명세화, 시각화, 문서화하는 데 사용된다.
//   즉, 개발하는 시스템을 이해하기 쉬운 형태로 표현하여 분석가, 의뢰인, 설계자가 효율적인 의사소통을 할 수 있게 해준다.
//   따라서, 개발 방법론이나 개발 프로세스가 아니라 표준화된 모델링 언어이다.
// (X) JAVA
// (X) C
// (3) UML(Unified Modeling Language)
// (X) Python

// 9. 다음 내용이 설명하는 UI설계 도구는?
// - 디자인, 사용방법설명, 평가 등을 위해 실제 화면과 유사하게 만든 정적인 형태의 모형
// - 시각적으로만 구성 요소를 배치하는 것으로 일반적으로 실제로 구현되지는 않음
// (X) 스토리보드(Storyboard)
// (2) 목업(Mockup)
// (X) 프로토타입(Prototype)
// (X) 유스케이스(Use-case)
// <해설>
// - 스토리보드(Storyboard)
// 디자이너와 개발자가 최종적으로 참고하는 작업 지침서
// 상단이나 우측에 제목, 작성자 등을 입력하고 좌측에는 UI 화면, 우측엔 디스크립션(설명)을 기입한다.
// - 목업(Mockup)
// 제품 디자인 평가를 위하여 만들어지는 실물 크기의 정적 모형.
// IT분야의 경우 실제 양산품을 만들기 전에 디자인만을 구현한 것을 가리킨다.
// - 프로토타입(Prototype)
// 와이어프레임이나 스토리보드 등에 인터랙션을 적용함으로써 실제 구현된 것처럼 테스트가 가능한 동적인 형태의 모형.
// - 유스케이스(Use-case)
// 사용자 측면에서의 요구사항으로, 사용자가 원하는 목표를 달성하기 위해 수행할 내용을 기술한다.

// 10. 애자일(Agile) 기법 중 스크럼(Scrum)과 관련된 용어에 대한 설명
// (1) 스크럼 마스터(Scrum Master)는 스크럼 프로세스를 따르고, 팀이 스크럼을 효과적으로 활용할 수 있도록 보장하는 역할 등을 맡는다.
// (2) 제품 백로그(Product Backlog)는 스크럼 팀이 해결해야 하는 목록으로 소프트웨어 요구사항, 아키텍처 정의 등이 포함될 수 있다.
// (X) 스프린트(Sprint)는 하나의 완성된 최종 결과물을 만들기 위한 주기로 3달 이상의 장기간으로 결정된다.
// (4) 속도(Velocity)는 한 번의 스프린트에서 한 팀이 어느 정도의 제품 백로그를 감당할 수 있는지에 대한 추정치로 볼 수 있다.
// <해설>
// - 스프린트
// 실제 개발을 2 ~ 4주간 진행하는 과정
// 스프린트 백로그에 작성된 Task를 대상으로 작업 시간을 측정한 후 담당 개발자에게 할당한다.
// Task는 해야할 일, 진행 중인 일, 완료된 일의 상태로 구성된다.
// - Agile-Methodology.js 참고

// 11. UML 다이어그램 중 정적 다이어그램
// (1) 컴포넌트 다이어그램
// (2) 배치 다이어그램
// (3) 순차 다이어그램
// (4) 패키지 다이어그램
// <해설>
// - UML-Diagram.js 참고

// 12. LOC 기법
// <내용 정리>
// - Project-Estimate-Method.js 참고

// 13. 클래스 설계 원칙
// (X) 단일 책임원칙 : 하나의 클래스만 변경 가능해야 한다.
// (2) 개방-폐쇄의 원칙 : 클래스는 확장에 대해 열려 있어야 하며 변경에 대해 닫혀 있어야 한다.
// (X) 리스코프 교체의 원칙 : 여러 개의 책임을 가진 클래스는 하나의 책임을 가진 클래스로 대체되어야 한다.
// (X) 의존관계 역전의 원칙 : 클라이언트는 자신이 사용하는 메소드와 의존관계를 갖지 않도록 해야 한다.
// <해설>
// - Object-Oriented-Programming.js 참고

// 14. GoF(Gangs of Four) 디자인 패턴에서 생성(Creation) 패턴
// (X) 컴퍼지트(Composite) - 구조 패턴
// (X) 어댑터(Adapter) - 구조 패턴
// (X) 추상 팩토리(Abstract Factory) - 생성 패턴
// (X) 옵저버(Observer) - 행위 패턴
// <해설>
// - Design-Pattern.js

// 15. 아키텍처의 설계 과정
// <해설>
// - 설계 목표 설정 -> 시스템 타입 결정 -> 아키텍처 패턴 적용 -> 서브시스템 구체화 -> 검토

// 16. 사용자 인터페이스를 설계할 경우 고려해야할 가이드라인
// (X) 심미성을 사용성보다 우선하여 설계해야 한다. -> 심미성이 아니라 사용성이 최우선으로 고려되어야 한다.
// (2) 효율성을 높이게 설계해야 한다.
// (3) 발생하는 오류를 쉽게 수정할 수 있어야 한다.
// (4) 사용자에게 피드백을 제공해야 한다.
// <해설>
// - User-Interface.js 참고

// 17. 소프트웨어 설계에서 자주 발생하는 문제에 대한 일반적이고 반복적인 해결 방법
// (X) 모듈 분해
// (2) 디자인 패턴
// (X) 연관 관계
// (X) 클래스 도출
// <해설>
// - 디자인 패턴 : 객체지향 프로그래밍 설계를 할 때, 자주 발생하는 문제들을 피하기 위해 사용되는 패턴.

//  18. 객체지향 분석기법의 하나로 객체 모형, 동적 모형, 기능 모형의 3개 모형을 생성하는 방법은?
// (X) Wrifs-Block Method
// (X) Rumbaugh Method
// (X) Booch Method
// (X) Jacobson Method
// <해설>
// - Object-Oriented-Programming.js 참고

// 19. 입력되는 데이터를 컴퓨터의 프로세스가 처리하기 전에
// 미리 처리하여 프로세서가 처리하는 시간을 줄여주는 프로그램이나 하드웨어를 말하는 것은?
// (X) EAI
// (X) FEP
// (X) GPL
// (X) Duplexing
// <해설>
// - EAI(Enterprise Application Integration)
// 기업 응용 프로그램을 통합, 기업용 응용 프로그램의 구조적 통합 방안을 가리킨다.
// - FEP(Front-End Processor)
// 입력되는 데이터를 컴퓨터의 프로세서가 처리하기 전에 미리 처리하여 프로세서가 차지하는 시간을 줄여주는 프로그램이나 하드웨어
// - GPL(General Public License)
// 자유 소프트웨어 재단(Free Software Foundation, FSF)에서 만든 자유 소프트웨어 라이선스
// - Duplexing(이중화)
// 이중화(데이터베이스의 회복 기법 중 가장 간단한 방법).

// 20. 객체지향 개념 중 하나 이상의 유사한 객체들을 묶어 공통된 특성을 표현한 데이터 추상화를 의미하는 것은?
// (X) Method
// (2) Class
// (X) Field
// (X) Message
// <해설>
// - Object-Oriented-Programming.js 참고
// - Method(메서드)
// 클래스로부터 생성된 객체를 사용하는 방법.
// 객체가 메시지(명령)를 받아 실행해야 할 구체적인 연산.
// - Message(메시지)
// 객체 간 상호작용을 하기 위한 수단.
// 객체에게 어떤 행위를 하도록 지시하는 방법.
// - Class(클래스)
// 특정 객체 내에 있는 변수와 메서드를 정의하는 일종의 틀.
// 객체지향 프로그래밍에서 데이터를 추상화하는 단위이다.
// - Field(필드)
// SQL에서 열 또는 속성이라고 불리는 것.

//-------------------------------------------------------------------------------------------------------------------------------------------------

// 소프트웨어 개발

// 21. 클린 코드(Clean Code)를 작성하기 위한 원칙
// (X) 추상화 : 하위 클래스/메서드/함수를 통해 애플리케이션의 특성을 간략하게 나타내고, 상세 내용은 상위 클래스/메서드/함수에서 구현한다.
// (2) 의존성 : 다른 모듈에 미치는 영향을 최소화하도록 작성한다.
// (3) 가독성 : 누구든지 읽기 쉽게 코드를 작성한다.
// (4) 중복성 : 중복을 최소화할 수 있는 코드를 작성한다.
// <해설>
// - 추상화 : 상위 클래스는 프로그램 특성만 간략하게, 하위 클래스는 세부적인 내용 구현.
// - 의존성 배제 : 다른 모듈에 미치는 영향을 최소화하여 코드 변경시 영향이 가지 않도록 작성.
// - 중복성 최소화 : 코드의 중복을 최소화.
// - 가독성 : 누구든 읽기 쉽게 작성.
// - 단순성 : 프로그램을 최소 단위로 분리해 작업을 한 번에 하나씩 처리하도록 작성.

// 22. 단위 테스트에서 테스트의 대상이 되는 하위 모듈을 호출하고, 파라미터를 전달하는 가상의 모듈로 상향식 테스트에 필요한 것은?
// (X) 테스트 스텁(Test Stub)
// (2) 테스트 드라이버(Test Driver)
// (X) 테스트 슈트(Test Suites)
// (X) 테스트 케이스(Test Case)
// <해설>
// - 테스트 스텁(Test Stub)
// 제어 모듈이 호출하는 타 모듈의 기능을 단순히 수행하는 도구로, 일시적으로 필요한 조건만을 가지고 있는 테스트용 모듈.
// - 테스트 드라이버(Test Driver)
// 테스트의 대상이 되는 하위 모듈을 호출하고, 파라미터를 전달하는 가상의 모듈로, 상향식 테스트에 사용된다.
// - 테스트 슈트(Test Suites)
// 테스트 대상 컴포넌트나 모듈, 시스템에 사용되는 테스트 케이스의 집합.
// - 테스트 케이스(Test Case)
// 사용자의 요구사항을 정확히 준수했는지 확인하기 위한 입력값, 실행조건, 기대결과 등으로 만들어진 테스트 항목의 명세서.

// 23. 스택에 대한 설명
// (X) FIFO 방식으로 처리된다. - 큐(queue)
// (X) 순서 리스트의 뒤(Rear)에서 노드가 삽입되며, 앞(Front)에서 노드가 제거된다. - 큐(queue)
// (X) 선형 리스트의 양쪽 끝에서 삽입과 삭제가 모두 가능한 자료 구조이다. - 데크(Double-Ended queue, deque)
// (4) 인터럽트 처리, 서브루틴 호출 작업 등에 응용된다. - 스택
// <내용 정리>
// - Deque(큐와 스택을 합친 형태)
// 양쪽 끝에서 삽입과 삭제가 모두 가능한 자료 구조의 한 형태이다.
// 두 개의 포인터를 사용하여, 양쪽에서 삭제와 삽입을 발생시킬 수 있다.

// 24. 소프트웨어 모듈화의 장점
// (1) 오류의 파급 효과를 최소화한다.
// (X) 기능의 분리가 가능하여 인터페이스가 복잡하다.
// (3) 모듈의 재사용 가능으로 개발과 유지보수가 용이하다.
// (4) 프로그램의 효율적인 관리가 가능하다.
// <해설>
// - 모듈화의 장점
// 1) 프로그램의 효율적인 관리
// 2) 이해하기 쉬운 소프트웨어
// 3) 소프트웨어 시험, 통합, 수정이 용이
// 4) 모듈 재사용 가능
// 5) 오류의 파급력 최소화

// 25. 소프트웨어 프로젝트 관리에 대한 설명
// (X) 개발에 따른 산출물 관리
// (X) 소요인력은 최대화하되 정책 결정은 신속하게 처리
// (X) 주어진 기간은 연장하되 최소의 비용으로 시스템을 개발
// (4) 주어진 기간 내에 최소의 비용으로 사용자를 만족시키는 시스템을 개발
// <해설>
// - 프로젝트 관리
// 프로젝트 관리는 주어진 기간 내에 최소의 비용으로 사용자를 만족시키는 시스템을 개발하기 위한 전반적인 활동
// 프로젝트 관리는 소프트웨어 개발 계획을 세우고 분석, 설계, 구현 등의 작업을 통제하는 것으로 소프트웨어 생명 주기의 전 과정에 걸쳐 진행됨
// 소프트웨어 프로젝트를 성공적으로 수행하기 위해서는 수행할 작업의 범위, 필요한 자원, 수행 업무, 이정표, 비용 추진 일정들을 알아야 함
// 소요인력은 최소화 하는 것이 좋음
// 프로젝트 관리는 제한된 시간과 비용으로 좋은 품질의 시스템을 개발하여 고객에게 제공함

// 26. 정형 기술 검토(FTR)의 지침
// (1) 의제를 제한한다.
// (2) 논쟁과 반박을 제한한다.
// (3) 문제 영역을 명확히 표현한다.
// (4) 참가자의 수를 제한하지 않는다.
// <해설>
// - 정형 기술 검토(Formal Technical Review, FTR)
// 1) 제품 검토의 집중성
// 오류 검출에 초점을 두고 해결책을 나중으로 미룸.
// 2) 사전 준비성
// 검토를 위한 자료를 사전에 배포하여 검토하도록 한다.
// 3) 의제의 제한성
// 의견을 제한하되 충분히 받아들인다.
// 4) 안건 고수성
// 안건을 세우면 고수한다.
// 5) 논쟁 반박의 제한성
// 논쟁과 반박을 제한한다.
// 6) 문제 공개성
// 문제 영역을 공개한다.
// 7) 참가 인원의 제한성
// 참가자의 수를 제한한다.
// 8) 문서성
// 발견된 오류는 문서화한다.

// 27. 소프트웨어 재공학의 주요 활동 중 기존 소프트웨어 시스템을 새로운 기술 또는 하드웨어 환경에서 사용할 수 있도록 변환하는 작업을 의미하는 것은?
// (X) Analysis
// (2) Migration
// (X) Restructuring
// (X) Reverse Engineering
// <해설>
// Analysis : 기존 소프트웨어를 분석하여 재공학 대상을 선정하는 것
// Migration(이주) : 기존 소프트웨어를 다른 운영체제나 하드웨어 환경에서 사용할 수 있도록 변환하는 작업
// Restructuring : 기존 소프트웨어를 향상시키기 위하여 코드를 재구성하는 작업(기능과 외적 동작은 변하지 않음)
// Reverse Engineering : 기존 소프트웨어를 분석하여 소스코드를 얻어내는 작업(소스코드로 소프트웨어를 만드는 작업의 역작업)

// 28. 정보시스템 개발 단계에서 프로그래밍 언어 선택 시 고려사항
// (1) 개발 정보시스템의 특성
// (2) 사용자의 요구사항
// (3) 컴파일러의 가용성
// (X) 컴파일러의 독창성
// <해설>
// - 프로그래밍 언어의 선정 기준
// 친밀감, 언어의 능력, 처리의 효율성, 프로그램 구조, 프로그램의 길이, 이식성, 과거의 개발 실적,
// 알고리즘과 계산상의 난이도, 자료 구조의 난이도, 성능 고려사항들, 대상 업무의 성격,
// 소프트웨어의 수행 환경, 개발 담당자의 경험과 지식, 사용자의 요구사항, 컴파일러의 이용 가능성 등

// 29. 소프트웨어 패키징에 대한 설명
// (X) 패키징은 개발자 중심으로 진행한다.
// (2) 신규 및 변경 개발소스를 식별하고, 이를 모듈화하여 상용제품으로 패키징한다.
// (3) 고객의 편의성을 위해 메뉴얼 및 버전 관리를 지속적으로 한다.
// (4) 범용 환경에서 사용이 가능하도록 일반적인 배포 형태로 패키징이 진행된다.
// <해설>
// - 소프트웨어 패키징
// 모듈별로 생성한 실행 파일들을 묶어 배포용 설치 파일을 만드는 것.
// 소프트웨어 패키징은 소비자 중심으로 진행한다.
// 소스 코드는 향후 관리를 고려하여 모듈화하여 패키징한다.
// 사용자가 소프트웨어를 사용하게 될 환경을 이해하여, 다양한 환경에서 소프트웨어를 손쉽게 사용할 수 있도록 일반적인 배포 형태로 패키징한다.
// 사용자를 중심으로 진행되는 작업이므로 사용자의 편의성 및 실행 환경을 우선적으로 고려해야 한다.

// 30. 자료 구조의 분류 중 선형 구조
// (X) 트리 - 비선형 구조
// (2) 리스트 - 선형 구조
// (3) 스택 - 선형 구조
// (4) 데크 - 선형 구조
// <해설>
// - 비선형 구조 : 트리, 그래프
// - 선형 구조 : 스택, 큐, 데크, 리스트
// - 파일 구조 : 순차파일, 색인파일, 직접파일

// 31. 아주 오래되거나 참고문서 또는 개발자가 없어 유지보수 작업이 아주 어려운 프로그램을 의미하는 것은?
// (X) Title Code
// (X) Source Code
// (X) Object Code
// (4) Alien Code
// <해설>
// - Alien Code
// 개발자가 퇴사를 했거나 현재 사용하지 않는 환경 및 언어로 작성되었거나 프로그램의 관련 문서나 주석이 없는 상태에서
// 시간이 흐른 뒤 유지보수가 불가능하거나 힘든 프로그램 소스 코드

// 32. 소프트웨어를 재사용함으로써 얻을 수 있는 이점
// (1) 생산성 증가
// (2) 프로젝트 문서 공유
// (3) 소프트웨어 품질 향상
// (X) 새로운 개발 방법론 도입 용이
// <해설>
// - 소프트웨어 재사용시 이점
// 1) 개발 시간과 비용 단축
// 2) 소프트웨어 품질 및 생산성 향상
// 3) 프로젝트 실패 위험 감소
// 4) 시스템 구축 방법에 대한 지식 공유
// - 소프트웨어 재사용시 문제점
// 1) 재사용할 소프트 웨어 선정 필요
// 2) 시스템에 공통적으로 사용되는 요소 발견 필요
// 3) 프로그램의 표준화 부족
// 4) 새로운 개발 방법론 도입이 어려움
// 5) 재사용을 위한 관리 및 지원 부족
// 6) 기존 소프트웨어에 재사용 소프트웨어를 추가하기 어려움

// 33. 인터페이스 간의 통신을 위해 이용되는 데이터 포맷
// (X) AJTML
// (2) JSON
// (3) XML
// (4) YAML
// <해설>
// - JSON(JavaScript Object Notation)
// 속성-값 쌍 또는 “키-값 쌍”으로 이루어진 데이터 오브젝트를 전달하기 위해 인간이 읽을 수 있는 텍스트를 사용하는 개방형 표준 포맷.
// AJAX에서 많이 사용되고 XML을 대체하는 주요 데이터 포맷.
// - XML(Extensible Markup Language)
// HTML의 단점을 보완한 인터넷 언어.
// 복잡한 SGML의 단점을 개선한 특수한 목적을 갖는 마크업 언어.
// - AJAX(Asynchronous Javascript And XML)
// 자바스크립트를 사용하여 웹 서버와 클라이언트 간 비동기적으로 XML 데이터를 교환하고 조작하기 위한 웹 기술.
// XMLHttpRequest 객체를 이용해 전체 페이지를 새로 로드하지 않고 필요한 부분만 로드한다.
// - REST(REpresentational State Transfer)
// 웹과 같은 분산 하이퍼미디어 환경에서 자원의 존재/상태 정보를 표준화된 HTTP 메서드로 주고받는 웹 아키텍처 (리소스, 메서드, 메시지)
// HTTP URI를 통해 자원을 명시하고, HTTP 메서드(POST, GET, PUT, DELETE)를 통해 해당 자원에 대한 생성, 조회, 갱신, 삭제 등의 명령을 적용할 수 있는
// 분산 하이퍼미디어 시스템을 위한 소프트웨어 아키텍처이다.
// - YAML(Yet Another Markup Language)
// 기존에 주로 사용되던 포맷인 JSON의 불편함을 해소하기 위해 만들어진 superset이다.
// JSON의 완전한 상위 호환이기 때문에 기존 json문서를 그대로 yaml파일로 사용하거나, 원하는 부분만 손볼 수 있다.
// 반대로 yaml을 json으로 변환할 수도 있다.

// 34. 프로그램 설계도의 하나인 NS Chart에 대한 설명
// (1) 논리의 기술에 중점을 두고 도형을 이용한 표현 방법이다.
// (2) 이해하기 쉽고 코드 변환이 용이하다.
// (X) 화살표나 GOTO를 사용하여 이해하기 쉽다.
// (4) 연속, 선택, 반복 등의 제어 논리 구조를 표현한다.
// <해설>
// - NS Chart(Nassi-Schneiderman Chart)
// 논리의 기술에 중점을 두고 도형을 이용한 표현 방법이다.
// 3가지 기본 구조만으로 논리를 표현(표준화 가능).
// Flow Chart의 최대 단점인 화살표가 표시되지 않음.
// 기본구조의 입구와 출구는 각 하나씩이다.
// 이해하기 쉽고 코드 변환이 용이하다.
// 연속, 선택, 반복 등의 제어 논리 구조를 표현한다.

// 35. 순서가 A, B, C, D로 정해진 입력자료를 push, push, pop, push, push, pop, pop, pop 순서로 스택연산을 수행하는 경우 출력 결과는?
// 스택 구조 : [A] -> [A, B] -> [A] -> [A, C] -> [A, C, D] -> [A, C] -> [A] -> [] (스택 구조 : LIFO, Last In First Out)
// 출력 결과 :                   B                               D       C      A

// 36. 분할 정복(Divide and Conquer)에 기반한 알고리즘으로 피벗(Pivot)을 사용하며 최악의 경우 n(n-1)/2회의 비교를 수행해야 하는 정렬은?
// (X) Selection Sort
// (X) Bubble Sort
// (X) Insert Sort
// (4) Quick Sort
// <해설>
// - 선택 정렬(Selection Sort)
// 배열 내에서 최소값을 찾은 다음 정렬 되지 않은 맨 앞 값과 교환을 하며 정렬을 해 나아가는 방법
// 정렬 시간 복잡도는 항상 O(n^2)
// - 버블 정렬(Bubble Sort)
// 왼쪽에서 부터 두 데이터를 비교해서 앞에 있는 데이터가 뒤에 있는 데이터 보다 크면 자리를 바꾸는 정렬 알고리즘
// 정렬 시간 복잡도 항상 O(n^2)
// - 삽입 정렬(Insert Sort)
// 한 개의 값을 추출한 다음 앞쪽으로 비교해서 본인의 자리를 알맞게 찾아가게끔 하는 정렬 방법.
// 정렬 시간 복잡도는 최상일 경우 O(n), 평균과 최악일 경우 O(n^2)
// - 병합(합병) 정렬
// 또한 분할 정복에 기반한 알고리즘으로 리스트를 1 이하인 상태까지 절반으로 자른 다음
// 재귀적으로 합병 정렬을 이용해서 전체적인 리스트를 합병하는 정렬 과정.
// 시간 복잡도는 O(n log n)

// 37. 화이트박스 검사 기법에 해당하는 것
// (1) 데이터 흐름 검사 - 화이트박스 검사
// (2) 루프 검사 - 화이트박스 검사
// (X) 동등 분할 검사 - 블랙박스 검사
// (X) 경계값 분석 - 블랙박스 검사
// (X) 원인 결과 그래프 기법 - 블랙박스 검사
// (X) 오류예측 기법 - 블랙박스 검사
// <해설>
// - 화이트박스 테스트
// 종류 : 기초 경로 검사(Basic Path Testing), 조건 검사(Condition Testing), 루프 검사(Loop Testing), 데이터 흐름 검사(Data Flow Testing)
// 검증 기준 : 문장 검증 기준, 분기 검증 기준, 조건 검증 기준, 분기/조건 기준
// - 블랙박스 테스트
// 종류 : 동치(동등) 분할 검사, 경계값 분석, 원인-효과 검사, 오류 예측 검사, 비교 검사

// 38. 소프트웨어 품질 관련 국제 표준인 ISO/IEC 25000에 관한 설명
// (1) 소프트웨어 품질 평가를 위한 소프트웨어 품질평가 통합모델 표준이다.
// (2) System and Software Quality Requirements and Evaluation으로 줄여서 SQuaRE라고도 한다.
// (3) ISO/IEC 2501n에서는 소프트웨어의 내부 측정, 외부 측정, 사용품질 측정, 품질 측정 요소 등을 다룬다.
// (4) 기존 소프트웨어 품질 평가 모델과 소프트웨어 평가 절차 모델인 ISO/IEC 9126과 ISO/IEC 14598을 통합하였다.
// <해설>
// - ISO### ISO/IEC 25000
// ISO 9126, ISO 14598. ISO 12119의 여러 표준 문서를 통합하고 재구성하여 만든 표준 문서(SW 품질 평가 통합 모델).
// SQuaRE(Software Quality and Requirement Evaluation)라고도 함.
// ISO/IEC 9126, ISO/IEC 12119, ISO/IEC 14598의 3개 표준을 통합한 모델.
// 2500n, 2501n, 2502n, 2503n, 2504n의 다섯가지 분야로 나눌수 있고, 확장 분야인 2505n이 있다.
// 1) 2500n(개요 및 품질관리)
// SQuaRE에 대한 개요, 전체에 대한 계획과 관리
// 2) 2501n(품질모델)
// 품질 모델 및 품질 사용 안내
// 3) 2502n(품질측정)
// 매트릭을 통한 측정 방법 제시
// 4) 2503n(품질요구)
// 품질 요구사항
// 5) 2504n(품질평가)
// 품질 프로세스에 관한 개요, 관점들의 평가 프로세스
// 6) 2505n(확장분야)

// 39. 코드 인스펙션에 관련한 설명
// (1) 프로그램을 수행시켜보는 것 대신에 읽어보고 눈으로 확인하는 방법으로 볼 수 있다.
// (2) 코드 품질 향상 기법 중 하나이다.
// (3) 동적 테스트 시에만 활용하는 기법이다.
// (4) 결함과 함께 코딩 표준 준수 여부, 효율성 등의 다른 품질 이슈를 검사하기도 한다.
// <해설>
// - 코드 인스펙션(Code Inspection)
// 결함 뿐만 아니라 모든 것이 표준대로 되어 있는 지 확인하기 위한 검토.
// 표준이나 명세서에 서술항 내용과 비교하여 편차와 에러를 식별하기 위해 산출물을 근거로 수행하는 검사.
// 정적 테스트에 가깝다.

// 40. 프로젝트에 내재된 위험 요소를 인식하고 그 영향을 분석하여 이를 관리하는 활동으로서,
// 프로젝트를 성공시키기 위하여 위험요소를 사전에 예측, 대비하는 모든 기술과 활동을 포함하는 것은?
// (X) Critical Path Method
// (2) Risk Analysis
// (X) Work Breakdown Structure
// (X) Waterfall Model
// <해설>
// - 임계 경로법(Critical Path Method, CPM)
// 프로젝트를 일정 기일 내에 완성시키고 해당 계획이 원가의 최소값에 의해 보증되는 등의 최적 스케줄을 구하는 관리 방법.
// 네트워크를 중심의 논리적 구성하고 시간과 비용 문제를 취급한다.
// 주로 건설과 설계를 포함하는 복잡한 일에 이용되어 효과를 발휘 함.
// - 위험 분석(Risk Analysis)
// 프로젝트에 내재된 위험 요소를 인식하고 그 영향을 분석하여 이를 관리하는 활동. 프로젝트를 성공시키기
// 위하여 위험 요소를 사전에 예측, 대비하는 모든 기술과 활동을 포함한다.
// - 업무 분업 구조(Work Breakdown Structure)
// 성과 목표 완전 달성을 위한 프로그램.
// 산업 관리 간접 부문의 기술 혁신형 업무-목표를 설정하여 소정 기간, 자원 내에서 달성하는 형태의 업무-를 효과적으로 수행하기 위한 수법.
// - 폭포수 모델(Waterfall Model)
// S/W 개발 생명주기에 기반하고 있는 소프트웨어 개발 기법 중 하나.
// 한 번 떨어지면 다시 거슬러 올라갈 수 없는 폭포수처럼, 각 개발 단계를 확실히 매듭 짓고 다음 단계로 넘어간다는 의미.

//-------------------------------------------------------------------------------------------------------------------------------------------------

// 데이터베이스 구축

// 41. 데이터베이스 설계 단계 중 물리적 설계 시 고려사항
// (X1) 스키마의 평가 및 정제
// (2) 응답 시간
// (3) 저장 공간의 효율화
// (4) 트랜잭션 처리량
// <해설>
// - 데이터베이스 물리적 설계시 고려사항
// 어떤 인덱스를 만들 것인지에 대한 고려
// 성능 향상을 위한 개념 스키마의 변경 여부 검토
// 레코드의 크기
// 파일과 구조 저장을 위한 최소한의 공간
// 빈번한 질의와 트랜잭션들의 수행 속도를 높이기 위한 고려사항

// 42. DELETE 명령에 대한 설명
// (1) 테이블의 행을 삭제할 때 사용한다.
// (X) WHERE 조건절이 없는 DELETE 명령을 수행하면 DROP TABLE 명령을 수행했을 때와 동일한 효과를 얻을 수 있다.
// (3) SQL을 사용 용도에 따라 분류할 경우 DML에 해당한다.
// (4) 기본 사용 형식은 "DELETE FROM 테이블 [WHERE 조건];"이다.
// <해설>
// - DELETE문은 테이블 내의 튜플들만 삭제하고, DROP은 테이블 자체를 삭제한다.

// 43. 어떤 릴레이션 R의 모든 조인 종속성의 만족이 R의 후보키를 통해서만 만족될 때, 이 릴레이션 R이 해당하는 정규형은?
// (1) 제 5정규형
// (X) 제 4정규형
// (X) 제 3정규형
// (X) 제 1정규형
// <해설>
// 1) 제1정규형 : 릴레이션에 속한 모든 속성의 도메인이 원자값으로만 구성되어 있으면 제 1 정규형에 속한다.
// 2) 제2정규형 : 제1 정규형에 속하고, 기본키가 아닌 모든 속성이 기본키에 완전 함수 종속되면 제2 정규형에 속한다.(부분 함수 종속 제거)
// 3) 제3정규형 : 제2 정규형에 속하고, 기본키가 아닌 모든 속성이 기본키에 이행적 함수 종속이 되지 않으면 제3 정규형에속한다.
// 4) BCNF(보이스/코드) 정규형 : 릴레이션의 함수 종속 관계에서 모든 결정자가 후보키이면 보이스/코드 정규형에 속한다.
// 5) 제4정규형 : BCNF 정규형을 만족하면서 함수 종속이 아닌 다치 종속을 제거해야 만족할 수 있다.
// 6) 제5정규형 : 제4 정규형을 만족하면서 후보키를 통하지 않는 조인 종속을 제거해야 만족할 수 있다.

// 44. E-R 모델 표기법
// - 마름모 : 관계
// - 사각형 : 개체
// - 선 : 관계와 속성을 연결
// - 동심원 : 다중값 속성

// 45. 다른 릴레이션의 기본키를 참조하는 키를 의미하는 것은?
// (X) 필드키
// (X) 슈퍼키
// (3) 외래키
// (X) 후보키
// <해설>
// - 키 : 레코드 또는 튜플을 확인하기 위해 이용되는 속성값.
// 1) 기본키(Primary Key)
// 유일성과 최소성을 만족하는 속성을 가지는 후보키 중에 지정된 하나의 키.
// 중복되는 값, Null 값을 가질 수 없다.
// 값의 변화가 거의 없고, 값이 단순한 후보키가 기본키로 적합하다.
// 2) 슈퍼키(Super Key)
// 데이터베이스에서 테이블의 행을 고유하게 식별할 수 있는 속성 or 속성의 집합(유일성은 만족, 최소성은 만족하지 않음).
// 3) 외래키(Foreign Key)
// 관계형 데이터베이스에서 한 테이블 속성 집합이 다른 테이블의 기본키가 된 경우 외래키라고 한다.
// 데이터베이스 내에 존재하는 테이블들의 관계에서 참조의 무결성을 보장하기 위해 사용한다.
// 중복되는 값, 비어있는 값(Null)을 가질 수 있다.
// 4) 후보키(Candidate Key)
// 유일성과 최소성을 만족하는 속성 or 속성들의 집합.
// 슈퍼키 중 최소성을 만족하는 것이 후보키가 된다.
// 후보키는 기본키로 사용할 수 있으며, 후보키가 여러 개일 경우에는 하나를 지정해서 기본키로 사용한다.
// 기본키로 지정되지 않은 후보키를 대체키(Alternate Key)라고 한다.

// 46. 관계 해석에서 '모든 것에 대하여'의 의미를 나타내는 논리 기호는?
// (X) ∃
// (X) ∈
// (3) ∀
// (X) ⊂
// <해설>
// - ∃ : 존재한다(There exist).
// - ∈ : 왼쪽 원소가 오른쪽 집합에 속한다.
// - ∀ : 모든 것에 대하여(for all). All의 A를 뒤집어놓은 모양.
// - ⊂ : 왼쪽 집합이 오른쪽 집합에 속한다.

// 47. 릴레이션 Degree와 Cardinality
// - Degree(차수) : 릴레이션의 열의 수(속성의 수)
// - Cardinality : 릴레이션의 행의 수(튜플의 수)

// 48. 뷰(View)에 대한 설명
// (1) 뷰 위에 또 다른 뷰를 정의할 수 있다.
// (2) DBA는 보안성 측면에서 뷰를 활용할 수 있다.
// (3) 사용자가 필요한 정보를 요구에 맞게 가공하여 뷰로 만들 수 있다.
// (X) SQL을 사용하면 뷰에 대한 삽입, 갱신, 삭제 연산 시 제약 사항이 없다.
// <해설>
// - 뷰는 삽입, 갱신, 삭제 연산 시 제약 사항이 있다.

// 49. 관계 대수식을 SQL 질의로 옳게 표현한 것은?
// - 관계 대수식 : II이름(σ학과='교육'(학생))
// (X) SELECT 학생 FROM 이름 WHERE 학과='교육'
// (2) SELECT 이름 FROM 학생 WHERE 학과='교육'
// (X) SELECT 교육 FROM 학과 WHERE 이름='학생'
// (X) SELECT 학과 FROM 학생 WHERE 이름='교육'

// 50. 정규화 과정에서 함수 종속이 A -> B 이고 B -> C 일 때 A -> C 인 관계를 제거하는 단계는?
// (X) 1NF -> 2NF
// (2) 2NF -> 3NF
// (X) 3NF -> BCNF
// (X) BCNF -> 4NF
// <해설>
// - 이행적 종속 관계 : 함수 종속이 A -> B 이고 B -> C 일 때 A -> C 인 관계.
// - 이행적 함수 종속을 제거한다는 뜻은, 2NF(2정규형)에서 3NF(3정규형)가 되는 과정으로 볼 수 있다.

// 51. CREATE TABLE 문에 포함되는 기능
// (X) 속성 타입 변경
// (2) 속성의 NOT NULL 여부 지정
// (3) 기본키를 구성하는 속성 지정
// (4) CHECK 제약조건 정의
// <해설>
// - CREATE TABLE 문에 포함되는 기능
// 1) PRIMARY KEY : 테이블의 기본 키를 정의, 유일하게 테이블의 각 행을 식별
// 2) FOREIGN KEY : 참조 대상을 테이블로 명시, 외래 키를 정의, 열과 참조된 테이블의 열 사이의 외래 키 관계를 적용하고 설정
// 3) UNIQUE : 테이블 내에서 얻은 유일한 값을 갖도록 하는 속성
// 4) NOT NULL : 해당 컬럼은 NULL값을 포함하지 않도록 하는 속성
// 5) CHECK : 개발자가 정의하는 제약조건, 참(TRUE)이어야 하는 조건을 지정
// 6) DEFAULT : 해당 필드의 기본값을 설정

// 52. SQL과 관련한 설명
// (X) REVOKE 키워드를 사용하여 열 이름을 다시 부여할 수 있다.
// (2) 데이터 정의어는 기본 테이블, 뷰 테이블, 또는 인덱스 등을 생성, 변경, 제거하는 데 사용되는 명령어이다.
// (3) DISTINCT를 활용하여 중복 값을 제거할 수 있다.
// (4) JOIN을 통해 여러 테이블의 레코드를 조합하여 표현할 수 있다.
// <해설>
// - REVOKE는 DCL에 해당하는 권한을 해제하는 명령어이다.
// - DML(Data Manipulation Language, 데이터 조작어)
// DML은 데이터베이스 사용자가 응용 프로그램이나 질의어를 통하여 저장된 데이터를 실질적으로 처리하는데 사용되는 언어이다.
// 데이터베이스 사용자와 데이터베이스 관리시스템 간의 인터페이스를 제공한다.
// 1) SELECT: 테이블에서 조건에 맞는 튜플을 검색한다.
// 2) INSERT: 테이블에 새로운 튜플을 삽입한다.
// 3) DELETE: 테이블에서 조건에 맞는 튜플을 삭제한다.
// 4) UPDATE: 테이블에서 조건에 맞는 튜플의 내용을 변경한다.
// - DCL(Data Control Language, 데이터 제어어)
// DCL은 데이터의 보안, 무결성, 회복, 병행 수행 제어 등을 정의하는 데 사용되는 언어이다.
// 데이터 베이스 관리자가 데이터 관리를 목적으로 사용한다.
// 1) COMMIT: 명령에 의해 수행된 결과를 실제 물리적 디스크로 저장하고, 데이터베이스 조작 작업이 정상적으로 완료되었음을 관리자에게 알려준다.
// 2) ROLLBACK: 데이터베이스 조작 작업이 비정상적으로 종료되었을 때 원래의 상태로 복구한다.
// 3) GRANT: 데이터베이스 사용자에게 사용권한을 부여한다.
// 4) REVOKE: 데이터베이스 사용자의 권한을 취소한다.

// 53. SQL 실행 결과 예측 문제
// SQL 문에 조건(WHERE)이 없을 경우에는 중복되는 값이 있더라도 모두 표시한다.
// 문제 : SELECT 급여 FROM 사원;

// 54. 다음 SQL 문에서 사용된 BETWEEN 연산의 의미와 동일한 것은?
// 문제 : SELECT * FROM 성적 WHERE (점수 BETWEEN 90 AND 95) AND 학과 = '컴퓨터공학과';
// (X) 점수 >= 90 AND 점수 <= 95
// (X) 점수 > 90 AND 점수 < 95
// (X) 점수 > 90 AND 점수 <= 95
// (X) 점수 >= 90 AND 점수 < 95
// <해설>
// - 문제의 SQL문은 성적 테이블에서 점수가 90점 이상, 95점 이하인 컴퓨터공학과 튜플의 모든 속성을 보여주라는 뜻이다.

// 55. 트랜잭션의 상태 중 트랜잭션의 수행이 실패하여 Rollback 연산을 실행한 상태는?
// (1) 철회(Aborted)
// (X) 부분 완료(Partially Committed)
// (X) 완료(Committed)
// (X) 실패(Fail)
// <해설>
// - ROLLBACK : 데이터베이스 조작 작업이 비정상적으로 종료되었을 때 원래의 상태로 복구(철회, Aborted)

// 56. 데이터 제어어(DCL)에 대한 설명
// (X) ROLLBACK : 데이터의 보안과 무결성을 정의한다. -> COMMIT의 설명
// (X) COMMIT : 데이터베이스 사용자의 사용 권한을 취소한다. -> REVOKE의 설명
// (3) GRANT : 데이터베이스 사용자의 사용 권한을 부여한다. -> GRANT의 설명
// (X) REVOKE : 데이터베이스 조작 작업이 비정상적으로 종료되었을 때 원래 상태로 복구한다. -> ROLLBACK의 설명

// 57. 테이블 R과 S에 대한 SQL문이 실행되었을 때 실행결과
/*
   R      S     
[A, B]  [A, B]
[1, A]  [1, A]
[3, B]  [2, B]

SQL문 : 
SELECT A FROM R 
UNION ALL 
SELECT A FROM S;
*/
// (x) 1
// (x) 3, 2
// (x) 1, 3
// (4) 1, 3, 1, 2
// <해설>
// - UNION ALL : 각 쿼리의 모든 결과를 포함한 합집합(중복제거 안함).

// 58. 분산 데이터베이스 시스템(Distributed Database System)에 대한 설명
// (1) 분산 데이터베이스는 논리적으로 하나의 시스템에 속하지만 물리적으로는 여러 개의 컴퓨터 사이트에 분산되어 있다.
// (2) 위치 투명성, 중복 투명성, 병행 투명성, 장애 투명성을 목표로 한다.
// (3) 데이터베이스의 설계가 비교적 어렵고, 개발 비용과 처리 비용이 증가한다는 단점이 있다.
// (X) 분산 데이터베이스 시스템의 주요 구성 요소는 분산 처리기, P2P 시스템, 단일 데이터베이스 등이 있다.
// <해설>
// - 분산 데이터베이스의 구성 요소
// 1) 분산 처리기
// 2) 분산 데이터베이스
// 3) 통신 네트워크
// 4) 분산 트랜잭션
// - 분산 데이터베이스의 구조 - 전역, 분할(단편화), 할당, 지역 스키마

// 59. 테이블 두 개를 조인하여 뷰 V_1을 정의하고, V_1을 이용하여 뷰 V_2를 정의하였다.
//     다음 명령 수행 후 결과로 옳은 것은?
// - DROP VIEW V_1 CASCADE;
// (X) V_1만 삭제된다.
// (X) V_2만 삭제된다.
// (3) V_1과 V_2 모두 삭제된다.
// (X) V_1과 V_2 모두 삭제되지 않는다.
// <해설>
// - CASCADE : 영어 뜻은 종속
// 일반적으로 데이터베이스 내의 임의의 다른 테이블과 PRIMARY KEY 또는 FOREIGN KEY로서의 관계가 여전히 존재하는 경우,
// PRIMARY KEY가 존재하는 테이블을 마음대로 제거 및 비활성화 할 수 없다.
// 즉, CASCADE는 부모 테이블과 자식테이블 간에 참조 설정이 되어 있을 때,
// 부모 테이블의 제약 조건을 비활성화 시키면서 이를 참조하고 있는 자식 테이블의 제약 조건까지 함께 비활성화시키기 위해 사용한다.
// 또한 부모 테이블만 삭제하고 싶을 경우, 원래는 자식테이블을 먼저 삭제하고 부모를 삭제 한 뒤 자식테이블을 다시 만들어야하는 번거로움이 따른다.
// 하지만 CASCADE를 쓰면 일시적으로 참조관계를 끊을 수 있다.

// 60. 데이터베이스에서 병행제어의 목적
// (1) 시스템 활용도 최대화
// (2) 사용자에 대한 응답시간 최소화
// (X) 데이터베이스 공유 최소화
// (4) 데이터베이스 일관성 유지
// <해설>
// - 병행제어의 목적
// 1) 여러 사용자들의 데이터베이스 공동 사용을 최대화
// 2) 사용자의 응답 시간 최소화
// 3) 데이터베이스 시스템의 활용도 최대화
// 4) 데이터베이스의 일관성 유지

//-------------------------------------------------------------------------------------------------------------------------------------------------

// 프로그래밍 언어 활용

// 61.

//-------------------------------------------------------------------------------------------------------------------------------------------------

// 정보시스템 구축관리

// 81.

//-------------------------------------------------------------------------------------------------------------------------------------------------
