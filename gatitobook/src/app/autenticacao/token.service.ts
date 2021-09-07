import { Injectable } from '@angular/core';

//manipulando a API de local storage do chrome

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

// não injetamos nada nessa classe

  retornaToken(){
    return localStorage.getItem(KEY) ?? '';// caso não pegue a chave retorna ''
  }

  salvaToken(token: string){
    localStorage.setItem(KEY, token);
  }

  excluiToken(){
    localStorage.removeItem(KEY);
  }

  possuiToken(){
    return !!this.retornaToken();// !! verifica se tem ou não tem
  }

}
