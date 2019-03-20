export class User1 {
    id: number;
    name: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    isReviewer: boolean;
    isAdmin: boolean;
    active: boolean;
  static Class: any;
    
    constructor(username:string, password: string, firstname: string, lastname: string,
         email: string, phone: string, isReviewer: boolean, isAdmin: boolean, active: boolean){
        this.id = 0;
        this.name = name;
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.isReviewer = isReviewer;
        this.isAdmin = isAdmin;
        this.active = active;
    }
}
