import { Component, OnInit } from '@angular/core';
import { MensagemService } from '../../../services/mensagem.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-box.component.html',
  styleUrl: './message-box.component.css'
})
export class MessageBoxComponent implements OnInit{
  mensagens: string[] = [];

  constructor(private mensagemService: MensagemService) {}

  ngOnInit() {
    this.mensagemService.obterMensagens().subscribe(mensagem => {
      this.mensagens.push(mensagem);
    })
  }

  fecharMensagem(index: number) {
    this.mensagens.splice(index, 1);
  }

}
