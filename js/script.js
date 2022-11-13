{
  let computerCounter = 0;
  let humanCounter = 0;
  let gameResult = 0;
  const playGame = function (playerInput) {
    clearMessages();
    const randomNumber = Math.floor(Math.random() * 3 + 1);

    const getMoveName = function (argMoveId) {
      if (argMoveId == 1) {
        return "kamień";
      } else if (argMoveId == 2) {
        return "papier";
      } else if (argMoveId == 3) {
        return "nożyce";
      } else {
        printMessage("Nie znam ruchu  " + argMoveId + ".");
        return "nieznany ruch";
      }
    };

    const playerMove = getMoveName(playerInput);
    const computerMove = getMoveName(randomNumber);

    const displayResult = function (argComputerMove, argPlayerMove) {

      if (computerMove == playerMove) {
        printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove + ". Remis!");
      } else if (
        (computerMove == "kamień" && playerMove == "papier" && gameResult < 0.25) ||
        (computerMove == "nożyce" && playerMove == "kamień" && gameResult < 0.25) ||
        (computerMove == "papier" && playerMove == "nożyce" && gameResult < 0.25)
      ) {
        printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove + ". Ty wygrywasz!");
        clearMessagesHuman();
        humanCounter += 1;
        printMessageHuman(humanCounter);
      } else if (
        (computerMove == "papier" && playerMove == "kamień" && gameResult < 0.25) ||
        (computerMove == "kamień" && playerMove == "nożyce" && gameResult < 0.25) ||
        (computerMove == "nożyce" && playerMove == "papier" && gameResult < 0.25)
      ) {
        printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove + ". Przegrywasz!");
        clearMessagesComputer();
        computerCounter += 1;
        printMessageComputer(computerCounter);
      } else if (
        (computerMove == "nożyce" && playerMove == "kamień" && gameResult >= 0.25) ||
        (computerMove == "papier" && playerMove == "kamień" && gameResult >= 0.25)
      ) {
        printMessage("Zagrałem nożyce, a Ty " + argPlayerMove + ". Wyrgywasz!");
        clearMessagesHuman();
        humanCounter += 1;
        printMessageHuman(humanCounter);
      } else if (
        (computerMove == "kamień" && playerMove == "papier" && gameResult >= 0.25) ||
        (computerMove == "nożyce" && playerMove == "papier" && gameResult >= 0.25)
      ) {
        printMessage("Zagrałem kamień, a Ty " + argPlayerMove + ". Wyrgywasz!");
        clearMessagesHuman();
        humanCounter += 1;
        printMessageHuman(humanCounter);
      } else if (
        (computerMove == "papier" && playerMove == "nożyce" && gameResult >= 0.25) ||
        (computerMove == "kamień" && playerMove == "nożyce" && gameResult >= 0.25)
      ) {
        printMessage("Zagrałem kamień, a Ty " + argPlayerMove + ". Wyrgywasz!");
        clearMessagesHuman();
        humanCounter += 1;
        printMessageHuman(humanCounter);
      } else if ((gameResult = NaN) || (gameResult = Infinity)) {
        printMessage("Zbiesiłem się i zwiesiłem się. Punkt dla Ciebie!");
        clearMessagesHuman();
        humanCounter += 1;
        printMessageHuman(humanCounter);
      } else {
        printMessage(
          "Nie mam wystarczającej ilości danych, by roztrzygnąć ten pojedynek :("
        );
      }
    };
    displayResult(computerMove, playerMove);
    gameResult = computerCounter/humanCounter;
    console.log(gameResult);
    console.log(computerCounter, humanCounter, computerMove, playerMove);
  };

  document.getElementById("play-rock").addEventListener("click", function () {
    playGame(1);
  });

  document.getElementById("play-paper").addEventListener("click", function () {
    playGame(2);
  });
  document
    .getElementById("play-scissors")
    .addEventListener("click", function () {
      playGame(3);
    });
}
