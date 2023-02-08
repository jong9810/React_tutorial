"""2023.02.08"""
# 행복 왕국의 왕실 정원은 체스판과 같은 8 * 8 좌표 평면이다.
# 왕실 정원의 특정한 한 칸에 나이트가 서 있다. 나이트는 매우 충성스러운 신하로서 매일 무술을 연마한다.
# 나이트는 말을 타고 있기 때문에 이동을 할 때는 L자 형태로만 이동할 수 있으며 정원 밖으로는 나갈 수 없다.
# 나이트는 특정한 위치에서 다음과 같은 2가지 경우로 이동할 수 있다.
# 1. 수평으로 두 칸 이동한 뒤에 수직으로 한 칸 이동하기
# 2. 수직으로 두 칸 이동한 뒤에 수평으로 한 칸 이동하기
# 8 * 8 좌표 평면상에서 나이트의 위치가 주어졌을 때 나이트가 이동할 수 있는 경우의 수를 출력하는 프로그램을 작성하시오.
# 이때 왕실의 정원에서 행 위치를 표현할 때는 1부터 8로 표현하며, 열 위치를 표현할 때는 a부터 h로 표현한다.

# 나이트 움직임: 8가지(x, y)
# [+2, +1], [+2, -1], [-2, +1], [-2, +1] : 좌우로 2칸, 상하로 1칸
# [+1, +2], [+1, -2], [-1, +2], [-1, -2] : 상하로 2칸, 좌우로 1칸

import time
# 입력
pos = input()

start_time = time.time()

# 방법1.
x = ord(pos[0]) - ord('a') + 1  # 가로 방향 위치 왼쪽부터 1, 2, 3, ... , 8
y = int(pos[1])                 # 세로 방향 위치 위쪽부터 1, 2, 3, ... , 8
moves = [[+2, +1], [+2, -1], [-2, +1], [-2, +1],
         [+1, +2], [+1, -2], [-1, +2], [-1, -2]]

count = 0
for move in moves:
    nx = x + move[0]
    ny = y + move[1]
    if nx <= 8 and nx >= 1 and ny <= 8 and ny >= 1:
        count += 1
print(count)
end_time = time.time()
print('time: ', end_time - start_time)
