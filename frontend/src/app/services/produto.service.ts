import { Injectable } from '@angular/core';
import { Produto } from '../shared/models/Produto';
import { sample_products } from '../../data';
import { sample_tags } from '../../data';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  obterTodos():Produto[]{
    return sample_products;
  }

  obterProdutosPelaPesquisa(termoPesquisado: string) {
    return this.obterTodos().filter(produto => produto.nome.toLowerCase().includes(termoPesquisado.toLowerCase()))
  }

  obterTags(): Tag[] {
    return sample_tags
  }

  obterProdutosPelaTag(tag: string): Produto[] {
    return this.obterTodos().filter(produto => produto.tags?.includes(tag));
  }

  obterProdutoPeloId(produtoId: string): Produto {
    return this.obterTodos().find(produto => produto.id == produtoId) ?? new Produto();
  }

}
