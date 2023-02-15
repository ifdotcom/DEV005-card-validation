const validator = {
  isValid: (arr) => {
    const arrPar = [];
    const arrImpar = [];

    // invertir el arr de números
    const arrReverse = arr.reverse();
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
      console.log(element);
    }

    // sumar numeros si son 2 elementos

    
  },

  isMakify: () => {},
};

export default validator;
