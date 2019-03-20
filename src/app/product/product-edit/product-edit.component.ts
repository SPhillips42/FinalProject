import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product-service.service';
import {ProductClass} from '../product-class';
import{Vendor} from '../../vendor/vendor.class';
import{Vendor1} from '../../vendor/vendor.service.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: ProductClass;
  vendors: Vendor[];
  save(): void {
    this.productsvc.change(this.product)
    .subscribe(
      resp => {
        console.log("Product Update Successfull: ", resp);
        this.router.navigateByUrl("/product/list");
      },
      err => {
        console.log("Product Update Error", err);
      }
    );
  }

  constructor(
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private vendorsvc: Vendor1,
  ) { }

  ngOnInit() {
    this.vendorsvc.list()
    .subscribe(resp => {
      console.log("Vendors: ", resp);
      this.vendors = resp;
    });
    let id = this.route.snapshot.params.id;
    this.productsvc.get(id)
    .subscribe(resp => {
      console.log(resp);
      this.product = resp;
   },
   err => {
     console.log(err)
   }
 );
}

}