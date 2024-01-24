import {Product} from './app/shared/models/Product';
import { Tag } from './app/shared/models/Tag';

export const sample_products: Product[] = [
    {
        id: '1',
        nome: 'Bolsa Gudetama',
        preco: 90.00,
        tags: ['Sanrio', 'Bolsas'],
        favorito: false,
        urlImagem: 'assets/gudetama.jpg'
    },

    {
        id: '2',
        nome: 'Bolsa térmica Cinnamoroll',
        preco: 95.00,
        tags: ['Sanrio', 'Bolsas'],
        favorito: true,
        urlImagem: 'assets/cinnamoroll.jpg'
    },

    {
        id: '3',
        nome: 'Caneca Keroppi',
        preco: 30.00,
        tags: ['Sanrio', 'Cerâmicas'],
        favorito: false,
        urlImagem: 'assets/keroppi.jpg'
    },

    {
        id: '4',
        nome: 'Pelúcia Pochacco',
        preco: 35.00,
        tags: ['Sanrio', 'Pelúcias'],
        favorito: true,
        urlImagem: 'assets/pochacco.jpg'
    },

    {
        id: '5',
        nome: 'Cerâmica Pompompurin',
        preco: 50.00,
        tags: ['Sanrio', 'Cerâmicas'],
        favorito: false,
        urlImagem: 'assets/pompompurin.jpg'
    },

    {
        id: '6',
        nome: 'Pulseira Badtz-maru',
        preco: 25.00,
        tags: ['Sanrio', 'Pulseiras'],
        favorito: false,
        urlImagem: 'assets/badtz-maru.jpg'
    },
]

export const sample_tags: Tag[] = [
    { nome: 'Sanrio', quantidade: 6 },
    { nome: 'Bolsas', quantidade: 2 },
    { nome: 'Cerâmicas', quantidade: 2 },
    { nome: 'Pulseiras', quantidade: 1 },
]