import { Component, OnInit } from '@angular/core';
import { RequestLineService } from '../requestLine-service.service';
import {RequestService} from '../../request/request-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-requestLine-list',
  templateUrl: './requestLine-list.component.html',
  styleUrls: ['./requestLine-list.component.css']
})
export class RequestLineListComponent implements OnInit {

  constructor(
    private requestsvc: RequestService, private requestlineservice: RequestLineService

  ) { }

  ngOnInit() {
  }

}
