import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/partials/header/header.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { MessageBoxComponent } from './components/partials/message-box/message-box.component';
import { ProdutoPageComponent } from './components/pages/produto-page/produto-page.component';
import { CarrinhoPageComponent } from './components/pages/carrinho-page/carrinho-page.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
        MessageBoxComponent
    ]
})
export class AppComponent {
  title = 'frontend';
}
