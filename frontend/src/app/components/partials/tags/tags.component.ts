import { Component, OnInit } from '@angular/core';
import { Tag } from '../../../shared/models/Tag';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit {
  
  tags?:Tag[];

  constructor(productService:ProductService) {
    this.tags = productService.obterTags();
  }

  ngOnInit(): void {
    
  }
}
