import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CarrinhoComponent } from './features/carrinho/carrinho.component';
import { HomebaseComponent } from './features/homebase/homebase.component';
import { ProdutosComponent } from './features/produtos/produtos.component';
import { ComplementProdComponent } from './features/complement-prod/complement-prod.component';

const routes: Routes = [
    {path: '', component: HomebaseComponent},
    {path: 'home', component: HomeComponent},
    {path: 'produtos', component: ProdutosComponent},
    {path: 'complementos', component: ComplementProdComponent},
    {path: 'cart', component: CarrinhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot (routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
