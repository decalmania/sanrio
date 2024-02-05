import { Component } from '@angular/core';
import { Carrinho } from '../../../shared/models/Carrinho';
import { CarrinhoService } from '../../../services/carrinho.service';
import { ItemCarrinho } from '../../../shared/models/ItemCarrinho';
import { TituloComponent } from "../../partials/titulo/titulo.component";
import { CommonModule } from '@angular/common';
import { NaoEncontradoComponent } from "../../partials/nao-encontrado/nao-encontrado.component";

@Component({
    selector: 'app-carrinho-page',
    standalone: true,
    templateUrl: './carrinho-page.component.html',
    styleUrl: './carrinho-page.component.css',
    imports: [TituloComponent, CommonModule, NaoEncontradoComponent]
})
export class CarrinhoPageComponent {
  carrinho!: Carrinho;

  constructor(private carrinhoService: CarrinhoService) {
    this.carrinhoService.obterObservableDoCarrinho()
    .subscribe((carrinho) => {
      this.carrinho = carrinho
    })
  }

  aoClicarRemover(itemCarrinho:ItemCarrinho) {
    this.carrinhoService.removerDoCarrinho(itemCarrinho.produto.id);
  }

  aoMudarQuantidade(itemCarrinho:ItemCarrinho, quantidadeNoCarrinho:string) {
    const quantidade = parseInt(quantidadeNoCarrinho);
    this.carrinhoService.mudarQuantidade(itemCarrinho.produto.id, quantidade);
  }

}
