import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
import { User1 } from '../user1.class';
import {ActivatedRoute, Router, Route} from '@angular/router';
import {ServiceService} from '../../system/service.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User1;

  delete(): void{
    this.usersvc.remove(this.user)
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

  constructor(private usersvc: UserService, private route: ActivatedRoute, private router: Router, private syssvc: ServiceService) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.usersvc.get(id)
    .subscribe(resp => {
      console.log(resp);
      this.user = resp;
    });
  }

}
