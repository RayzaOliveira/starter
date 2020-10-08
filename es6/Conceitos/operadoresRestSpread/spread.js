// SPREAD

// unir os array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

// criar um novo objeo para o usuário, porem quero trocar uma dessas propriedades
const usuario1 = {
  nome:  'Rayza',
  idade: 23,
  trabalho:"Desenvolvedor(a)"
};

const usuario2 = {...usuario1, nome: 'Vitor'};

console.log(usuario2);

// ele fz o papel de propragar, repassar as informações de uma objeto/array pra outra estrutura de dados
