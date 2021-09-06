import { Injectable } from '@angular/core';
import { AbstractControl, } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import {switchMap, map, first} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsuarioService: NovoUsuarioService) { }

  usuarioJaExiste(){
    return(control: AbstractControl)=>{
      return control.valueChanges.pipe(// quando  o valor muda
        //o switchMap recebe o nome digitado e transforma isso na requisão do backend - retorna verdadeiro ou falso
       switchMap((nomeUsuario)=>
       this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario)),
        // para no lugar de verdadeiro ou falso voltar objeto de erro ou nulo, que é a regra da validação
        map((usuarioExiste)=>{
          usuarioExiste ? {usuarioExistente: true} : null
        }),
        //metodo para fechar o fluxo da validação do observable
        first()
      );
    };
  }
}
