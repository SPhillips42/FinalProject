import { Component, OnInit } from '@angular/core';
import{RequestClass} from '../request-class';
import{RequestService} from '../request-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  request: RequestClass = new RequestClass(0, "", "", 0, "", null, "", true);
  requestArr: RequestClass[];

save():void{
  this.requestsvc.create(this.request).subscribe(
    resp=> {
      console.log(resp)
      this.router.navigateByUrl("/requests/list");
    },
    err => {
      console.error(err)
    }
  );
}

  constructor(
    private requestsvc: RequestService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.requestsvc.list()
    .subscribe(resp=>{
      this.requestArr = resp;
    })
  }

}
