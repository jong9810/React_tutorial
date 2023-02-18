// 1. 순차 탐색(Sequential Search)
// 리스트 안에 있는 특정한 데이터를 찾기 위해 앞에서부터 데이터를 하나씩 차례대로 확인하는 방법
// 보통 정렬되지 않은 리스트에서 데이터를 찾아야 할 때 사용한다.
// 리스트 내에 데이터가 아무리 많아도 시간만 충분하다면 항상 원하는 원소를 찾을 수 있다.
// 순차탐색은 시간 복잡도가 최악의 경우 O(N)이다.

// 2. 이진 탐색(Binary Search)
// 이진 탐색은 탐색의 범위를 절반으로 좁혀가며 데이터를 탐색하는 알고리즘이다.
// 이진 탐색은 배열 내부의 데이터가 정렬되어 있어야만 사용할 수 있다.
// 이진 탐색은 데이터를 절반으로 줄여가면서 탐색하므로 시간 복잡도가 O(log2N)이다.
// 코딩 테스트의 이진 탐색 문제는 탐색 범위가 큰 상황인 경우가 많다.
// 탐색 범위가 2000만이 넘어가면 이진 탐색으로 문제에 접근해보는 것이 좋다.

// 이진탐색 과정
// 1) 정렬된 리스트의 처음값과 끝값, 중간값을 초기화한다(중간값 : 처음값과 끝값의 절반 지점에 위치하는 데이터).
// 2) 중간값과 찾으려는 값을 비교하여 중간값이 더 크면, 끝값을 중간값 바로 전 값으로 변경한다.
// 3) 중간값이 더 작으면, 처음값을 중간값 바로 다음 값으로 변경한다.
// 4) 다시 중간값을 찾는다.
// 5) 2) ~ 4) 과정을 처음값, 끝값, 중간값 중 하나가 찾으려는 값과 같아질 때까지 반복한다.

// 이진 탐색 문제는 입력 데이터가 많거나 탐색 범위가 매우 넓은 편이다.
// 예를 들어 탐색할 데이터의 개수가 1000만 개를 넘어가거나, 탐색 범위의 크기가 1000억 이상이라면 이진 탐색 알고리즘을 의심해보자.
// 이런 경우 input()함수를 사용하면 동작 속도가 느려서 시간 초과로 오답 판정을 받을 수 있다.
// 입력 데이터가 많은 문제는 sys 라이브러리의 readline()함수를 이용하면 시간 초과를 피할 수 있다.

// readline()함수 사용법
// 한 줄 입력 받을 때 마지막 문자로 줄바꿈이 입력이 되는데, rstrip()이 줄바꿈을 제거 해준다.
/* 
import sys
input_data = sys.stdin.readline().rstrip()
print(input_data)
*/

// 3. 트리 자료구조
// 트리 자료구조는 노드와 노드의 연결로 표현하며, 노드는 정보의 단위로서 어떠한 정보를 가지고 있는 개체이다.
// 큰 데이터를 처리하는 소프트웨어는 대부분 데이터를 트리 자료구조로 저장해서 이진 탐색과 같은 탐색 기법을 사용한 빠른 탐색이 가능하다.

// 트리 자료구조 특징
// 1) 트리는 부모 노드와 자식 노드의 관계로 표현된다.
// 2) 트리의 최상단 노드를 루트 노드라고 한다.
// 3) 트리의 최하단 노드를 단말 노드라고 한다.
// 4) 트리에서 일부를 떼어내도 트리 구조이며 이를 서브 트리라 한다.
// 5) 트리는 파일 시스템과 같이 계층적이고 정렬된 데이터를 다루기에 적합하다.

// 4. 이진 탐색 트리
// 이진 탐색 트리란 이진 탐색이 동작할 수 있도록 고안된, 효율적인 탐색이 가능한 자료구조이다.

// 이진 탐색 트리의 특징
// 1) 부모 노드보다 왼쪽 자식 노드가 더 작다.
// 2) 부모 노드보다 오른쪽 자식 노드가 더 크다.
// 왼쪽 자식 노드 < 부모 노드 < 오른쪽 자식 노드

// 파라메트릭 서치(Parametric Search)
// 파라메트릭 서치는 최적화 문제를 결정 문제(예 아니오로 답하는 문제)로 바꾸어 해결하는 기법이다.
// 주로 '원하는 조건을 만족하는 가장 알맞은 값을 찾는 문제'에 파라메트릭 서치를 사용한다.
// 코딩테스트에서 보통 파라메트릭 서치 유형은 이진 탐색을 이용하여 해결한다.
//
