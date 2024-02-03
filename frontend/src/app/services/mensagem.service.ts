import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {
  private mensagemSubject = new Subject<string>();

  mostrarMensagem(mensagem: string) {
    this.mensagemSubject.next(mensagem);
  }

  obterMensagens() {
    let mensagens = this.mensagemSubject.asObservable();
    return mensagens;
  }
}
