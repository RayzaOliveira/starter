// Promise
var minhaPromise = function() {
  return new Promise (function(resolve,reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.github.com/users/RayzaOliveira');
    xhr.send(null);

    if (xhr.readyState === 4) {
      console.log(JSON.parse(xhr.responseText));
    }
  });
}

//promises, sao funções q nao vao influenciar na linha do tempo do codigo do JS,ou seja, 
// funções q vao devolver resultado so depois d um tempo, não precisamos se preocpar qdo o valor vai ser retornado, o js vai executar normalmente
// promise, é uma classe