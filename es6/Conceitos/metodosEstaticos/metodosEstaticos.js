// metodos estaticos

class Matematica {
  static soma(a,b) {
    return a + b;
  }
}

// ele vai mostrar independente do restante da classe 
console.log(Matematica.soma(1,2));


// metodos estaticos, não precisar dar um new (new TodoList()) na classe para chamar algum metodo dela 
// qdo temos o metodo static ele não encherga o resto da classe (this.todos),
// usado para a gente passar uma informação pra ele e ele retornar uma informação independente do resto da classe
// não tera constructor, sera apenas para ajudar agente fz algumas coisas