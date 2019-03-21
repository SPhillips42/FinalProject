import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RequestClass} from './request-class';

const url = "http://localhost:54371/api";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  list(): Observable<RequestClass[]>{
    return this.http.get(`${url}/requests`) as Observable<any>;
  }
  get(id: string): Observable<RequestClass>{
    return this.http.get(`${url}/requests/${id}`) as Observable<any>;
  }
  create(userid: string, request: RequestClass): Observable<any>
  {return this.http.post(`${url}/requests/${userid}`, request) as Observable<any>};
  change(request: RequestClass): Observable<any>
  {return this.http.put(`${url}/requests/${request.id}`, request) as Observable<any>};
  remove(request: RequestClass): Observable<any>
  {return this.http.delete(`${url}/requests/${request.id}`) as Observable<any>};
  
  constructor(private http: HttpClient) { }
}
