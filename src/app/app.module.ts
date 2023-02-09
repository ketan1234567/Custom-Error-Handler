import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GlobalErrorHandlerService } from './global-error-handler.service';
import { GlobalErrorHandlerComponent } from './global-error-handler/global-error-handler.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from './book/book.component';

@NgModule({
  imports: [     
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CountryComponent,
    PageNotFoundComponent,
    BookComponent
  ],
  providers: [
    GlobalErrorHandlerService,
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { } 