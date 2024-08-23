var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDice1 = "dice" + randomNumber1 + ".png";

var randomDiceSrc = "images/" + randomDice1;

var randomDiceImg1 = document.querySelectorAll("img")[0];

randomDiceImg1.setAttribute("src", randomDiceSrc);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDice2 = "dice" + randomNumber2 + ".png";

var randomDiceSrc2 = "images/" + randomDice2;

var randomDiceImg2 = document.querySelectorAll("img")[1];

randomDiceImg2.setAttribute("src", randomDiceSrc2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}