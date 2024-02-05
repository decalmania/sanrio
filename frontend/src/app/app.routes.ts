import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProdutoComponent } from './components/pages/produto/produto-page.component';
import { CarrinhoComponent } from './components/pages/carrinho/carrinho.component';
import { LoginComponent } from './components/pages/login/login.component';
import { FecharPedidoComponent } from './components/pages/fechar-pedido/fechar-pedido.component';
import { PedidoConcluidoComponent } from './components/pages/pedido-concluido/pedido-concluido.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'pesquisa/:termoPesquisado', component:HomeComponent},
    {path:'tag/:tag', component:HomeComponent},
    {path:'produto/:id', component:ProdutoComponent},
    {path:'carrinho-page', component:CarrinhoComponent},
    {path: 'login', component:LoginComponent},
    {path: 'fechar-pedido', component:FecharPedidoComponent},
    {path: 'pedido-concluido', component:PedidoConcluidoComponent}
];
