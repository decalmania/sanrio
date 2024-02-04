import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MensagemService } from './mensagem.service';
import { Usuario } from '../shared/models/Usuario';
import { sample_usuarios } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  sessao: any;
  constructor(private mensagemService: MensagemService) {
  }

  obterUsuarios():Usuario[]{
    return sample_usuarios;
  }

  login(usuario:string, senha:string) {
    const usuarioLogin = this.obterUsuarios().find(x => x.usuario === usuario && x.senha === senha);
    if(usuarioLogin) {
      this.sessao = usuarioLogin;
      localStorage.setItem('sessao', JSON.stringify(this.sessao));

      this.mensagemService.mostrarMensagem('Login feito com sucesso!')

    }

    return usuarioLogin
  }

  logout(): void {
    this.sessao = null
    localStorage.removeItem('sessao');

    this.mensagemService.mostrarMensagem('Logout feito com sucesso!')
  }
}

