import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProdutoPageComponent } from './components/pages/produto-page/produto-page.component';
import { CarrinhoPageComponent } from './components/pages/carrinho-page/carrinho-page.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'pesquisa/:termoPesquisado', component:HomeComponent},
    {path:'tag/:tag', component:HomeComponent},
    {path:'produto/:id', component:ProdutoPageComponent},
    {path:'carrinho-page', component:CarrinhoPageComponent}
];
