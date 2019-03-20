import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Vendor} from '../vendor.class'
import {Vendor1} from '../vendor.service.service'

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  vendor: Vendor;
  save(): void {
    this.vendorsvc.change(this.vendor)
    .subscribe(
      resp => {
        console.log("Vendor Update Successfull: ", resp);
        this.router.navigateByUrl("/vendor/list");
      },
      err => {
        console.log("Vendor Update Error", err);
      }
    );
  }

  constructor(
    private vendorsvc: Vendor1,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id
    this.vendorsvc.get(id)
    .subscribe(
      resp => {
         console.log(resp);
         this.vendor = resp;
      },
      err => {
        console.log(err)
      }
    );
  }

}