export class ProductClass {
    id: number;
    vendorId: number;
    partNumbe: string;
    name: string;
    price: number;
    unit: string;
    photopath: string;
    active: boolean;
    static Class: any;
    
    constructor(vendorId: number, partNumbe: string, name: string, price: number, unit: string, photopath:string, active: boolean){
        this.id = 0;
        this.vendorId = vendorId;
        this.partNumbe = partNumbe;
        this.name = name;
        this.price = price;
        this.unit = unit;
        this.photopath = photopath;
        this.active = active;
    }
}