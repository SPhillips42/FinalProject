import { ProductClass } from '../product/product-class';
import { RequestClass} from '../request/request-class'

export class RequestLineClass {
    id: number;
    requestId: number;
    request: RequestClass;
    productId: number;
    product: ProductClass;
    quanity: number;

    static Class: any;
    
    constructor(requestId: number = 0, productId: number = 0){
        this.id = 0;
        this.requestId = requestId;
        this.productId = productId;
        this.quanity = 1;
        
    }
}

