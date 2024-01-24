export class Product {
    id!: string;
    nome!: string;
    preco!: number;
    tags?: string[];
    favorito!: boolean;
    urlImagem!: string;
}