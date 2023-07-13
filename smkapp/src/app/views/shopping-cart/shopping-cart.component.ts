import { Component, OnInit } from '@angular/core';
import { ProductActionService } from 'src/app/actions/product-action.service';
import { StorageService } from '../shared/storage.service';



@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {


  constructor(public storage:StorageService,public productActionService:ProductActionService) { }

  ngOnInit(): void {


  }

}
