import { Produto } from "./Produto";

export class ItemCarrinho  {

    constructor (public produto:Produto){}

    quantidade:number = 1;
    preco:number = this.produto.preco;
}