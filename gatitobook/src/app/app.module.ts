import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    //HomeModule // agora esse vai ser passado por rota, sobre demanda
    //isso influencia na performance(carregar por demanda: lazy loading)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
