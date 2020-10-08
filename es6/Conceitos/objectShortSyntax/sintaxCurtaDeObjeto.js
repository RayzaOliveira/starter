const nome = 'Rayza';
const idade = 23;

// qdo a propriedade e igual ao nome da variavel dentro do objeto{}.
// const usuario = {
//    nome: nome,
//    idade: idade,
//    empresa: 'Rocketseat',
// };

// podemos deixar apenas um deles.
const usuario = {
  nome,
  idade,
  empresa: 'Rocketseat',
};

console.log(usuario);