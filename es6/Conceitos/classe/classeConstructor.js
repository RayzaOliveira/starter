// class permite adicionar itens na classe

class TodoList {
  constructor() {
    this.data = [];
  }
  
    addTodo() {
      this.todos.push('Novo todo');
      console.log(this.todos);
    }
}

// instanciar
var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
  MinhaLista.addTodo();
}


//constructor(), primeiro metodo executado toda vez q instanciar uma nova classe
