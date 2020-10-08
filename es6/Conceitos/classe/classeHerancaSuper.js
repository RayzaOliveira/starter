// class List , com herança 
// Adicionar alguma informação a mais e suar super

class List {
  constructor() {
    this.data = [];
  }

add(data) {
  this.data.push(data);
  console.log(this.data);
}
}

// essa classe vai herdar (extenser) a lista
class TodoList extends List {

  // Adicionar alguma informação a mais
  constructor(){
  // chamar constructor da classe pai
  super();

  this.usuario = 'Rayza';
}

  mostrarUsuario(){
    console.log(this.usuario);
  }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
  MinhaLista.add('Novo todo');
}

MinhaLista.mostrarUsuario();


// quando usamos o construtor() em uma classe (extends List) q erda outra classe (class List), temos q usar a propriedade super()
// conseguimos herda uma classe, adicionar novos metodos, mutar informaçoes, chamar constructor da classe pai pela classe filho (metodo super) 
