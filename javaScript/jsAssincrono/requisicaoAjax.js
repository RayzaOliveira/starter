// Ajax
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/RayzaOliveira');
xhr.send(null);

// para o js não ficar esperando a requisiçao terminar p ele continuar executando o restanto do codigo
xhr.onreadystatechange = function() {
  // fazer uma verificacao para retornar a requisicao ajax
  // variavel 4 significa que a resposta voltou para gente
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
}

// AJAX (é uma requisicao assincrona), usado para requisitar informações do servidor sem precisar recarrega a pagina
// função assincrona, não acontece no msm fluxo so nosso script
// XMLHttpRequest, é uma classe q vai dar acesso ao Ajax para recuperar alguma informação de algum servidor
// GET, metodo para buscar informação
// send(null), primeiro parametro vai nulo
// JSON.parse, converto o Json em objeto/vetor