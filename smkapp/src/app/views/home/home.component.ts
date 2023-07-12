import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public data: any;

  constructor(private productService: ProductsService) {}
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.productService.getAll().subscribe((response) => {
      this.data = response;
      console.log(this.data);
    });
  }
}
