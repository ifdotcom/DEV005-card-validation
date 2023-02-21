import validator from "./validator.js";

// traer el nunmero del DOM

const btn = document.querySelector(".btn"),
  inputNumber = document.querySelector(".numberCard"),
  validText = document.querySelector(".validText"),
  errorText = document.querySelector(".errorText"),
  cardNumber = document.querySelector(".card__info-number");

document.addEventListener("keypress", (e) => {
  e.charCode >= 48 && e.charCode <= 57 ? true : e.preventDefault();
});
btn.addEventListener("click", (e) => {
  e.preventDefault();

  // obtener el valor del input
  const numberValue = inputNumber.value;
  //   validar si solo son numeros
  if (validator.isValid(numberValue) !== false) {
    //   ejecutar la funcion isValid e isMaskify
    validText.style.display = "block";
    errorText.style.display = "none";
    const numMaskify = validator.maskify(numberValue);
    cardNumber.innerHTML = `${numMaskify}`;
  } else {
    validText.style.display = "none";
    errorText.style.display = "block";
    cardNumber.innerHTML = `################`;
  }
});
