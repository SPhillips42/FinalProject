import { Component, OnInit } from '@angular/core';
import {RequestClass} from '../../request/request-class';
import {RequestService} from '../../request/request-service.service';
import {ProductClass} from '../../product/product-class';
import {ProductService} from '../../product/product-service.service';

@Component({
  selector: 'app-requestLine-create',
  templateUrl: './requestLine-create.component.html',
  styleUrls: ['./requestLine-create.component.css']
})
export class RequestLineCreateComponent implements OnInit {
  prId: string;
  requestLine: RequestService;
  products: ProductClass;
  
  constructor(private requestsvc: RequestService, ) {
  }

 ngOnInit() {
   this.requestsvc.list()
   .subscribe(resp => {console.log(resp);
   
   });
 }

}