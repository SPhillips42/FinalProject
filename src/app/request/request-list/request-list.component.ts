import { Component, OnInit } from '@angular/core';
import {RequestClass} from '../request-class';
import {RequestService} from '../request-service.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  requests: RequestClass[];
  constructor(private requestsvc: RequestService,) {
   }

  ngOnInit() {
    this.requestsvc.list()
    .subscribe(resp => {console.log(resp);
    this.requests = resp;
    });
  }

}
