import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import {Vendor1} from '../vendor.service.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  vendors: Vendor[];
  constructor(private vendorsvc: Vendor1) {
   }

  ngOnInit() {
    this.vendorsvc.list()
    .subscribe(resp => {console.log(resp);
    this.vendors = resp;
    
    });
  }

}
