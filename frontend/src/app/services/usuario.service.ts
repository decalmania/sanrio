import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MensagemService } from './mensagem.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios: any[] = [
    {
      id: 1,
      nome: 'Luísa',
      usuario: 'luisa',
      senha: '123',
    },
    {
      id: 2,
      nome: 'XYZ',
      usuario: 'xyz',
      senha: '123',
    }
  ];
  sessao: any;
  constructor(private mensagemService: MensagemService) {}

  login(usuario:string, senha:string) {
    let usuarioLogin = this.usuarios.find(x => x.usuario === usuario && x.senha === senha);
    if(usuarioLogin) {
      this.sessao = usuarioLogin;
      localStorage.setItem('sessao', JSON.stringify(this.sessao));

      this.mensagemService.mostrarMensagem('Login feito com sucesso!')

    }

    return usuarioLogin
  }

}
