import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto-page.component.html',
  styleUrl: './produto-page.component.css'
})
export class ProdutoPageComponent implements OnInit{
  produto!: Product;

  constructor(rota:ActivatedRoute, productService:ProductService) {
    rota.params.subscribe((params) => {
      if(params['id'])
      this.produto = productService.obterProdutoPeloId(params['id']);
    })
  }

  ngOnInit(): void {
    
  }
}
