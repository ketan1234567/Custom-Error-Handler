import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { GlobalErrorHandlerComponent } from './global-error-handler/global-error-handler.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookComponent } from './book/book.component';
import { ArtcilesComponent } from './artciles/artciles.component';
import { BankComponent } from './bank/bank.component';
import { CollageComponent } from './collage/collage.component';

const routes: Routes = [
  {
    path:"country",
    component:CountryComponent
  },
  {
    path:"books",
    component:BookComponent
  },
  {
    path:"articles",
    component:ArtcilesComponent
  },
  {
    path:"error",
    component:GlobalErrorHandlerComponent
  },
  {
    path:"bank",
    component:BankComponent
  },
  {
    path:"collage",
    component:CollageComponent
  },
  {
    path: '',
    redirectTo: '/country',
    pathMatch: 'full'
 },
 
 {
  path: '**',
  component: PageNotFoundComponent 
     }	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
