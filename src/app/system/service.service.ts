import { Injectable } from '@angular/core';
import { User1 } from '../user/user1.class';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public loggedInUser: User1 | null = null;
  constructor() { }
}
