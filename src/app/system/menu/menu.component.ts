import { Component, OnInit } from '@angular/core';
import {Menu} from '../menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Menu[] = [
    new Menu('Prs', '/home', 'Purchase Request System'),
    new Menu('Users', '/user/list', 'List of Users'),
    new Menu('Vendors', '/vendor/list', 'List of Vendors'),
    new Menu('Products', '/product/list', 'List of Products'),
    new Menu('Requests', '/requests/list', 'List of Requests'),
    new Menu('Review', '/review', 'Reviewers'),
    new Menu('About', '/about', 'About Page'),
    new Menu('Login', '/login', 'Signing in'),
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
