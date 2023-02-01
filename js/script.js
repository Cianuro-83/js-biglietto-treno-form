console.log("TEST");
// assegno una variabile agli elementi html
const kmElement = document.querySelector("#km");
const ageElement = document.querySelector("#eta");
const btnElement = document.querySelector("#btn");
console.log(btnElement, ageElement, kmElement);

// creo la variabile del prezzo al km
const prize = 0.21;

// creo le variabili del prezzo
let fullPrize, youngPrize, olderPrize;

// impostol'evento al click del mouse
btnElement.addEventListener("click", function () {
  console.log("Click");
});
