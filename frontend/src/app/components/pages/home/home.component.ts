import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/Product';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from "../../partials/search/search.component";
import { TagsComponent } from "../../partials/tags/tags.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, SearchComponent, TagsComponent]
})
export class HomeComponent implements OnInit{

  products:Product[] = [];
  constructor(private productService:ProductService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {

      if(params['searchTerm']) 

      this.products = this.productService.obterProdutosPelaPesquisa(params['searchTerm']);

      else if(params['tag']) 

      this.products = this.productService.obterProdutosPelaTag(params['tag']);

      else

      this.products = productService.obterTodos();
      
    })
  }

  ngOnInit(): void {
    
  }
}
