import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductActionService } from 'src/app/actions/product-action.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public data: any;

  constructor(public productActionService:ProductActionService) {}
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.productActionService.getAllProducts();
      }
}
