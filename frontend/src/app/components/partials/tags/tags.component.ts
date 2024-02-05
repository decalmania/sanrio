import { Component, OnInit } from '@angular/core';
import { Tag } from '../../../shared/models/Tag';
import { ProdutoService } from '../../../services/produto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  
  tags?:Tag[];

  constructor(produtoService:ProdutoService) {
    this.tags = produtoService.obterTags();
  }
}
