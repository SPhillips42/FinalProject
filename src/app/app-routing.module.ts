import { NgModule } from '@angular/core';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './user/login/login.component';
import {VendorListComponent} from './vendor/vendor-list/vendor-list.component';
import {VendorCreateComponent} from './vendor/vendor-create/vendor-create.component';
import {VendorEditComponent} from './vendor/vendor-edit/vendor-edit.component';
import {VendorDetailComponent} from './vendor/vendor-detail/vendor-detail.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {ProductDetailComponent} from './product/product-detail/product-detail.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'user/list', component: UserListComponent},
  {path: 'user/create', component: UserCreateComponent},
  {path: 'user/edit/:id', component: UserEditComponent},
  {path: 'user/detail/:id', component: UserDetailComponent},
  {path: 'vendor/list', component: VendorListComponent},
  {path: 'vendor/create', component: VendorCreateComponent},
  {path: 'vendor/edit/:id', component: VendorEditComponent},
  {path: 'vendor/detail/:id', component: VendorDetailComponent},
  {path: 'product/list', component: ProductListComponent},
  {path: 'product/create', component: ProductCreateComponent},
  {path: 'product/edit/:id', component: ProductEditComponent},
  {path: 'product/detail/:id', component: ProductDetailComponent},
 
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: HomeComponent},
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }