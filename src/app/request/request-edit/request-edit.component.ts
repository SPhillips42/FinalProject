import { Component, OnInit } from '@angular/core';
import{RequestClass} from '../request-class';
import{RequestService} from '../request-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  requests: RequestClass[];
  request: RequestClass;
  
  save(): void {
    this.requestsvc.change(this.request)
    .subscribe(
      resp => {
        console.log("Product Update Successfull: ", resp);
        this.router.navigateByUrl("/request/list");
      },
      err => {
        console.log("Product Update Error", err);
      }
    );
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requestsvc: RequestService,
  ) { }

  ngOnInit() {
    this.requestsvc.list()
    .subscribe(resp => {
      console.log("Requests: ", resp);
      this.requests = resp;
    });
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(id)
    .subscribe(resp => {
      console.log(resp);
      this.request = resp;
   },
   err => {
     console.log(err)
   }
 );
  }

}
