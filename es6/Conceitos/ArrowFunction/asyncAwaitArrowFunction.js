// com Async, await em Arrow function
// ****************
const minhaPromise = () => new Promise ((resolve,reject) => {
  setTimeout(() => { resolve('OK 💗')}, 2000);
});

const executaPromise = async() => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());

};
executaPromise();