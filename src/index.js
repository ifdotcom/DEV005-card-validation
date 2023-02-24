import validator from "./validator.js";

// traer el nunmero del DOM

const formContainer = document.querySelector(".card__data-container"),
  btnValitate = document.querySelector(".btnValitate"),
  btnSave = document.querySelector(".btnSave"),
  btnRegister = document.querySelector(".btnRegister"),
  inputNumber = document.querySelector(".numberCard"),
  inputName = document.querySelector(".nameCard"),
  name = document.querySelector(".name"),
  inputDate = document.querySelector(".dateCard"),
  date = document.querySelector(".date"),
  inputCvv = document.querySelector(".cvvCard"),
  cvv = document.querySelector(".cvv"),
  cardNumber = document.querySelector(".card__info-number");

inputNumber.addEventListener("keypress", (e) => {
  e.charCode > 48 && e.charCode <= 57 ? true : e.preventDefault();
});
inputName.addEventListener("keypress", (e) => {
  e.charCode === 32 ||
  (e.charCode >= 65 && e.charCode <= 90) ||
  (e.charCode >= 97 && e.charCode <= 122)
    ? true
    : e.preventDefault();
});
inputCvv.addEventListener("keypress", (e) => {
  e.charCode >= 48 && e.charCode <= 57 ? true : e.preventDefault();
});

btnValitate.addEventListener("click", (e) => {
  e.preventDefault();
  // obtener el valor de los input
  const numberValue = inputNumber.value;

  //   validar si solo son numeros
  if (validator.isValid(numberValue) !== false) {
    // llamo a la funcion maskify para traer el numero cifrado
    const numMaskify = validator.maskify(numberValue);
    formContainer.style.display = "block";
    inputNumber.value = numMaskify;
    inputNumber.disabled = true;
    btnValitate.style.display = "none";
    btnSave.style.display = "block";
    btnRegister.style.display = "block";
    cardNumber.innerHTML = `${numMaskify}`;
    inputNumber.classList.remove("errorText");
    inputNumber.classList.add("validText");
  } else {
    cardNumber.innerHTML = ``;
    inputNumber.classList.add("errorText");
  }
});
btnSave.addEventListener("click", (e) => {
  e.preventDefault();
  const nameValue = inputName.value,
    dateValue = inputDate.value,
    cvvValue = inputCvv.value;
  if (nameValue === "" && dateValue === "" && cvvValue === "") {
    inputName.classList.add("errorText");
    inputDate.classList.add("errorText");
    inputCvv.classList.add("errorText");
  } else {
    name.innerHTML = nameValue;
    date.innerHTML = dateValue;
    cvv.innerHTML = cvvValue;
    inputName.classList.remove("errorText");
    inputDate.classList.remove("errorText");
    inputCvv.classList.remove("errorText");
    inputName.classList.add("validText");
    inputDate.classList.add("validText");
    inputCvv.classList.add("validText");
  }
});
btnRegister.addEventListener("click", () => {
  window.reload();
});
