// Arrow Function

const arr = [1, 3, 4, 5, 8, 10 ];

const newArr = arr.map(item => item * 2 );

console.log(newArr);

// para um objeto
const teste = () => ({ nome: 'Diego'});

console.log(teste());

// para um array, string, numero NÃO precisa de parentese
const teste = () => 3;

console.log(teste());



//Arrow Function, usadas nas funções anonimas e callback (função dentro d funão)
// qdo tem so um parametro, pode remover o parentese do paramtro
// qdo retorna so uma informação, copia o conteudo sem o return e coloca depois da flecha sem o uso de chaves
// objeto sem return, precisa ficar entre parentese, apos flecha