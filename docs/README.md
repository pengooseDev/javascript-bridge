## 기본 환경설정

- [x] NodeJS 버젼 체크
- [x] npm i --no-shrink
- [x] ESLint, Prettier 환경설정

## 구현할 기능!

### 게임 시작

- [x] 게임 시작 문구를 출력한다. <outputView>
  > 다리 건너기 게임을 시작합니다.

### 다리의 길이를 숫자로 입력받고 생성한다.

- [x] 다리의 길이를 숫자로 입력받는다. <InputView>

  - [x] 숫자 이외의 타입이 들어오면 예외처리한다.<BridgeMaker>
  - [x] 범위 이외의 값이 들어오면 예외처리한다. (3 이상 20 이하)<BridgeMaker>

- [x] 다리의 길이만큼 0과 1 중 무작위 값을 추출해 답안을 생성한다. 
- [x] 하나의 행을 만들어 이를 반환한다.
- [x] 첫 행과 반대되는 값이 들어있는 두 번째 행을 생성한다.
- [x] 각 배열의 값을 1은 위(U), 0은 아래(D)로 변환한다.


### 라운드 진행

- [x] 라운드가 시작하면 입력을 받는다. <InputView>
  - [x] 입력된 값이 U 또는 D 이외의 값일 경우 예외처리한다.
- [x] 전달받은 입력값을 컨트롤러에 전달한다. <GameContorller>
- [x] 컨트롤러로부터 BridgeGame에 값을 전달하고 결과값 산출한다.
- [x] BridgeGame의 결과값을 Contorller에게 전달한다.
- [x] 유저의 입력값과 정답을 비교한다.
- [x] Controller로부터 outputView로 결과를 전달해 값을 출력한다.  
- [x] 결과값 인터페이스를 생성한다.<OutputView>
- [x] 유저가 다리 건너기에 성공할 경우, 결과 인터페이스를 출력한다.

- [x] 유저가 오답을 고를 경우, 재시도 의사를 묻는다.
  > 게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)
  - [x] 중단을 고를 경우, 결과 인터페이스를 출력한다.

- [x] 오류가 발생한 지점에서 다시 시작한다.
결과 인터페이스
```
최종 게임 결과
[ O |   |   ]
[   | O | O ]

게임 성공 여부: 성공
총 시도한 횟수: 2
```

- [x] 다리 게임 진행 데이터 저장.


### TestCase
- [x] 다리 생성을 위한 난수 배열 생성함수 테스트


### Refactor
- [x] BridgeGame 클래스에서 InputView, OutputView 분리. 게임 컨트롤러 하나 만들기.
- [x] Bridge의  Blueprint를 만드는 함수 모듈화 한다.
- [x] private 메서드를 사용해 객체의 상태 접근을 제한하고 있는지 확인한다.
- [x] 객체의 비즈니스 로직과 UI로직을 분리하되, 하나 이상의 로직을 수행하고 있는지 확인한다.
- [x] getter를 최대한 제한한다. 객체 내에서 값을 가져와 비즈니스 로직을 구현하지 말고 객체 내부에서 비즈니스 로직을 메서드로 구현해 값을 이용한다. 

- [x] progressData, playCount, gameResult를 하나의 gameData에서 관리하기.
- [x] 하드코딩 되어있는 값들 constant로 이동
- [x] 메서드 길이 중괄호 포함으로 생각해서 더욱 줄여보기.

### fix
- [x] 게임을 여러번 시도했을 때, 총 시도한 횟수가 정확한지 확인.
- [x] 승리하지 못하고 포기하는 경우, 게임 성공 여부 확인.