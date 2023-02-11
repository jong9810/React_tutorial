// 정렬 : 데이터를 특정한 기준에 따라서 순서대로 나열하는 것
// 정렬 알고리즘은 이진 탐색(Binary Search)의 전처리 과정이기도 하다.
// 정렬의 종류 : 선택 정렬, 삽입 정렬, 퀵 정렬, 계수 정렬
// 일반적으로 문제에서 요구하는 조건에 따라 적절한 정렬 알고리즘이 공식처럼 사용된다.

// reverse() 메서드 : 배열의 순서를 뒤집는 메서드(O(N)의 시간 복잡도)

// 1. 선택 정렬
// 선택 정렬 과정
// 1) 데이터가 무작위로 여러 개 있을 때, 이 중 가장 작은 데이터를 선택해 맨 앞에 있는 데이터와 바꾼다.
// 2) 정렬되지 않은 데이터 중 가장 작은 데이터를 선택해 정렬되지 않은 데이터의 맨 앞에 있는 데이터와 바꾼다.
// 3) 2)번 과정을 데이터의 개수만큼 반복한다.
// 선택 정렬의 시간 복잡도는 빅오 표기법으로 O(N2)으로 표현할 수 있다(2중 반복문).

// 2. 삽입 정렬
// 삽입 정렬은 필요할 때만 위치를 바꾸므로 '데이터가 거의 정렬되어 있을 때' 훨씬 효율적이다.
// 삽입 정렬은 특정한 데이터가 적절한 위치에 들어가기 이전에, 그 앞까지의 데이터는 이미 정렬되어 있다고 가정한다.
// 오름차순으로 정렬하는 경우, 삽입 정렬에서 정렬이 이루어진 원소들은 항상 오름차순을 유지하고 있다.
// 따라서 특정한 데이터가 삽입될 위치를 선정할 때, 삽입될 데이터보다 작은 데이터를 만나면 그 오른쪽에 데이터를 삽입하면 된다.
// 삽입 정렬의 시간 복잡도는 O(N2)인데, 삽입정렬의 특징은 정렬이 거의 된 리스트인 경우 퀵 정렬 알고리즘보다 강력하다.

// 3. 퀵 정렬
// 선택, 삽입, 퀵 정렬 중 퀵 정렬이 가장 많이 사용된다.
// 퀵 정렬과 비교할 만큼 빠른 알고리즘으로 '병합 정렬'알고리즘이 있다.
// 퀵 정렬은 대부분의 프로그래밍 언어에서 정렬 라이브러리의 근간이 되는 알고리즘이다.
// 퀵 정렬에서는 피벗(Pivot)이 사용된다. 피벗이란 큰 숫자와 작은 숫자를 교환할 때, 교환하기 위한 '기준'이다.
// 피벗을 설정하고 리스트를 분할하는 방법에 따라 여러 가지 방식으로 퀵 정렬을 구분하는데,
// 가장 대표적인 분할 방식은 리스트의 첫 번째 데이터를 피벗으로 정하는 '호어 분할(Hoare Partition) 방식'이 있다.
// 퀵 정렬은 기준을 설정한 다음 큰 수와 작은 수를 교환한 후 리스트를 반으로 나누는 방식으로 동작한다.
// 데이터가 무작위로 입력되는 경우 퀵 정렬은 빠르게 동작할 확률이 높다.
// 하지만 데이터가 정렬되어 있고, 가장 왼쪽을 피벗으로 삼을 경우 퀵 정렬은 매우 느리게 동작한다.
// 삽입 정렬과 퀵 정렬은 정반대의 특징을 가진다고 생각하면 된다.
// 퀵 정렬의 평균 시간 복잡도는 O(Nlog2N)이다. 하지만 최악의 경우 시간 복잡도는 O(N2)이다.
// C++과 같은 정렬 라이브러리를 제공하는 프로그래밍 언어들은 최악의 경우에도
// 시간 복잡도가 O(Nlog2N)을 보장할 수 있도록 피벗값을 설정할 때 추가로 로직을 더해준다.

// 4. 계수 정렬
// 계수 정렬은 데이터의 크기 범위가 제한되어 정수 형태로 표현할 수 있을 때만 사용 가능하다.
// 계수 정렬은 (가장 큰 데이터) - (가장 작은 데이터) + 1 의 크기를 가지는 리스트를 초기화 해야한다.
// 따라서 가장 큰 데이터와 가장 작은 데이터의 차이가 너무 크다면 계수 정렬은 사용할 수 없다.
// 일반적으로 가장 큰 데이터와 가장 작은 데이터의 차이가 1,000,000(백만)을 넘지 않을 때 효과적으로 사용할 수 있다.
// 계수 정렬은 직접 데이터의 값을 비교한 뒤에 위치를 변경하며 정렬하는 방식(비교 기반의 정렬 알고리즘)이 아니다.
// 계수 정렬은 일반적으로 별도의 리스트를 선언하고 그 안에 정렬에 대한 정보를 담는다.
// 모든 데이터가 양의 정수인 상황에서 데이터의 개수를 N, 데이터 중 최대값의 크기를 K라고 할 때, 계수 정렬의 시간 복잡도는 O(N + K)이다.
// 현존하는 정렬 알고리즘 중 기수 정렬(Radix Sort)과 더불어 가장 빠르다고 볼 수 있다.
// 보통 기수 정렬은 계수 정렬에 비해 동작은 느리지만, 처리할 수 있는 정수의 크기는 더 크다.
// 다만 알고리즘의 원리나 소스코드는 더 복잡하다.
// 계수 정렬은 동일한 값을 가지는 데이터가 여러 개 등장할 때 적합하다.
// 계수 정렬의 공간 복잡도는 O(N + K)이다.

// 5. 파이썬의 정렬 라이브러리(sorted(), sort())
// 파이썬은 기본 정렬 라이브러리에서 sorted() 함수를 제공한다.
// sorted()는 퀵 정렬과 동작 방식이 비슷한 병합 정렬 방식을 기반으로 만들어졌는데,
// 병합 정렬은 일반적으로 퀵 정렬보다 느리지만 최악의 경우에도 시간 복잡도 O(Nlog2N)을 보장한다는 특징이 있다.
// sorted()는 집합, 리스트, 딕셔너리 자료형 등을 입력받아서 정렬된 결과를 출력한다(반환은 리스트 자료형으로, 원본을 수정하지 않음).
// sorted()나 sort()를 이용할 때는 key 매개변수를 입력으로 받을 수 있다.
// key 매개변수에는 하나의 함수가 들어가야 하며 이는 정렬의 기준이 된다.
// 정렬 라이브러리는 최악의 경우에도 시간 복잡도 O(Nlog2N)을 보장한다.
// 코딩 테스트에서는 데이터의 범위가 한정되어 있고, 더 빠르게 동작해야 할 경우 계수 정렬을 사용하고,
// 문제에서 별도의 요구가 없고 단순히 정렬해야 하는 상황이라면 기본 정렬 라이브러리를 사용하면 된다.

// 코딩 테스트 정렬 문제 유형
// 1) 정렬 라이브러리로 풀 수 있는 문제
// 2) 정렬 알고리즘의 원리에 대해 물어보는 문제
// 3) 더 빠른 정렬이 필요한 문제
//  : 퀵 정렬 기반의 정렬 기법으로는 풀 수 없으며 계수 정렬 등의 다른 정렬 알고리즘을 이용하거나
//    기존에 알려진 알고리즘의 구조적인 개선을 거쳐야 풀 수 있다.
