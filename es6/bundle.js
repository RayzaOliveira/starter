"use strict";

// desestruturação de objetos(usuario) no JS
var usuario = {
  nome: 'Rayza',
  idade: 23,
  endereco: {
    cidade: 'Blumenau',
    estado: 'SC'
  }
}; // sem desestruturar
// const nome = usuario.nome;
// const idade = usuario.idade;
// const endereco = usuario.enderec.cidade;
// desestuturando 

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade); // outro exemplo com parametro de funções
// sem desestruturar
// function mostrarNome(usuario){
//   console.log(usuario.nome);
// }
// mostrarNome(usuario);
// desestuturando 

function mostrarNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostrarNome(usuario);
