// class List , com herança

class List {
  constructor() {
    this.data = [];
  }

add(data) {
  this.data.push(data);
  console.log(this.data);
}
}

// essa classe vai estenser a lista
class TodoList extends List {
 
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
  MinhaLista.add('Novo todo');
}