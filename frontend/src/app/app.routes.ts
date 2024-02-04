import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProdutoPageComponent } from './components/pages/produto-page/produto-page.component';
import { CarrinhoPageComponent } from './components/pages/carrinho-page/carrinho-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { FecharPedidoPageComponent } from './components/pages/fechar-pedido-page/fechar-pedido-page.component';
import { PedidoConcluidoComponent } from './components/pages/pedido-concluido/pedido-concluido.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'pesquisa/:termoPesquisado', component:HomeComponent},
    {path:'tag/:tag', component:HomeComponent},
    {path:'produto/:id', component:ProdutoPageComponent},
    {path:'carrinho-page', component:CarrinhoPageComponent},
    {path: 'login', component:LoginPageComponent},
    {path: 'fechar-pedido', component:FecharPedidoPageComponent},
    {path: 'pedido-concluido', component:PedidoConcluidoComponent}
];
