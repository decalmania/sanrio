import { Component } from '@angular/core';
import { TituloComponent } from "../../partials/titulo/titulo.component";
import { FecharPedidoService } from '../../../services/fechar-pedido.service';

@Component({
    selector: 'app-pedido-concluido',
    standalone: true,
    templateUrl: './pedido-concluido.component.html',
    styleUrl: './pedido-concluido.component.css',
    imports: [TituloComponent]
})
export class PedidoConcluidoComponent {

  constructor(private fecharPedidoService: FecharPedidoService) {}

  continuarComprando() {
    this.fecharPedidoService.voltarParaTelaInicial();
  }
}
