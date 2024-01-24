import { Component, OnInit } from '@angular/core';
import { Carrinho } from '../../../shared/models/Carrinho';
import { CarrinhoService } from '../../../services/carrinho.service';

@Component({
  selector: 'app-carrinho-page',
  standalone: true,
  imports: [],
  templateUrl: './carrinho-page.component.html',
  styleUrl: './carrinho-page.component.css'
})
export class CarrinhoPageComponent implements OnInit{
  carrinho!: Carrinho;

  constructor(private carrinhoService: CarrinhoService) {
    this.carrinhoService.obterObservableDoCarrinho()
    .subscribe((carrinho) => {
      this.carrinho = carrinho
    })
  }

  ngOnInit(): void {
    
  }
}
