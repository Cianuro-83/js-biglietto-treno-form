console.log("TEST");
// assegno una variabile agli elementi html
const kmElement = document.querySelector("#km");
const ageElement = document.querySelector("#eta");
const btnElement = document.querySelector("#btn");
let userNameElement = document.getElementById("nome-utente");
let surnameElement = document.getElementById("cognome-utente");
let firstNameElement = document.getElementById("first-name");
let lastNameElement = document.getElementById("last-name");
console.log(
  btnElement,
  ageElement,
  kmElement,
  firstNameElement,
  lastNameElement,
  userNameElement,
  surnameElement
);

// creo la variabile del prezzo al km
const prize = 0.21;

// impostol'evento al click del mouse
btnElement.addEventListener("click", function () {
  console.log("Click");
  // creo le variabili del prezzo
  let youngPrize,
    oldPrize,
    fullPrize,
    youngDiscount,
    oldDiscount,
    youngDiscountPercent = 0.2,
    oldDiscountPercent = 0.4,
    itCost,
    name = firstNameElement.value;
  surname = lastNameElement.value;
  // creo la variabile relativa all'età
  let age = ageElement.value;
  // creo la variabile relativa ai km
  let km = parseInt(kmElement.value);
  console.log(age, "km", km);
  switch (km) {
    case ">=0":
      fullPrize = prize * km;
      console.log(fullPrize);
      break;
    case "<0":
      fullPrize = prize * 100000;
      console.log(fullPrize);
      break;
    default:
      fullPrize = prize * 100000;
  }

  //   fullPrize = prize * km;
  // calcolo il prezzo dei biglietti per minorenne
  youngDiscount = [fullPrize * youngDiscountPercent - fullPrize] * -1;
  youngPrize = youngDiscount.toFixed(2);
  // calcolo il prezzo dei biglietti per anziano
  oldDiscount = [fullPrize * oldDiscountPercent - fullPrize] * -1;
  oldPrize = oldDiscount.toFixed(2);
  console.log(fullPrize, youngPrize, oldPrize);

  switch (age) {
    case "minorenne":
      itCost = youngPrize;
      console.log(itCost);
      break;
    case "adulto":
      itCost = fullPrize.toFixed(2);
      console.log(itCost);
      break;
    case "anziano":
      itCost = oldPrize;
      console.log(itCost);
      break;
    default:
      itCost = (fullPrize * 10).toFixed(2);
      console.log(itCost);
  }

  let toPayElement = document.getElementById("costo-biglietto");
  toPayElement.innerHTML = itCost + " €";
  userNameElement.innerHTML = name;
  surnameElement.innerHTML = surname;
});
