import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public cartList:any[];
  constructor() {
    this.cartList = [];
  }
}
