// kolejność kodu jest odwrotna ponieważ nie jest dla mnie logiczne podawanie cyfry w momencie gdy widzę, co wylosował komputer ;)

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");

console.log("Gracz wpisał: " + playerInput);

let playerMove = "nieznany ruch";

if (playerInput == "1") {
  playerMove = "kamień";
} else if (playerInput == 2) {
  playerMove = "papier";
} else if (playerInput == 3) {
  playerMove = "nożyce";
} else {
  playerMove = "Hm, ten ruch jest mi nieznany. Wybierz coś, co ma dla mnie znaczenie!";
}

printMessage("Twój ruch to: " + playerMove + ".");

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("Wylosowana liczba to: " + randomNumber);

let computerMove = "nieznany ruch";

if (randomNumber == 1) {
  computerMove = "kamień";
} else if (randomNumber == 2) {
  computerMove = "papier";
} else if (randomNumber == 3) {
  computerMove = "nożyce";
} else {
  computerMove = "Hm, ten ruch jest mi nieznany.";
}

printMessage("Mój ruch to: " + computerMove + ".");

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }