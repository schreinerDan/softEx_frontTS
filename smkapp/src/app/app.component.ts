import { ProductsService } from './services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'smkapp';
  public data: any;

  constructor(private productService: ProductsService) {}
  ngOnInit(): void {
    // this.getData();
  }


}
