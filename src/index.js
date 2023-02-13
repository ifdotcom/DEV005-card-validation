import validator from "./validator.js";

// traer el nunmero del DOM

const btn = document.querySelector(".btn"),
  inputNumber = document.querySelector(".numberCard");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  // obtener el valor del input
  const numberValue = inputNumber.value;

  //   validar: solo numeros 0-9, solo 16 digitos, no campos vacios
  const regEx = /^[0-9]/;

  const validacion = regEx.test(numberValue);

  console.log(validacion)
//   if (regEx.search(numberValue)) {
//     console.log("tiene letras");
//   } else {
//     console.log("Formato correcto");
//   }

  //   ejecutar la funcion isValid e isMaskify
});

console.log(validator);
