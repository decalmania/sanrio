import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/partials/header/header.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { ProdutoPageComponent } from './components/pages/produto-page/produto-page.component';
import { CarrinhoPageComponent } from './components/pages/carrinho-page/carrinho-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      CommonModule, 
      RouterOutlet, 
      HeaderComponent, 
      HomeComponent, 
      ProdutoPageComponent,
      CarrinhoPageComponent,
      ReactiveFormsModule,
    ]
})
export class AppComponent {
  title = 'frontend';
}
