import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../shared/models/Produto';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../../../services/produto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto-page.component.html',
  styleUrl: './produto-page.component.css'
})
export class ProdutoPageComponent implements OnInit{
  produto!: Produto;

  constructor(rota:ActivatedRoute, produtoService:ProdutoService) {
    rota.params.subscribe((params) => {
      if(params['id'])
      this.produto = produtoService.obterProdutoPeloId(params['id']);
    })
  }

  ngOnInit(): void {
    
  }
}
