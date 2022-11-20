const BridgeGame = require('../Models/BridgeGame');
const InputView = require('../Views/InputView');
const OutputView = require('../Views/OutputView');

class GameController {
  constructor() {
    this.inputView = InputView;
    this.outputView = OutputView;
    this.bridgeGame = new BridgeGame();
  }

  startGame() {
    this.outputView.printStart();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    this.inputView.readBridgeSize((userInput) => {
      const size = this.inputView.getBridegeSize(userInput);
      this.bridgeGame.createBridge(size);
      this.selectMoving();
    });
  }

  selectMoving() {
    this.inputView.readMoving((userInput) => {
      const select = this.inputView.getUserMoving(userInput);
      this.bridgeGame.move(select);
      this.bridgeGame.checkResult();
    });
  }

  // 죽었으면 리트라이, 살았으면 다시 moving
  askRetry() {}
}

module.exports = GameController;
