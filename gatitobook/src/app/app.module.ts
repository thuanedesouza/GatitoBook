import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { MensagemModule } from './componentes/mensagem/mensagem.module';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { RodapeModule } from './componentes/rodape/rodape.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //HomeModule // agora esse vai ser passado por rota, sobre demanda
    //isso influencia na performance(carregar por demanda: lazy loading)
    MensagemModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
