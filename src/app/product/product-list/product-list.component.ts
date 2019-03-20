import { Component, OnInit } from '@angular/core';
import { ProductClass } from '../product-class';
import {ProductService} from '../product-service.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: ProductClass[];
  constructor(private productsvc: ProductService) {
   }

  ngOnInit() {
    this.productsvc.list()
    .subscribe(resp => {console.log(resp);
    this.products = resp;
    
    });
  }

}
