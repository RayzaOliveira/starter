// Operaçoes em vetores com JS com S6 
// map, reduce, filter, find

const arr = [1, 3, 4, 5, 8, 10 ];

const newArr = arr.map(function(item, index) {
  return item + index;
});

console.log(newArr);


const sum = arr.reduce(function(total, next) {
  return total + next;
});

console.log(sum);


const filter = arr.filter(function(item) {
  return item % 2 === 0;
});

console.log(filter);


const find = arr.find(function(item) {
  return item === 4;
});

console.log(find);


// map, percorre o vetor, cada item dele e executa a ação
// index, posição do vetor
// reduce, consume todo vetor e transformar em uma unica informação(variavel/numero)
// filter, filtra ex numeros pares, a operação dentro do filter precisa retonar thrue ou false
// find, verificar se exite/encontrar uma informação dentro do array, retonar thrue ou false
// comparações e sempre thrue ou false