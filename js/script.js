let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
let randomNumber = Math.floor(Math.random() * 3 + 1);

let PlayerMove = getMoveName(playerInput);
let ComputerMove = getMoveName(randomNumber);

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
  printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
}
displayResult(ComputerMove, PlayerMove);

if (ComputerMove == PlayerMove) {
  printMessage("Remis!");
} else if (
  (ComputerMove == "kamień" && PlayerMove == "papier") ||
  (ComputerMove == "nożyce" && PlayerMove == "kamień") ||
  (ComputerMove == "papier" && PlayerMove == "nożyce")
) {
  printMessage("Ty wygrywasz!");
} else if (
  (ComputerMove == "papier" && PlayerMove == "kamień") ||
  (ComputerMove == "kamień" && PlayerMove == "nożyce") ||
  (ComputerMove == "nożyce" && PlayerMove == "papier")
) {
  printMessage("Przegrywasz!");
} else {
  printMessage(
    "Nie mam wystarczającej ilości danych, by roztrzygnąć ten pojedynek :("
  );
}
