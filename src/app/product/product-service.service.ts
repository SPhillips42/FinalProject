import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductClass } from './product-class';

const url = "http://localhost:54371/api";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  list(): Observable<ProductClass[]>{
    return this.http.get(`${url}/products`) as Observable<any>;
  }
  get(id: string): Observable<ProductClass>{
    return this.http.get(`${url}/products/${id}`) as Observable<any>;
  }
  create(product: ProductClass): Observable<any>
  {return this.http.post(`${url}/products/`, product) as Observable<any>};
  change(product: ProductClass): Observable<any>
  {return this.http.put(`${url}/products/${product.id}`, product) as Observable<any>};
  remove(product: ProductClass): Observable<any>
  {return this.http.delete(`${url}/products/${product.id}`) as Observable<any>};
  
  constructor(private http: HttpClient) { }
}
