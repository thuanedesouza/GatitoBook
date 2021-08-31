import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
//motor de injeção de dependencia para instanciar serviço externo
  constructor(private httpClient: HttpClient) { }

  autenticar(usuario: string, senha: string ): Observable<any>{
     //observable é um objeto que quando a requisição completar vai retornar o objeto definido dentro do obervable
    return this.httpClient.post('http://localhost:3000/user/login',{
      userName: usuario,
      password: senha
    })

    }
}
