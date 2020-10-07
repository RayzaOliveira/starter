// Axios 

// fz a função dede ser d outra forma para usar o axios
axios.get('https://api.github.com/users/RayzaOliveira')
.then(function(response){
  console.log(response.data.avatar_url);
})
.catch(function(error){
  console.warn(errot);
});



// Obeservações:

// vamos usar o Axios no lugar do XMLHttpRequest

// importar pelo githunb: https://github.com/axios/axios
// <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

// o axios é um encapsulamento pro volta do XMLHttpRequest , 
// na verdade quem esta executando é o XMLHttpRequest, porem o axios vai nos ajudar a retorna os valores de forma mais facil 
// Não precisa usar o JSON.parse, pois o axios ja entende q a resposta é um  Json e ja retona ela um  objeto/vetor JS