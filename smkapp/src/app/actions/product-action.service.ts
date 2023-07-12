import { Injectable } from '@angular/core';
import { StorageService } from '../views/shared/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductActionService {

  constructor(private storage:StorageService) {


   }
   addProductCart(product:any):void{
     this.storage.cartList.push(product);
   }

}
