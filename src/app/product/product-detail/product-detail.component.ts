import { Component, OnInit } from '@angular/core';
import { ProductClass } from '../product-class';
import {ProductService} from '../product-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: ProductClass;

  delete(): void{
    this.productsvc.remove(this.product)
    .subscribe(
      resp=> {
        console.log("User Delete Successful!", resp);
        this.router.navigateByUrl("/user/list");
      },
      err => {
        console.error("User Detele failred", err);
      }
    );
    }
    setVerify(): void{
      
    }

  constructor(
    private productsvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.productsvc.get(id)
    .subscribe(resp => {
      console.log(resp);
      this.product = resp;
    });
  }

}
