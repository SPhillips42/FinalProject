import { Component, OnInit } from '@angular/core';
import { RequestClass } from '../request-class';
import {RequestService} from '../request-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  request: RequestClass;

  delete(): void{
    this.requestsvc.remove(this.request)
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
    private requestsvc: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(id)
    .subscribe(resp => {
      console.log(resp);
      this.request = resp;
    });
  }

}
