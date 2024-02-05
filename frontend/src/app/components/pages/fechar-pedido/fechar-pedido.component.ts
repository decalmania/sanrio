import { Component } from '@angular/core';
import { Pedido } from '../../../shared/models/Pedido';
import { ReactiveFormsModule} from '@angular/forms';
import { CarrinhoService } from '../../../services/carrinho.service';
import { TituloComponent } from "../../partials/titulo/titulo.component";
import { FecharPedidoService } from '../../../services/fechar-pedido.service';
import { ItensPedidoComponent } from "../../partials/itens-pedido/itens-pedido.component";

@Component({
    selector: 'app-fechar-pedido-page',
    standalone: true,
    imports: [TituloComponent, ReactiveFormsModule, ItensPedidoComponent],
    templateUrl: './fechar-pedido.component.html',
    styleUrl: './fechar-pedido.component.css',
})
export class FecharPedidoComponent{
  pedido: Pedido = new Pedido();
  
  constructor(
    carrinhoService: CarrinhoService,
    private fecharPedidoService: FecharPedidoService) {

      const carrinho = carrinhoService.obterCarrinho();
      this.pedido.itens = carrinho.itens;
      this.pedido.precoTotal = carrinho.totalPreco;
    }

    aoClicarEditarPedido() {
      this.fecharPedidoService.voltarParaCarrinho();
    }

    aoClicarFecharPedido() {
      this.fecharPedidoService.fecharPedido();
    }

}
