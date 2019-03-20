import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User1 } from './user1.class';

const url = "http://localhost:54371/api";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  login(username: string, password: string): Observable<User1>{
    return this.http.get(`${url}/Users/Auth/{username}/{password}`) as Observable<User1>;
  }

  list(): Observable<User1[]>{
    return this.http.get(`${url}/users`) as Observable<any>;
  }
  get(id: string): Observable<User1>{
    return this.http.get(`${url}/users/${id}`) as Observable<any>;
  }
  create(user: User1): Observable<any>
  {return this.http.post(`${url}/users`, user) as Observable<any>};
  change(user: User1): Observable<any>
  {return this.http.put(`${url}/users/${user.id}`, user) as Observable<any>};
  remove(user: User1): Observable<any>
  {return this.http.delete(`${url}/users/${user.id}`) as Observable<any>};
  
  constructor(private http: HttpClient) { }
}
