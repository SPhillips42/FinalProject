import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User1} from '../user1.class';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceService} from '../../system/service.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  
 user: User1 = new User1("seth", "seth", "seth","phillips","snahue@gmail.com", "513-335-3053",true,true,true)
 
  save(): void{
    this.usersvc.create(this.user)
    .subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl('/user/list')
    },
    err => {
      console.log("User Update Error", err);
    }
  );
}
  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  ngOnInit(){
  }
}

