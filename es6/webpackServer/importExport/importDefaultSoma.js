// import { soma, sub } from './webpackServer/funcoes';
import somaOutroNome from './webpackServer/importExport/exportDefaultSoma';

console.log(somaOutroNome(1, 2));
// console.log(sub(4, 2));

// qdo usado o export default, podemos colocar qualquer nome na função. 
import soma, { sub } from './webpackServer/importExport/exportDefaultSoma';
console.log(sub(4, 2));
