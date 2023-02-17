const validator = {
  isValid: (numberCard) => {
    if (numberCard !== "") {
      // separar caracteres
      const arrNumbers = numberCard.split("");
      console.log(arrNumbers);
      // -----------------algoritmo de luhn---------------------------------------
      const arrPar = [];
      const arrImpar = [];
      const arrDoble = [];

      // invertir el arr de números
      const arrReverse = arrNumbers.reverse();
      console.log(arrReverse);

      // filtrar todos aquellos que tengan posicion par
      //# ¿agregarlos a un nuevo array?¿agregar los impares a otro arr?
      arrReverse.filter((value, index) => {
        if (index % 2 === 0) {
          arrPar.push(value);
        } else if (index % 2 !== 0) {
          arrImpar.push(value);
        }
      });

      console.log(arrPar);
      console.log(arrImpar);

      for (let index = 0; index < arrImpar.length; index++) {
        const element = arrImpar[index] * 2;
        arrDoble.push(element.toString());
      }
      
      let sumanums = arrDoble.map(element => {
        return suma(element)
      });

      function suma(num) {
        let sum = 0;
        num.split("").forEach((element) => {
          sum += parseInt(element);
        });
        return sum;
      }

      console.log(arrDoble);
      console.log(sumanums);
      // sumar numeros si son 2 elementos arrImpar
    } else {
      return false;
    }
  },

  isMakify: () => {},
};

export default validator;
