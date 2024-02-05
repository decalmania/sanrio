import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TituloComponent } from "../../partials/titulo/titulo.component";
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';
import { MensagemService } from '../../../services/mensagem.service';

@Component({
    selector: 'app-login-page',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [ReactiveFormsModule, TituloComponent, CommonModule]
})
export class LoginComponent {

  formulario: FormGroup = this.formBuilder.group({
    usuario: ['', Validators.required],
    senha: ['', Validators.required],
  })

  constructor(
    private usuarioService: UsuarioService, 
    private formBuilder: FormBuilder, 
    private roteador: Router,
    private mensagemService: MensagemService) {}

  aoClicarFazerLogin() {
    let usuarioLogin = this.usuarioService.login(
      this.formulario.value.usuario, 
      this.formulario.value.senha
    );

    if(!usuarioLogin) {
      this.mensagemService.mostrarMensagem('Usuário ou senha inválidos')
    }
    else {
      this.roteador.navigateByUrl('');
    }
  }
}
