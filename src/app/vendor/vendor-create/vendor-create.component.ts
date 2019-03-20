import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Vendor} from '../vendor.class';
import {Vendor1} from '../vendor.service.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
  vendor: Vendor = new Vendor("324","213 address","city","ST",45244,"513-331-3131","eamil@gmaieij.com",true,true)
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
  }

}