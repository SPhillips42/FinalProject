import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RequestLineClass} from './requestLine-class';

const url = "http://localhost:54371/api";

@Injectable({
  providedIn: 'root'
})
export class RequestLineService {
  list(): Observable<RequestLineClass[]>{
    return this.http.get(`${url}/requests`) as Observable<any>;
  }
  get(id: string): Observable<RequestLineClass>{
    return this.http.get(`${url}/requests/${id}`) as Observable<any>;
  }
  create(requestLine: RequestLineClass): Observable<any>
  {return this.http.post(`${url}/requests/`, requestLine) as Observable<any>};
  change(requestLine: RequestLineClass): Observable<any>
  {return this.http.put(`${url}/requests/${requestLine.id}`, requestLine) as Observable<any>};
  remove(requestLine: RequestLineClass): Observable<any>
  {return this.http.delete(`${url}/requests/${requestLine.id}`) as Observable<any>};
  
  constructor(private http: HttpClient) { }
}