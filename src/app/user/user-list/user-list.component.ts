import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../system/service.service';
import {UserService} from '../user.service';
import {User1} from '../user1.class';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User1[];
  searchCriteria: string = ""
  constructor(private usersvc: UserService, private syssvc: ServiceService) {
   }

  ngOnInit() {
    this.usersvc.list()
    .subscribe(resp => {console.log(resp);
    this.users = resp;
    
    });
  }

}
