import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//IMPORT MATERIAL
import { MatExpansionModule } from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';

//ROTEAMENTO
import { AppRoutingModule } from './app-routing.module';

//COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CarrinhoComponent } from './features/carrinho/carrinho.component';
import { HomebaseComponent } from './features/homebase/homebase.component';
import { InfosComponent } from './features/components/infos/infos.component';
import { VideoComponent } from './features/components/video/video.component';
import { AccordionComponent } from './features/components/accordion/accordion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProdutosComponent } from './features/produtos/produtos.component';
import { ComplementProdComponent } from './features/complement-prod/complement-prod.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CarrinhoComponent,
    HomebaseComponent,
    InfosComponent,
    VideoComponent,
    AccordionComponent,
    ProdutosComponent,
    ComplementProdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
