import { Component, Input } from '@angular/core';
import { Pedido } from '../../../shared/models/Pedido';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-itens-pedido',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './itens-pedido.component.html',
  styleUrl: './itens-pedido.component.css'
})
export class ItensPedidoComponent {
  @Input()
  pedido!: Pedido;
}
