import { ProductModel} from '../models/product-model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http: HttpClient) {}

  getAll(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(environment.api+ '/products/getAll/');
  }
}
