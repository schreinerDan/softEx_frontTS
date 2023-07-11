import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<any>(environment.api+ '/products/getAll/');
  }
}
