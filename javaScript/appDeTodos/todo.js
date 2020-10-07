// vamos precisar referenciar os elementos aqui no JS
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// armazenando lista no JS
// como é texto, podemos fz um array
// var todos = [
//   'Fazer exercícios Físicos',
//   'Trabalhar',
//   'Estudar Programação',
// ];

// alterando a lista para manter os item no recarregamento da pagina
// retonar valor padao, || [] , se ele nao sonsegui retonar um valor aceitavel, retornar vasio
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

// Renderizar o ToDo em tela, em forma de função, dessa forma ja vai ter uma função para redenrizar e excluir **
function renderTodos() {
  // remover todo conteudo q estiver na lista element (tudo dento de ul fica vazio)
  listElement.innerHTML = '';

// usar um for(for expecifico para array), para percorrer a lista
  for (todo of todos) {
    
    // criar elementes
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    // criar link de para excluir
    var linkElement = document.createElement('a');

    // o a é obrigatorio ter um link
    linkElement.setAttribute('href', '#');

    // posição do texto no array
    var pos = todos.indexOf(todo);
    // concatenou o pos, pq ele precisava de um parametro
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos +')');

    // colocar um texto dentro do a
    var linkText = document.createTextNode('Excluir');

    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);

  }
}
renderTodos();

// função para adicionar ToDo **
function addTodo() {
  // recuperar o valor do input
  var todoText = inputElement.value;

  // adicionar todoText no array (adicionar item no final do array)
  todos.push(todoText);

  // Apagar o texto atual do inpunt
  inputElement.value = '';
  
  // redenizar novamente a lista
  renderTodos();
  saveTodoStorage()
}
// chamar a função qdo o botao for clicado
buttonElement.onclick = addTodo;

// excluir o todo usando a posição do array como referencia **
function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveTodoStorage()
}

// salvar informações **
function saveTodoStorage(){
  localStorage.setItem('list_todos', JSON.stringify(todos));
}




// observações:

// Array de Objetos:
// var todos = [
//   { text: 'Fazer exercícios Físicos', propriedade: 1},
// ];

// push, adicionar um novo elemento no final
// splice, remove uma quantida de intens no array, com base na posição
// indexOf, passando um texto ou o valor de cada item do array, ele retorna em qual array dessa posicao ele esta 
// local Storage, usado para armazenar informações não relacionais(chave e valor) com informações simples, msm se sair ou recarregar a pagina 
// setItem, setar o valor no storage
// JSON(parece um objeto, porem ele é uma String), usado para converter um array em json
// JSON.stringify, transforma o vetor/objetos em uma string
// JSON.parse, transformando o json em array

