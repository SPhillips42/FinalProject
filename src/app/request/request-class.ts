export class RequestClass {
    id: number;
    userId: number;
    description: string;
    justification:string;
    rejectionReason:string;
    deliveryMode:string;
    submittedDate: Date;
    status:string;
    total:number;
    active: boolean;

    static Class: any;
    
    constructor(userId: number, description: string, justification: string, total: number, rejectionReason: string, submittedDate: Date, deliveryMode:string, active: boolean){
        this.id = 0;
        this.userId = userId;
        this.description = description;
        this.justification = justification;
        this.rejectionReason = rejectionReason;
        this.deliveryMode = deliveryMode;
        this.submittedDate = submittedDate;
        this.status = status;
        this.total = total;
        this.active = active;
    }
}
