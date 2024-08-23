let numAlePlayer1 = Math.floor(Math.random() * 6 + 1);
let numAlePlayer2 = Math.floor(Math.random() * 6 + 1);

const dado1 = './assets/dice1.png';
const dado2 = './assets/dice2.png';
const dado3 = './assets/dice3.png';
const dado4 = './assets/dice4.png';
const dado5 = './assets/dice5.png';
const dado6 = './assets/dice6.png';

const dados = [dado1, dado2, dado3, dado4, dado5, dado6];

let numSorteiaPlayer1 = dados[numAlePlayer1 - 1];
let numSorteiaPlayer2 = dados[numAlePlayer2 - 1];


 const player1 = document.querySelector('.dado-player-1');
 player1.setAttribute('src', numSorteiaPlayer1)

 const player2 = document.querySelector('.dado-player-2');
 player2.setAttribute('src', numSorteiaPlayer2)

 
const title = document.querySelector('.title');

if(numAlePlayer1 > numAlePlayer2){
    title.innerHTML = "Player 1 Wins!";
}else if(numAlePlayer2 > numAlePlayer1){
    title.innerHTML = "Player 2 Wins!";
}else{
    title.innerHTML = "Draw!";
}