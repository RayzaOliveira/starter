// Promise (permite usar .then e .cath )

var minhaPromise = function() {
  // retorno da fução
  return new Promise (function(resolve,reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.github.com/users/RayzaOliveira');
    xhr.send(null);

    xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      //  verificar sucesso (codigo 200)
      if (xhr.status === 200 ){
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject('Erro na requisição 💥');
      }
    }
  }
  });
}

  // fz a função dede ser d outra forma para usar o axios (como mostra o aquivo utilizandoAxios.js)
  // axios.get('https://api.github.com/users/RayzaOliveira')

  // execução da fução
  minhaPromise()
  .then(function(response){
    // resposta de sucesso
    console.log(response);
  })
  .catch(function(error){
    // resposta de erro
    console.warn(errot);
  });

// obeservações:

//promises, sao funções q nao vao influenciar na linha do tempo do codigo do JS,ou seja, 
// funções q vao devolver valor resultado so depois d um tempo, não precisamos se preocupar qdo o valor vai ser retornado, o js vai executar normalmente
// promise, é uma classe e é assincrona
// resolve, é uma função, vai ser usado na promise qdo o resultado for de sucesso (codigo 200)
// reject, é uma função, vai ser usado na promise qdo o resultado NÃO for de sucesso
// .then, vai ser executado qdo for chamdo o resolve na promise
// .cath, vai ser executado qdo for chamdo o reject na promise
// .warn, avisar o erro
// .onreadystatechange , espera (recebe) uma função
// .readyState , retorna o estado da promise

