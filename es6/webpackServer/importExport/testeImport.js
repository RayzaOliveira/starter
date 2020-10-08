// Webpack, um serviço q disponibiliza uma forma de trabalhar com varios arquivos JS, alem do main.js
// e tudo vai ser convertido em um unico bundle


import { soma, sub } from './webpackServer/importExport/testExport';

console.log(soma(1, 2));
console.log(sub(4, 2));

// em caso de renomeançao da função no export
import { soma as somaOutroNome, sub } from './webpackServer/importExport/testExport';

console.log(somaOutroNome(1, 2));
console.log(sub(4, 2));