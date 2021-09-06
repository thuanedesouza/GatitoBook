import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http: HttpClient) { }

  cadastraNovoUsuario(novoUsuario:NovoUsuario){
  //novoUsuario recebe um objeto do tipo NovoUsuario que foi definido na interface
  return this.http.post('http://localhost:3000/user/signup', novoUsuario);
  //porta 3000 é onde está rodando a api, estamos mandando essa info para o backend
  }

  verificaUsuarioExistente(nomeUsuario:string){
    return this.http.get(`http://localhost:3000/user/exists/${nomeUsuario}`)
  }
}


