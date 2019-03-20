import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './user/login/login.component';
import {FormsModule} from '@angular/forms';
import { MenuComponent } from './system/menu/menu.component';
import { MenuItemComponent } from './system/menu-item/menu-item.component';
import { BooldispPipe } from './system/booldisp.pipe';
import { SearchPipe } from './system/search.pipe';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
  @NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    MenuComponent,
    MenuItemComponent,
    BooldispPipe,
    SearchPipe,
    VendorCreateComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorListComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
