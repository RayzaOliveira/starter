// parametros
// function soma(a, b) {
//   return a + b;
// }

// console.log(soma(1,3));



// outro exemplo de parametro
// function soma(a, b, c) {   troca os parametros por resto
//   return a + b + c;
// }

// console.log(soma(1, 3, 4));

function soma(...params) {  
    return params.reduce((total, next) => total + next );
  }
  
  console.log(soma(1, 3, 4));