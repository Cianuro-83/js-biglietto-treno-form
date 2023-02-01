console.log("TEST");
// assegno una variabile agli elementi html
const kmElement = document.querySelector("#km");
const ageElement = document.querySelector("#eta");
const btnElement = document.querySelector("#btn");
console.log(btnElement, ageElement, kmElement);

// creo la variabile del prezzo al km
const prize = 0.21;

// creo le variabili del prezzo
let fullPrize = prize * km,
  youngPrize = 0,
  oldPrize = 0,
  youngDiscount = 0.2,
  olderDiscount = 0.4;

// impostol'evento al click del mouse
btnElement.addEventListener("click", function () {
  console.log("Click");
  // creo la variabile relativa all'età
  let age = ageElement.value;
  // creo la variabile relativa ai km
  let km = parseFloat(kmElement.value);
  console.log(age, km);
  //assegno valori all'età e calcolo lo sconto
  switch (ageElement) {
    case "minorenne":
      age < "17";
      youngPrize = fullPrize * youngDiscount;

      break;
    case "adulto":
      age >= "18" && age <= "64";
      fullPrize;

      break;
    case "anziano":
      age >= "65";
      oldPrize = full * olderDiscount;
    //   break;
    // default:
    //   age = 39;
  }

  console.log(fullPrize, youngPrize, oldPrize);
});
