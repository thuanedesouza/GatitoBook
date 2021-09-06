import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import { Usuario } from './usuario';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private tokenService: TokenService) {
      //caso já tenha um token na localStorage
  if(this.tokenService.possuiToken()){
    this.decodificaJWT();
  }
   }


  //uma observable que guarda o último estado
  private usuarioSubject = new BehaviorSubject<Usuario>({})

  //pegar info do token e decotificar pra transformar em um objeto de usuario
  private decodificaJWT(){
    const token = this.tokenService.retornaToken();
    const usuario = jwt_decode(token) as Usuario;
    this.usuarioSubject.next(usuario)
  }

  retornaUsuario(){//retornar como observable pra que nada de fora acesse o serviço diretamente
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token:string){
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
  }

  logout(){
    this.tokenService.excluiToken();
    this.usuarioSubject.next({});
  }

  estaLogado(){
    return this.tokenService.possuiToken();
  }

}
