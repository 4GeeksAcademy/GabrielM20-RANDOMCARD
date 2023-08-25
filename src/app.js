/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here

  let generateRandomNumber = () => {
    let numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let indexNumbers = Math.floor(Math.random() * numbers.length);
    return numbers[indexNumbers];
  };

  let generateRandomSuit = () => {
    let suits = ["♦", "♥", "♠", "♣"];
    let indexSuit = Math.floor(Math.random() * suits.length);
    return suits[indexSuit];
  };

  let cardElement = document.querySelector(".card");
  cardElement.classList.add("generateRandomSuit");

  document.getElementById("button1").addEventListener("click", function() {
    let randomSuit = generateRandomSuit();
    let randomNumber = generateRandomNumber();

    var topText = document.querySelector("#top-cardText");
    topText.innerHTML = randomSuit;
    var cardNumber = document.querySelector("#Number");
    cardNumber.innerHTML = randomNumber;

    var botText = document.querySelector("#bottom-cardText");
    botText.innerHTML = randomSuit;

    if (randomSuit === "♥" || randomSuit === "♦") {
      topText.style.color = "red";
      botText.style.color = "red";
    } else {
      topText.style.color = "black";
      botText.style.color = "black";
    }

    //cardElement.innerHTML = ` <div id="top-cardText">${randomSuit}</div><div id="Number">${randomNumber}</div><div id="bottom-cardText">${randomSuit}</div>;
  });
};

//.classList.remove()  classList.add();
