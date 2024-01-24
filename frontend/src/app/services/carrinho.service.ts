import { Injectable } from '@angular/core';
import { Carrinho } from '../shared/models/Carrinho';
import { BehaviorSubject, Observable } from 'rxjs';
import { Produto } from '../shared/models/Produto';
import { ItemCarrinho } from '../shared/models/ItemCarrinho';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private carrinho:Carrinho = this.carrinhoDoArmazenamentoLocal();
  private carrinhoSubject: BehaviorSubject<Carrinho> = new BehaviorSubject(this.carrinho)

  constructor() { }

  adicionarAoCarrinho(produto: Produto): void {
    let itemCarrinho = this.carrinho.itens
    .find(item => item.produto.id == produto.id);

    if (itemCarrinho)
    return;

    this.carrinho.itens.push(new ItemCarrinho(produto));
    this.carrinhoNoArmazenamentoLocal();
  }

  removerDoCarrinho(produtoId: string): void {
    this.carrinho.itens = this.carrinho.itens
    .filter(item => item.produto.id != produtoId);
    this.carrinhoNoArmazenamentoLocal();
  }

  mudarQuantidade(produtoId: string, quantidade:number) {
    let itemCarrinho = this.carrinho.itens
    .find(item => item.produto.id === produtoId);

    if (!itemCarrinho)
    return;

    itemCarrinho.quantidade = quantidade;
    itemCarrinho.preco = quantidade * itemCarrinho.produto.preco;
    this.carrinhoNoArmazenamentoLocal();
  }

  limparCarrinho() {
    this.carrinho = new Carrinho();
    this.carrinhoNoArmazenamentoLocal();
  }

  obterObservableDoCarrinho():Observable<Carrinho> {
    return this.carrinhoSubject.asObservable();
  }

  private carrinhoNoArmazenamentoLocal(): void {

    this.carrinho.totalPreco = this.carrinho.itens
    .reduce((somaAnterior, item) => somaAnterior + item.preco, 0);

    this.carrinho.totalQuantidade = this.carrinho.itens
    .reduce((somaAnterior, item) => somaAnterior + item.quantidade, 0)

    const carrinhoJson = JSON.stringify(this.carrinho);
    localStorage.setItem('Carrinho', carrinhoJson);

    this.carrinhoSubject.next(this.carrinho);

  }

  private carrinhoDoArmazenamentoLocal(): Carrinho {
    const carrinhoJson = localStorage.getItem('Carrinho');
    return carrinhoJson? JSON.parse(carrinhoJson): new Carrinho();
  }

}
