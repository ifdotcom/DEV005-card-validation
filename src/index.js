import validator from "./validator.js";

// traer el nunmero del DOM

const btn = document.querySelector(".btn"),
  inputNumber = document.querySelector(".numberCard"),
  inputName = document.querySelector(".nameCard"),
  name = document.querySelector(".name"),
  inputDate = document.querySelector(".dateCard"),
  date = document.querySelector(".date"),
  inputCvv = document.querySelector(".cvvCard"),
  cvv = document.querySelector(".cvv"),
  validText = document.querySelector(".validText"),
  errorText = document.querySelector(".errorText"),
  cardNumber = document.querySelector(".card__info-number");

inputNumber.addEventListener("keypress", (e) => {
  e.charCode >= 48 && e.charCode <= 57 ? true : e.preventDefault();
});
btn.addEventListener("click", (e) => {
  e.preventDefault();

  // obtener el valor de los input
  const numberValue = inputNumber.value,
    nameValue = inputName.value,
    dateValue = inputDate.value,
    cvvValue = inputCvv.value;

  //   validar si solo son numeros
  if (validator.isValid(numberValue) !== false) {
    //   ejecutar la funcion isValid e isMaskify
    validText.style.display = "block";
    errorText.style.display = "none";
    const numMaskify = validator.maskify(numberValue);
    cardNumber.innerHTML = `${numMaskify}`;
    name.innerHTML = `${nameValue}`;
    date.innerHTML = `${dateValue}`;
    cvv.innerHTML = `${cvvValue}`;
    console.log(dateValue);
  } else {
    validText.style.display = "none";
    errorText.style.display = "block";
    cardNumber.innerHTML = `################`;
    name.innerHTML = ``;
    date.innerHTML = ``;
    cvv.innerHTML = ``;
  }
});
