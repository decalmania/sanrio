import { Component } from '@angular/core';
import { Produto } from '../../../shared/models/Produto';
import { ProdutoService } from '../../../services/produto.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PesquisaComponent } from "../../partials/pesquisa/pesquisa.component";
import { TagsComponent } from "../../partials/tags/tags.component";
import { NaoEncontradoComponent } from "../../partials/nao-encontrado/nao-encontrado.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, PesquisaComponent, TagsComponent, NaoEncontradoComponent]
})
export class HomeComponent{

  produtos:Produto[] = [];
  constructor(private produtoService:ProdutoService, rotaAtiva:ActivatedRoute) {
    rotaAtiva.params.subscribe((params) => {

      if(params['termoPesquisado']) 

      this.produtos = this.produtoService.obterProdutosPelaPesquisa(params['termoPesquisado']);

      else if(params['tag']) 

      this.produtos = this.produtoService.obterProdutosPelaTag(params['tag']);

      else

      this.produtos = produtoService.obterTodos();
      
    })
  }
}
