import { Component, OnInit } from '@angular/core';
import{ Vendor} from '../../vendor/vendor.class';
import{Vendor1} from '../../vendor/vendor.service.service';
import{ProductClass} from '../product-class';
import{ProductService} from '../product-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: ProductClass = new ProductClass(0,"","",0,"","",true);
  vendors: Vendor[];

save():void{
  this.productsvc.create(this.product).subscribe(
    resp=> {
      console.log(resp)
      this.router.navigateByUrl("/product/list");
    },
    err => {
      console.error(err)
    }
  );
}

  constructor(
    private productsvc: ProductService,
    private vendorsvc: Vendor1,
    private router: Router,
  ) { }

  ngOnInit() {
    this.vendorsvc.list()
    .subscribe(resp=>{
      this.vendors = resp;
    })
  }

}
