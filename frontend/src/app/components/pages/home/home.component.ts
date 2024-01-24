import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../shared/models/Produto';
import { ProdutoService } from '../../../services/produto.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PesquisaComponent } from "../../partials/pesquisa/pesquisa.component";
import { TagsComponent } from "../../partials/tags/tags.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, PesquisaComponent, TagsComponent]
})
export class HomeComponent implements OnInit{

  products:Produto[] = [];
  constructor(private produtoService:ProdutoService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {

      if(params['termoPesquisado']) 

      this.products = this.produtoService.obterProdutosPelaPesquisa(params['termoPesquisado']);

      else if(params['tag']) 

      this.products = this.produtoService.obterProdutosPelaTag(params['tag']);

      else

      this.products = produtoService.obterTodos();
      
    })
  }

  ngOnInit(): void {
    
  }
}
