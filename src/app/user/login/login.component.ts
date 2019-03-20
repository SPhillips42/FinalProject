import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User1} from '../user1.class';
import {Router} from '@angular/router';
import {Subscriber} from 'rxjs';
import {ServiceService} from '../../system/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User1;
  username: string = '';
  password: string = '';
  message: string = 'Ready to Login.'

login(): void{
  this.usersvc.login(this.username, this.password)
  .subscribe(
    resp => {
     console.log("Login Worked!",resp);
     this.syssvc.loggedInUser = resp;
     this.router.navigateByUrl("/home")
    },
    err => {
      console.error("Login Failed",err);
      this.message = "Login Failed"
    }
  );
}
  constructor(
    private usersvc: UserService,
    private router: Router,
    private syssvc: ServiceService
  ) { }

  ngOnInit() {
    this.syssvc.loggedInUser= null;
  }

}
