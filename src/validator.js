const validator = {
  isValid: (arr) => {


    // invertir el arr de números
    const arrReverse = arr.reverse();
    console.log(arrReverse);

    // filtrar todos aquellos que tengan posicion par
    //# ¿agregarlos a un nuevo array?¿agregar los impares a otro arr? 
    const indexs = arrReverse.filter((value, index) => {
      if(index % 2 === 0) return value
    });

    console.log(indexs);

    for (let index = 1; index < indexs.length; index++) {
      const element = indexs[index]*2;
      console.log(element)
    }
  },

  isMakify: () => {},
};

export default validator;
