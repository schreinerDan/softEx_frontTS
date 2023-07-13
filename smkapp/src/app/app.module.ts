import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './views/home/product-card/product-card.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './views/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { StorageService } from './views/shared/storage.service';
import { ProductActionService} from './actions/product-action.service';
import { ProductItemCartComponent } from './views/shopping-cart/product-item-cart/product-item-cart.component';
import {ShoppingCartComponent} from './views/shopping-cart/shopping-cart.component';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductCardComponent,
    HeaderComponent,
    ProductItemCartComponent,
    ShoppingCartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule


  ],
  providers: [StorageService,ProductActionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
