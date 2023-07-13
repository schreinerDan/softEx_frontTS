import { Injectable } from '@angular/core';
import { StorageService } from '../views/shared/storage.service';
import { ProductModel } from '../models/product-model';
import { ShoppingCartModel } from '../models/shopping-cart-model';
import { ProductsService } from '../services/products.service';
import { ProductAddedCart } from '../models/product-added-cart';

@Injectable({
  providedIn: 'root'
})
export class ProductActionService {

  constructor(public storage:StorageService,public productService:ProductsService) {


   }
   getAllProducts(){
    this.productService.getAll().subscribe((response) => {
      this.storage.productsList = response ;

    });
   }


   addProductCart(product:ProductAddedCart):number{
    this.storage.shoppingCart.push(product);
    return this.storage.shoppingCart.indexOf(product);

   }
   removeProductCart(index:any):number{
    let productRemove=this.storage.shoppingCart[index];
    this.storage.shoppingCart = this.storage.shoppingCart.filter(obj => {return obj !== productRemove});
    return -1;
   }

   }





