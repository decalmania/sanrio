import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../../shared/models/Pedido';
import { ReactiveFormsModule} from '@angular/forms';
import { CarrinhoService } from '../../../services/carrinho.service';
import { UsuarioService } from '../../../services/usuario.service';
import { MensagemService } from '../../../services/mensagem.service';
import { TituloComponent } from "../../partials/titulo/titulo.component";
import { FecharPedidoService } from '../../../services/fechar-pedido.service';
import { ItensPedidoComponent } from "../../partials/itens-pedido/itens-pedido.component";

@Component({
    selector: 'app-fechar-pedido-page',
    standalone: true,
    templateUrl: './fechar-pedido-page.component.html',
    styleUrl: './fechar-pedido-page.component.css',
    imports: [TituloComponent, ReactiveFormsModule, ItensPedidoComponent]
})
export class FecharPedidoPageComponent{
  pedido: Pedido = new Pedido();
  
  constructor(
    carrinhoService: CarrinhoService,
    private fecharPedidoService: FecharPedidoService,
    private mensagemService: MensagemService) {

      const carrinho = carrinhoService.obterCarrinho();
      this.pedido.itens = carrinho.itens;
      this.pedido.precoTotal = carrinho.totalPreco;
    }

    editarPedido() {
      this.fecharPedidoService.voltarParaCarrinho();
    }

    fecharPedido() {
      this.fecharPedidoService.fecharPedido();
    }

}
