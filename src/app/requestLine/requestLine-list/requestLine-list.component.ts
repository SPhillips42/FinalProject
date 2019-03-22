import { Component, OnInit } from '@angular/core';
import { RequestLineService } from '../requestLine-service.service';
import { RequestLineClass } from '../requestLine-class';
import {RequestService} from '../../request/request-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RequestClass} from '../../request/request-class';
import { ProductClass } from '../../product/product-class';
import {ProductService} from '../../product/product-service.service';

@Component({
  selector: 'app-requestLine-list',
  templateUrl: './requestLine-list.component.html',
  styleUrls: ['./requestLine-list.component.css']
})

export class RequestLineListComponent implements OnInit {
  requests: RequestLineClass[];
  request: RequestClass[];
  requessst: RequestClass;
  product: ProductClass;
  router: ActivatedRoute;
  productId: number;
  id: string;

  refresh(): void{
    this.requestsvc.get(this.id)
    .subscribe(
      resp => this.requessst = resp
    );
  }
  constructor(private requestsvc: RequestService, private requestLinesvc: RequestLineService,) {
   }

   ngOnInit() {
    this.requestsvc.list()
    .subscribe(resp => {console.log(resp);
    this.request = resp;
    });
  }

}
