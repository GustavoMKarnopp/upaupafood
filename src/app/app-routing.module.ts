import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CarrinhoComponent } from './features/carrinho/carrinho.component';
import { HomebaseComponent } from './features/homebase/homebase.component';
import { ProdutosComponent } from './features/produtos/produtos.component';
import { ComplementProdComponent } from './features/complement-prod/complement-prod.component';
import { ConfirmationComponent } from './features/confirmation/confirmation.component';

//SUB ROUTER
import { EntregaComponent } from './features/components/confirmation/entrega/entrega.component';
import { RetiradaComponent } from './features/components/confirmation/retirada/retirada.component';
import { ConsumirLocalComponent } from './features/components/confirmation/consumir-local/consumir-local.component';

const routes: Routes = [
    {path: '', component: HomebaseComponent},
    {path: 'home', component: HomeComponent},
    {path: 'produtos', component: ProdutosComponent},
    {path: 'complementos', component: ComplementProdComponent},
    {path: 'cart', component: CarrinhoComponent},
    {
      path: 'confirmation',
      component: ConfirmationComponent,
      children: [
        {
          path: 'entrega',
          component: EntregaComponent
        },
        {
          path: 'retirada',
          component: RetiradaComponent
        },
        {
          path: 'consumir-local',
          component: ConsumirLocalComponent
        },

      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot (routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
