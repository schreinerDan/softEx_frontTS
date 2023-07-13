import { Component, Input, OnInit } from '@angular/core';
import { ProductActionService } from 'src/app/actions/product-action.service';

@Component({
  selector: 'app-product-item-cart',
  templateUrl: './product-item-cart.component.html',
  styleUrls: ['./product-item-cart.component.scss']
})
export class ProductItemCartComponent implements OnInit {
  @Input() productItemCart: any;
  constructor(public productActionService:ProductActionService) { }


  ngOnInit(): void {
  }

}
