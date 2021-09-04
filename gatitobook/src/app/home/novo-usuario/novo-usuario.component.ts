import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './minusculo.validator';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup; //usamos !: para mostrar que esse objeto pode ser nulo ou não

  constructor(
    private FormBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.FormBuilder.group({
      email:['', [Validators.required, Validators.email]],
      fullName:['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [minusculoValidator]],
      password: [''],
    });
  }

  cadastrar(){
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    console.log(novoUsuario);
  }
}
