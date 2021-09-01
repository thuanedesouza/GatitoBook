import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //criando modelo
  usuario ='';//onde o modelo altera a view
  senha ='';

  // o router é um serviço padrão do angular
  constructor(
    private authService: AutenticacaoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(){//o metodo autenticar está implementado no service
    this.authService.autenticar(this.usuario, this.senha).subscribe(() => {
      //caso sucesso
      //console.log('Autenticado com sucesso');
      this.router.navigate(['animais'])
    }, (error)=>{
      alert("Usuario ou senha invalido");
      console.log(error);
    });

  }

}
