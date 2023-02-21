// UML 다이어그램 (Unified Modeling Language Diagram)

// UML 다이어그램 설명
// 통합 모델링 언어를 사용하여 시스템 상호작용, 업무 흐름, 시스템 구조, 컴포넌스 관계 등을 그린 도면이다.
// 프로그래밍을 단순화시켜 표현하며 의사소통하기 좋고 또 대규모 프로젝트 구조의 로드맵을 만들거나 개발을 위한 시스템 구축에 기본을 마련한다.

// UML 다이어그램 종류
// (1) Use Case 다이어그램
// 요구 분석 과정에서 시스템과 외부와의 상호작용을 묘사.
// (2) Activity 다이어그램
// 업무의 흐름을 모델링하거나 객체의 생명주기를 표현.
// (3) Collaboration 다이어그램
// 객체와 객체가 주고받는 메시지 중심으로 작성됨.
// (4) Sequence 다이어그램
// 객체 간의 메시지 전달을 시간적 흐름에서 분석.
// (5) Class 다이어그램
// 시스템의 구조적인 모습을 그림.
// (6) Component 다이어그램
// 소프트웨어 구조를 그림.
// (7) Deployment 다이어그램
// 기업 환경의 구성과 컴포넌트들 간의 관계를 그림.

// UML 다이어그램 구분
// (1) 클래스 다이어그램
// - 설명
// 시스템에서 사요오디는 객체 타입을 정의한다.
// 그 다음 객체 간의 정적인 관계를 다양한 방식으로 표현한다.
// 객체 지향 시스템 모델링에서 가장 공통적으로 많이 쓰인다.
// -관계
// 1) 의존(dependency) : 하나의 모델 요소가 다른 모델 요소를 사용하는 관계 (표기 : --->)
// 2) 일반화(generalization) : 여러 클래스가 가진 공통적인 특징을 추출하여 공통적인 클래스로 일반화하는 관계 (표기 : ㅡ▷)
// 3) 연관(association) : 클래스로부터 생성된 인스턴스들 간의 관계 (표기 : ㅡ)
// 4) 집합 연관(aggregation) : 객체와 부분을 나타내는 모델 요소(단, 전체와 부분은 서로 독립적임) (표기 : ㅡ◇)
// 5) 복합 연관(composition) : 전체와 부분을 나타내는 모델 요소(연관 관계를 맺고 있는 클래스들의 생명주기가 같음) (표기 : ㅡ◆)

// (2) 인터랙션 다이어그램
// - 설명
// 시스템이 수행하는 과정을 시각화하기 위한 다이어그램이다.
// Use case 다이어그램의 actor와 개념 클래스 다이어그램의 객체 사이의 상호작용을 표현한다.
// UMl에는 두 가지 형태의 인터랙션 다이어그램이 있는데, 시퀀스 다이어그램과 커뮤니케이션 다이어그램이다.

// (3) 패키지 다이어그램
// - 설명
// 패키지는 클래스와 같은 여러 모델 요소들을 그룹화하여 표현하기 위한 수단이다.
// 패키지 다이어그램은 시스템의 서로 다른 패키지들 사이의 의존 관계를 표현하기 위한 다이어그램이다.
// - 주요 구성 요소
// 1) 패키지 : 여러 패키지들로 구성된 묶음
// 2) 의존관계 : 하나의 패키지가 다른 패키지를 사용하는 관계

// (4) 스테이트 다이어그램
// - 설명
// 스테이트 다이어그램은 객체가 가질 수 있는 모든 가능한 상태를 표현하며 특정 객체에 대하여 사전 발생에 따른 상태 전이 과정을 묘사한 다이어그램이다.
// 진입 및 탈출 조건, 상태 전이에 필요한 사건 등 자세한 사항에 대한 표현이 가능하며 설계 단계에서 객체의 동적인 행동을 표현하는 데 주로 사용된다.
// - 주요 구성 요소
// 1) 상태 : 객체가 존재할 수 있는 조건
// 2) 시작 상태 : 객체의 시작 상태 (표기 : ●)
// 3) 종료 상태 : 객체의 종료 상태 (표기 : ⊙)
// 4) 전이 : 객체의 상태가 다른 상태로 변함 (표기 : ㅡ>)

// (5) 액티비티 다이어그램
// - 설명
// 객체의 로직이나 조건에 따른 처리 흐름을 순서대로 정의한 다이어그램이다.
// Use case의 실체화, 알고리즘의 표현, 비지니스 프로세스의 정의 등에 사용한다.
// - 주요 구성 요소
// 1) 활동 : 행위나 직업 등 무언가를 하고 있는 상태
// 2) 시작 상태 (표기 : ●)
// 3) 종료 상태 (표기 : ⊙)
// 4) 선택점 (표기 : ◇)
// 5) 전이
// 6) 구분선 : 모듈의 수정 없이 소프트웨어 확장을 위한 인터페이스의 실체화
