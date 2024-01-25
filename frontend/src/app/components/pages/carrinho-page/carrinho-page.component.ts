import { Component, OnInit } from '@angular/core';
import { Carrinho } from '../../../shared/models/Carrinho';
import { CarrinhoService } from '../../../services/carrinho.service';
import { ItemCarrinho } from '../../../shared/models/ItemCarrinho';
import { TituloComponent } from "../../partials/titulo/titulo.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-carrinho-page',
    standalone: true,
    templateUrl: './carrinho-page.component.html',
    styleUrl: './carrinho-page.component.css',
    imports: [TituloComponent, CommonModule]
})
export class CarrinhoPageComponent implements OnInit{
  carrinho!: Carrinho;

  constructor(private carrinhoService: CarrinhoService) {
    this.carrinhoService.obterObservableDoCarrinho()
    .subscribe((carrinho) => {
      this.carrinho = carrinho
    })
  }

  ngOnInit(): void {
    
  }

  removerDoCarrinho(itemCarrinho:ItemCarrinho) {
    this.carrinhoService.removerDoCarrinho(itemCarrinho.produto.id);
  }

  mudarQuantidade(itemCarrinho:ItemCarrinho, quantidadeNoCarrinho:string) {
    const quantidade = parseInt(quantidadeNoCarrinho);
    this.carrinhoService.mudarQuantidade(itemCarrinho.produto.id, quantidade);
  }

}