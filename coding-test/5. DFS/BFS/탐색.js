// 탐색(Search) : 많은 양의 데이터 중 원하는 데이터를 찾는 과정
// 그래프, 트리 등의 자료구조 안에서 탐색을 하는 문제가 자주 출제됨

// 자료구조(Data Structure) : 데이터를 표현하고 관리하고 처리하기 위한 구조
// 삽입(Push) : 데이터를 삽입한다.
// 삭제(Pop) : 데이터를 삭제한다.
// 오버플로(Overflow) : 특정한 자료구조가 수용할 수 있는 데이터의 크기를 이미 채운 상태에서 삽입 연산을 수행할 때 발생한다.
// 언더플로(Underflow) : 특정한 자료구조에 데이터가 전혀 들어있지 않은 상태에서 삭제 연산을 수행할 때 발생한다.

// 스택(Stack) : 박스 쌓기와 같이 먼저 삽입한 자료는 나중에 삭제되고 나중에 삽입한 자료가 먼저 삭제되는 구조.
// 선입후출(First In Last Out) 구조 또는 후입선출(Last In First Out) 구조라고도 한다.

// 큐(Queue) : 대기줄과 같이 먼저 삽입한 자료가 먼저 들어가는 구조(선입선출(First In First Out) 구조)
// 파이썬으로 큐를 구현할 때는 collections 모듈에서 제공하는 deque 자료구조를 활용하면 된다.
// deque는 스택과 큐의 장점을 모두 채택한 것으로, 데이터를 넣고 빼는 속도가 리스트 자료형에 비해 효율적이며 queue 라이브러리를 이용하는 것보다 더 간단하다.
// deque 객체를 리스트 자료형으로 변환하려면 list() 메서드를 이용하면 된다. ex) list(queue)

// 재귀함수(Recursive Function) : 자기 자신을 다시 호출하는 함수
// 파이썬 인터프리터에는 호출 횟수 제한이 있어서 이를 초과하면 에러 메시지를 출력한다.
// 재귀함수를 사용할 때는 재귀함수가 언제 끝날지 종료조건을 꼭 명시해야 한다.
// 컴퓨터 내부에서 재귀함수의 수행은 스택 자료구조를 이용한다(재귀함수는 내부적으로 스택 자료구조와 동일하다).
// ex) 함수를 계속 호출했을 때, 가장 마지막에 호출한 함수가 먼저 수행을 끝내야 그 앞의 함수 호출이 종료되기 때문이다.
// 반복문과 비교했을 때 재귀함수의 장점 : 코드가 간결하다(수식을 그대로 코드로 옮겼기 때문).

// 그래프(Graph) : 노드(Node)와 간선(Edge)으로 표현되며 노드를 정점이라고도 한다.
// 그래프 탐색이란 하나의 노드를 시작으로 다수의 노드를 방문하는 것을 말한다.
// 두 노드가 간선으로 연결되어 있다면 '두 노드는 인접하다(Adjacent)'라고 표현한다.

// 그래프를 표현하는 두 가지 방식
// 1) 인접 행렬(Adjacency Matrix) : 2차원 배열로 그래프의 연결 관계를 표현하는 방식
//    2차원 배열에 각 노드가 연결된 형태를 기록하는 방식
//    연결되어 있지 않은 노드끼리는 무한의 비용(또는 거리)이라고 작성한다.
//    실제 코드에서는 무한의 비용을 정답이 될 수 없는 큰 수(ex. 999999999.9998903) 등의 값으로 초기화하는 경우가 많다.
// 2) 인접 리스트(Adjacency List) : 리스트로 그래프의 연결 관계를 표현하는 방식
//    모든 노드에 연결된 다른 노드에 대한 정보를 차례대로 연결하여 저장한다.
//    인접 리스트는 '연결 리스트'라는 자료구조를 이용해 구현하는데, 파이썬에서는 단순히 2차원 리스트를 이용하면 된다.

// 그래프 표현 방식의 차이점
// 1) 메모리 측면
// 인접 행렬 방식은 모든 관계를 저장하므로 노드 개수가 많을수록 메모리가 불필요하게 낭비된다.
// 인접 리스트 방식은 연결된 정보만을 저장하기 때문에 메모리를 효율적으로 사용한다.
// 2) 속도 측면
// 인접 리스트 방식은 인접 행렬 방식에 비해 특정한 두 노드가 연결되어 있는지에 대한 정보를 얻는 속도가 느리다.
// 인접 리스트 방식에서는 연결된 데이터를 하나씩 확인해야 하기 때문에.

// DFS(Depth-First Search) : 깊이 우선 탐색, 그래프에서 깊은 부분을 우선적으로 탐색하는 알고리즘.
// DFS 동작 과정
// 1) 탐색 시작 노드를 스택에 삽입하고 방문 처리를 한다.
// 2) 스택의 최상단 노드에 방문하지 않은 인접 노드가 있으면 그 인접 노드를 스택에 넣고 방문 처리를 한다.
//    방문하지 않은 인접 노드가 없으면 스택에서 최상단 노드를 꺼낸다.
// 3) 2)번의 과정을 더 이상 수행할 수 없을 때까지 반복한다.
// * '방문 처리'는 스택에 한 번 삽입되어 처리된 노드가 다시 삽입되지 않게 체크하는 것을 의미한다.
// DFS는 스택 자료구조에 기초한다는 점에서 구현이 간단하다.
// 실제로는 스택을 쓰지 않아도 되며 탐색을 수행함에 있어 데이터의 개수가 N개인 경우 O(N)의 시간이 소요된다.
// 스택을 이용하는 알고리즘이므로 실제 구현은 재귀함수로 하면 매우 간결하다.

// BFS(Breadth-First Search) : 너비 우선 탐색, 가까운 노드부터 탐색하는 알고리즘.
// DFS는 최대한 멀리 있는 노드를 우선으로 탐색하는 방식이었다면, BFS는 DFS와 정반대이다.
// BFS 구현에는 선입선출 방식인 큐 자료구조를 이용하는 것이 정석이다.
// 인접한 노드를 반복적으로 큐에 넣도록 알고리즘을 작성하면 자연스럽게 먼저 들어온 것이 먼저 나가게 되어 가까운 노드부터 탐색을 진행하게 된다.
// BFS 동작 과정
// 1) 탐색 시작 노드를 큐에 삽입하고 방문 처리를 한다.
// 2) 큐에서 노드를 꺼내 해당 노드의 인접 노드 중에서 방문하지 않은 노드를 모두 큐에 삽입하고 방문 처리를 한다.
// 3) 2)번의 과정을 더 이상 수행할 수 없을 때까지 반복한다.
// BFS는 큐 자료에 기초한다는 점에서 구현이 간단하다.
// 실제고 구현함에 있어 deque 라이브러리를 사용하는 것이 좋으며 탐색을 수행함에 있어 O(N)의 시간이 소요된다.
// 일반적인 경우 실제 수행 시간은 DFS보다 빠른 편이다.

// deque 라이브러리
// 리스트 자료형은 popleft() 메서드(선입선출)를 사용할 수 없기 때문에 deque 자료형으로 바꿔주기 위해 사용한다.
// 즉, deque 자료형은 큐 자료구조(선입선출)를 구현하기 위해 사용하는 것이다.
