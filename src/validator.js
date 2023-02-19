const validator = {
  isValid: (numberCard) => {
    const arrPar = [];
    const arrImpar = [];
    // Funcion para invertir un array
    const arrayReverse = (arr) => {
      const arrReverse = arr.reverse();
      return arrReverse;
    };

    // Funcion para filtrar la posicion par
    const positionPar = (arr) => {
      arr.filter((value, index) => {
        if (index % 2 === 0) {
          arrPar.push(value);
        } else if (index % 2 !== 0) {
          arrImpar.push(value);
        }
      });
      return arr;
    };

    // Función que suma los numeros >= 10
    const sumNumbers = (num) => {
      let sum = 0;
      num.split("").forEach((element) => {
        sum += parseInt(element);
      });
      return sum;
    };

    // Funcion que da la suma final

    const arrSum = (arr) => {
      let sum = 0;
      arr.forEach((e) => {
        sum += parseInt(e);
      });
      return sum;
    };

    // funcion algoritmo

    const luhn = (numberCreditCard) => {
      // separar caracteres
      const arrNumbers = numberCreditCard.split("");
      const arrInverted = arrayReverse(arrNumbers);
      positionPar(arrInverted);
      const arrDoble = arrImpar.map((element) => {
        return (element * 2).toString();
      });
      const arrSumNums = arrDoble.map((element) => {
        return sumNumbers(element).toString();
      });
      const arrfinal = arrSumNums.concat(arrPar);
      const sumValidation = arrSum(arrfinal);
      return sumValidation;
    };

    if (luhn(numberCard) % 10 === 0 && numberCard !== "") {
      return true;
    } else {
      return false;
    }
  },

  maskify: (num) => {
    // console.log(typeof(num))
    const textModify =  (num).slice(0, -4).replace(/./g, "#") + ("" + num).slice(-4);
    // console.log(textModify)
    return textModify;
  },
};

export default validator;