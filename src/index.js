import validator from "./validator.js";

// traer el nunmero del DOM

const btn = document.querySelector(".btn"),
  inputNumber = document.querySelector(".numberCard"),
  errorText = document.querySelector(".errorText");

document.addEventListener("keypress", (e) => {
  e.charCode >= 48 && e.charCode <= 57 ? true : e.preventDefault();
});
btn.addEventListener("click", (e) => {
  e.preventDefault();

  // obtener el valor del input
  const numberValue = inputNumber.value;

  // validator.isValid(numberValue);

  // ------------
  //   validar si solo son numeros
  if (validator.isValid(numberValue) !== false) {
    //   ejecutar la funcion isValid e isMaskify
    errorText.style.display = "none";
  } else {
    errorText.style.display = "block";
  }
});
