import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { PersonComponent } from './person/person.component';
import { GlobalErrorHandlerComponent } from './global-error-handler/global-error-handler.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:"country",
    component:CountryComponent
  },
  {
    path:"person",
    component:PersonComponent
  },
  {
    path:"error",
    component:GlobalErrorHandlerComponent
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
