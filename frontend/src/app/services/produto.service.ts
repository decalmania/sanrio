import { Injectable } from '@angular/core';
import { Produto } from '../shared/models/Produto';
import { produtos, tags } from '../../data';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  obterTodos():Produto[]{
    return produtos;
  }

  obterProdutosPelaPesquisa(termoPesquisado: string) {
    return this.obterTodos().filter(produto => produto.nome.toLowerCase().includes(termoPesquisado.toLowerCase()))
  }

  obterTags(): Tag[] {
    return tags
  }

  obterProdutosPelaTag(tag: string): Produto[] {
    return this.obterTodos().filter(produto => produto.tags?.includes(tag));
  }

  obterProdutoPeloId(produtoId: string): Produto {
    return this.obterTodos().find(produto => produto.id == produtoId) ?? new Produto();
  }

}
