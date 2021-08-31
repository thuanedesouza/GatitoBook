import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //criando modelo
  usuario ='';//onde o modelo altera a view
  senha = '';


  constructor(private authService: AutenticacaoService) { }

  ngOnInit(): void {
  }

  login(){//o metodo autenticar está implementado no service
    this.authService.autenticar(this.usuario, this.senha).subscribe(() => {
      //caso sucesso
      console.log('Autenticado com sucesso');

    }, (error)=>{
      alert("Usuario ou senha invalido");
      console.log(error);
    });

  }

}
