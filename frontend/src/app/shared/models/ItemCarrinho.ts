import { Product } from "./Produto";

export class ItemCarrinho  {

    constructor (public produto:Product){}

    quantidade:number = 1;
    preco:number = this.produto.preco;
}