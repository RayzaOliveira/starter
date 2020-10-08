// Async, await
//  ao invez de ter q usar o .then, .cat, toda vez podemos definir um async e usar varios await, um abaixo do outro

// sem Async, await
// ****************
// seria mais o menos assim, estes exemplo esta incompleto
// const minhaPromise = () => new promise ((resolve,reject) => {
//   setTimeout(() => { resolve('OK 💗')}, 2000);
// });

// minhaPromise().then(response => {
//   console.log(response);

//   minhaPromise().then(response => {
//     console.log(response);

//     minhaPromise().then(response => {
//       console.log(response);
//     })
//   })  
// })

// executaPromise();

// com Async, await
// ****************
const minhaPromise = () => new Promise ((resolve,reject) => {
  setTimeout(() => { resolve('OK 💗')}, 2000);
});

async function executaPromise(){
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());

};
executaPromise();


// com Async, await em Arrow function
// ****************
// const minhaPromise = () => new Promise ((resolve,reject) => {
//   setTimeout(() => { resolve('OK 💗')}, 2000);
// });

// const executaPromise = async() => {
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());

// };
// executaPromise();

// com async a função vira uma promise
// o await precisa estar sempre dentro do async
