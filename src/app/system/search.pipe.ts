import { Pipe, PipeTransform } from '@angular/core';
import {User1} from '../user/user1.class'

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: User1[], criteria: string): any[] {
    if(criteria == "")
      return users;
    let arrOut: User1[] = [];
    for(let user of users){
      if(user.username.toLowerCase().includes(criteria.toLowerCase())){
        arrOut.push(user);
        continue;
      }
      if(user.firstname.toLowerCase().includes(criteria.toLowerCase())){
        arrOut.push(user);
        continue;
      }
      if(user.lastname.toLowerCase().includes(criteria.toLowerCase())){
        arrOut.push(user);
        continue;
      }
      if(user.phone.toLowerCase().includes(criteria.toLowerCase())){
        arrOut.push(user);
        continue;
      }
      if(user.email.toLowerCase().includes(criteria.toLowerCase())){
        arrOut.push(user);
        continue;
      }
    }
    return arrOut;
  }

}
