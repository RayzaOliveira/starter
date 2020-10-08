// axios unido ao async/await,em uma classe estatica 

import axios from 'axios';

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      console.log(response);
    }catch (err) {
      console.warn('Erro na API 🚩');
    }
  }
}

Api.getUserInfo('RayzaOliveira');
Api.getUserInfo('vitorrios1001');
Api.getUserInfo('vitorrios1001ERRADO');



// usa o try para informar o erro