import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root', //onde definimos onde esse service pode ser injetado
})
export class AutenticacaoService {
  //motor de injeção de dependencia para instanciar serviço externo
  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  //Observable<HttpResponse<any>> significa que vai vir toda a resposta da requisição
  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    //observable é um objeto que quando a requisição completar vai retornar o objeto definido dentro do obervable
    return this.httpClient
      .post(
        'http://localhost:3000/user/login',
        {
          userName: usuario,
          password: senha,
        }, // parametro de options:
        { observe: 'response' }
      )
      .pipe(
        //uma requisição que o efeito colateral vai gravar o token
        //pega o header do token e salva por meio dos serviços que criamos
        tap((res) => {
          const authToken = res.headers.get('x-access-token') ?? '';
          this.usuarioService.salvaToken(authToken);
        })
      );
  }
}
