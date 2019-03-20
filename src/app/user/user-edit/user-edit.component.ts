import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User1} from '../user1.class';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User1;

  save(): void {
    this.usersvc.change(this.user)
    .subscribe(
      resp => {
        console.log("User Update Successfull: ", resp);
        this.router.navigateByUrl("/user/list");
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

  ngOnInit() {
    let id = this.route.snapshot.params.id
    this.usersvc.get(id)
    .subscribe(
      resp => {
         console.log(resp);
         this.user = resp;
      },
      err => {
        console.log(err)
      }
    );
  }

}
