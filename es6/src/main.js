// Utilizando recursos do ES6 em uma única aplicação
// consumindo api do github, utilizando import/export

import api from './api';

// Classe
class App {
  constructor() {
    this.repositories = [];

    this.formEl = document.getElementById('repo-form');
    this.inputEl = document.querySelector('input[name=repository]');
    this.listEl = document.getElementById('repo-list');

    this.registersHandlers();
  }
  
  // Arrow function
  registersHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  // Parametros padão numa função -> true
  setLoading(loading = true) {
    if (loading === true) {
      let loading = document.createElement('span');
      loadingEl.appendChild(documente.creatTextNode('Carregando'));
      loadingEl.setAttribute('id','loading');

      this.formEl.appendChild(loadingEl);
    } else {
      document.getElementById('loading').remove();
    }
  }
  async addRepository(event) {
    event.preventDefault();

    const repoInput =  this.inputEl.value;

    if (repoInput.legth === 0)
    return;

    this.setLoading();

    //  Try/catch - Async/await
    try{

      // templeta literals -> ${}
      const response = await api.get(`/repos/${repoInput}`);

      // Desestruturação de objetos
      const { name, description, html_url, owner: { avatar_url}} = response.data;

      this.repositories.push({

        // short syntax em objetos
        name,
        description,
        avatar_url,
        html_url,
      });

      this.inputEl.value = '';

      this.render();
    } catch (err) {
      alert('O repositório não existe!');
    }
    this.setLoading(false);
  }

  render() {
    this.listEl.innerHTML = '';

    this.repositories.forEach(repo => {
      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', repo.avatar_url);

      let titleEl = document.createElement('strong');
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement('p');
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement('a');
      linkEl.setAttribute('target','_blank');
      linkEl.setAttribute('href', repo.html_url);
      linkEl.appendChild(document.createTextNode('Acessar'));

      let listItemEl = document.createElement('li');
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listEl.appendChild(listItemEl);

    });
  }
}

new App();



// Obeservações:

// Local para testar os exemplos da pasta conceitos 
// Aplicação com ES6+

 // sen arrow function
  // registersHandlers() {
  //   this.formEl.onsubmit = function(event) {
  //     addRepository(event);
  //   }
  // }

  // forEach, sepercorre nao altera como o map
  // _blank, para abrir uma nova aba