import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FecharPedidoService {

  constructor(private roteador: Router,) { }

  fecharPedido() {
    this.roteador.navigateByUrl('/pedido-concluido');
  }

  voltarParaCarrinho() {
    this.roteador.navigateByUrl('/carrinho-page');
  }

  voltarParaTelaInicial() {
    this.roteador.navigateByUrl('');
  }
}
