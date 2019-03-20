import { Component, OnInit } from '@angular/core';
import {Vendor} from '../vendor.class'
import { Vendor1 } from '../vendor.service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
  vendor: Vendor;

  delete(): void{
    this.vendorsvc.remove(this.vendor)
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

  constructor(private vendorsvc: Vendor1, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.vendorsvc.get(id)
    .subscribe(resp => {
      console.log(resp);
      this.vendor = resp;
    });
  }

}

