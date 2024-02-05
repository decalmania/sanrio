import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/partials/header/header.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { MessageBoxComponent } from './components/partials/message-box/message-box.component';
import { ProdutoComponent } from './components/pages/produto/produto-page.component';
import { CarrinhoComponent } from './components/pages/carrinho/carrinho.component';
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
        ProdutoComponent,
        CarrinhoComponent,
        ReactiveFormsModule,
        MessageBoxComponent
    ]
})
export class AppComponent {
  title = 'frontend';
}
