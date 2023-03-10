// - 프로토콜(Protocol)
// 복수의 컴퓨터 사이나 중앙 컴퓨터와 단말기 사이에서 데이터 통신을 원활하게 하기 위해 필요한 통신 규약.
// 신호 송신의 순서, 데이터의 표현법, 오류 검출법 등을 정함.

// - 헤더(Header)
// 데이터 앞 부분에 파일에 대한 정보를 실어놓은 부분
// 주로 데이터 형식에 대한 정보나 시간 데이터, 주소 데이터로 구성되어 있고 데이터의 종류에 따라 정리되기 쉽게 규격화해 놓은 데이터이다.
// 각 레이어는 아래 위로 인접한 층과 연계하여 통신을 처리한다.

// - 패킷(Packet)
// 네트워크를 통해 전송하기 쉽도록 자른 데이터의 전송 단위이다.
// 본래는 소포를 뜻하는 용어로, 소화물을 뜻하는 패키지(package)와 덩어리를 뜻하는 버킷(bucket)의 합성어이다.

// - IP(Internet Protocol)
// 인터넷이 통하는 네트워크에서 어떤 정보를 수신하고 송신하는 통신에 대한 규약.
// 데이터 체크섬은 제공하지 않고, 헤더 체크섬만 제공한다.
// 패킷을 분할, 병합하는 기능을 수행하기도 한다.
// 비연결형 서비스를 제공한다.
// Best Effort 원칙에 따른 전송 기능을 제공한다.

// - IP에서 사용하는 필드
// 1) Total Packet Length(16bits)
// IP 헤더 및 데이터를 포함한 IP 패킷 전체의 길이를 바이트 단위로 표시(최대값은 2^16 - 1 = 65,535)
// 2) Header Length
// IP 프로토콜의 헤더 길이를 32비트 워드 단위로 표시한다.
// 3) Time To Live
// 송신 호스트가 패킷을 전송하기 전 네트워크에서 생존할 수 있는 시간을 지정한 것이다.
// 4) Version Number
// IP 프로토콜의 버전번호를 나타낸다.

// - IPv4
// 32비트 주소.
// 유니캐스트/멀티캐스트/브로드캐스트 사용.
// IPv4는 호스트 주소를 자동으로 설정한다.
// IPv4는 클래스별로 네트워크와 호스트 주소의 길이가 다르다.

// - IPv6
// 128비트 주소(16비트씩 8부분의 16진수로 표시함).
// 2^128개의 주소를 표현할 수 있다.
// 기존 IPv4의 주소 부족 문제를 해결하기 위해 개발되었다.
// 확장기능을 통해 보안기능을 제공한다.
// 인증성/기밀성/무결성 지원(보안성 강화).
// 유니캐스트, 애니캐스트, 멀티캐스트 사용.
// 등급별, 서비스별로 패킷을 구분할 수 있어 품질보장이 용이하다.
// IPv6는 주소 자동설정(Auto Configuration) 기능을 통해 손쉽게 이용자의 단말을 네트워크에 접속시킬 수 있다.
