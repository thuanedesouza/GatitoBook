import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path:'home',
    loadChildren:()=>import('./home/home.module')//retorna uma promise
    .then((m)=>m.HomeModule),// as rotas que estão dentro do modulo home ficam encapsuladas na pasta do home

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
