import { Component, Input, OnInit } from '@angular/core';
import { ProductActionService} from '../../../actions/product-action.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() productItem: any;
  constructor(public productActionService:ProductActionService) { }


  ngOnInit(): void {
  }
  click(p_:any):void{
    this.productActionService.addProductCart(p_);
  }
}
