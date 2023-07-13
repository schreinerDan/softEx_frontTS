import { ProductModel } from 'src/app/models/product-model';
import { ShoppingCartModel } from './../../models/shopping-cart-model';
import { Injectable } from '@angular/core';
import { ProductAddedCart } from 'src/app/models/product-added-cart';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public productsList:ProductModel[]=[];
  public shoppingCart:ProductAddedCart[]=[];

}
