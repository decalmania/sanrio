import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../shared/models/Produto';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../../../services/produto.service';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../../../services/carrinho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto-page.component.html',
  styleUrl: './produto-page.component.css'
})
export class ProdutoPageComponent implements OnInit{
  produto!: Produto;

  constructor(rota:ActivatedRoute, produtoService:ProdutoService, 
    private carrinhoService:CarrinhoService, private roteador: Router) {
    rota.params.subscribe((params) => {
      if(params['id'])
      this.produto = produtoService.obterProdutoPeloId(params['id']);
    })
  }

  ngOnInit(): void {
    
  }

  adicionarAoCarrinho() {

    this.carrinhoService.adicionarAoCarrinho(this.produto);
    this.roteador.navigateByUrl('/carrinho-page');

  }
}
