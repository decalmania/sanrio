import { Component } from '@angular/core';
import { Produto } from '../../../shared/models/Produto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../../services/produto.service';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../../../services/carrinho.service';
import { NaoEncontradoComponent } from "../../partials/nao-encontrado/nao-encontrado.component";

@Component({
    selector: 'app-produto-page',
    standalone: true,
    templateUrl: './produto.component.html',
    styleUrl: './produto.component.css',
    imports: [CommonModule, NaoEncontradoComponent]
})
export class ProdutoComponent {
  produto!: Produto;

  constructor(rotaAtiva:ActivatedRoute, produtoService:ProdutoService, 
    private carrinhoService:CarrinhoService, private roteador: Router) {
    rotaAtiva.params.subscribe((params) => {
      if(params['id'])
      this.produto = produtoService.obterProdutoPeloId(params['id']);
    })
  }

  aoClicarAdicionar() {

    this.carrinhoService.adicionarAoCarrinho(this.produto);
    this.roteador.navigateByUrl('/carrinho-page');

  }
}
