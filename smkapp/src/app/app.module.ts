import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { SellComponentComponent } from './views/sells/sell-component/sell-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './views/home/product-card/product-card.component';


@NgModule({
  declarations: [
    AppComponent,
    SellComponentComponent,
    HomeComponent,
    ProductCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
