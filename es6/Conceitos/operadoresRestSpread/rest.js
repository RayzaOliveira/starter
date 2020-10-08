// REST
const usuario = {
  nome:  'Rayza',
  idade: 23,
  trabalho:"Desenvolvedora"
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

// Operadores rest/spred (...)
// REST, resto das propriedades