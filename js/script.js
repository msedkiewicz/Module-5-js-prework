function playGame(playerInput) {
  clearMessages();
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  let playerMove = getMoveName(playerInput);
  let computerMove = getMoveName(randomNumber);

  function getMoveName(argMoveId) {
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
  }

  function displayResult(argComputerMove, argPlayerMove) {
    printMessage(
      "Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove + "."
    );

    if (computerMove == playerMove) {
      printMessage("Remis!");
    } else if (
      (computerMove == "kamień" && playerMove == "papier") ||
      (computerMove == "nożyce" && playerMove == "kamień") ||
      (computerMove == "papier" && playerMove == "nożyce")
    ) {
      printMessage("Ty wygrywasz!");
    } else if (
      (computerMove == "papier" && playerMove == "kamień") ||
      (computerMove == "kamień" && playerMove == "nożyce") ||
      (computerMove == "nożyce" && playerMove == "papier")
    ) {
      printMessage("Przegrywasz!");
    } else {
      printMessage(
        "Nie mam wystarczającej ilości danych, by roztrzygnąć ten pojedynek :("
      );
    }
  }

  displayResult(computerMove, playerMove);
}