import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';
import { sample_products } from '../../data';
import { sample_tags } from '../../data';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  obterTodos():Product[]{
    return sample_products;
  }

  obterProdutosPelaPesquisa(searchTerm: string) {
    return this.obterTodos().filter(produto => produto.nome.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  obterTags(): Tag[] {
    return sample_tags
  }

  obterProdutosPelaTag(tag: string): Product[] {
    return this.obterTodos().filter(produto => produto.tags?.includes(tag));
  }

  obterProdutoPeloId(produtoId: string): Product {
    return this.obterTodos().find(produto => produto.id == produtoId) ?? new Product();
  }

}
