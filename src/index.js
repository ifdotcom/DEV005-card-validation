import validator from "./validator.js";

// traer el nunmero del DOM

const formContainer = document.querySelector(".card__data-container"),
  btn = document.querySelector(".btn"),
  btnSave = document.querySelector(".btnSave"),
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
  const numberValue = inputNumber.value;

  //   validar si solo son numeros
  if (validator.isValid(numberValue) !== false) {
    const numMaskify = validator.maskify(numberValue);
    //   ejecutar la funcion isValid e isMaskify
    validText.style.display = "block";
    errorText.style.display = "none";
    formContainer.style.display = "block";

    inputNumber.value = numMaskify;
    inputNumber.disabled = true;
    btn.style.display = "none";
    btnSave.style.display = "block";
    cardNumber.innerHTML = `${numMaskify}`;

    btnSave.addEventListener("click", (e) => {
      e.preventDefault();
      const nameValue = inputName.value,
        dateValue = inputDate.value,
        cvvValue = inputCvv.value;
      name.innerHTML = `${nameValue}`;
      date.innerHTML = `${dateValue}`;
      cvv.innerHTML = `${cvvValue}`;
    });
  } else {
    validText.style.display = "none";
    errorText.style.display = "block";
    cardNumber.innerHTML = ``;
    name.innerHTML = ``;
    date.innerHTML = ``;
    cvv.innerHTML = ``;
  }
});
