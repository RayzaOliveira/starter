// desestruturação de objetos(usuario) no JS

const usuario = {
  nome: 'Rayza',
  idade: 23,
  endereco: {
    cidade:'Blumenau',
    estado:'SC',
  },
};

// sem desestruturar
// const nome = usuario.nome;
// const idade = usuario.idade;
// const endereco = usuario.enderec.cidade;


// desestuturando 
const {nome, idade, endereco:{cidade}} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

// outro exemplo com parametro de funções
// sem desestruturar
// function mostrarNome(usuario){
//   console.log(usuario.nome);
// }

// mostrarNome(usuario);

// desestuturando 
function mostrarNome({nome, idade}) {
  console.log(nome, idade);
}

mostrarNome(usuario);