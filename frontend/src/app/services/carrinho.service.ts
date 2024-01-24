import { Injectable } from '@angular/core';
import { Carrinho } from '../shared/models/Carrinho';
import { BehaviorSubject } from 'rxjs';
import { Produto } from '../shared/models/Produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private carrinho:Carrinho = new Carrinho();
  private carrinhoSubject: BehaviorSubject<Carrinho> = new BehaviorSubject(this.carrinho)

  constructor() { }

  adicionarAoCarrinho(produto:Produto):void {
    let ItemCarrinho = this.carrinho.itens.find(item => item.produto.id == produto.id)
  }
}
