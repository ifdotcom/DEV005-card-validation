import validator from "./validator.js";

// traer el nunmero del DOM

const btn = document.querySelector(".btn"),
  inputNumber = document.querySelector(".numberCard");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  // obtener el valor del input
  const numberValue = inputNumber.value;

  //   validar: solo numeros 0-9,  no campos vacios, solo 16 digitos,

  const regEx = /^[0-9]+$/;
  const validationNumber = regEx.test(numberValue);

  //   convertir el string en array para saber la longitud
  const arrNumbers = numberValue.split("");



  //   validar si solo son numeros y ademas la longitud es igual a 16
  if (validationNumber && arrNumbers.length === 13) {
    //   ejecutar la funcion isValid e isMaskify
    validator.isValid(arrNumbers);
    console.log("Formato correcto");
    
  } else {
    console.log("algo falló");
  }
});

console.log(validator);
