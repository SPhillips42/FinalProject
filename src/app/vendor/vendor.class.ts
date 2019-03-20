export class Vendor {
    id: number;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    phone: string;
    email: string;
    isPreapproved: boolean;
    active: boolean;
  static Class: any;
    
    constructor(code: string,
         address: string, city: string, state: string, zip: number, phone: string, email: string, isPreapproved: boolean, active: boolean){
        this.id = 0;
        this.code = code;
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
        this.isPreapproved = isPreapproved;
        this.active = active;
    }
}
