export interface PaymentProvider { createPayment(input:{amount:number;concept:string}):Promise<{reference:string;status:string}>; verifyPayment(reference:string):Promise<{status:string}> }
export class ManualPaymentProvider implements PaymentProvider { async createPayment(){return {reference:`MAN-${Date.now()}`,status:'pending'}} async verifyPayment(){return {status:'pending'}} }
export class MockPaymentProvider implements PaymentProvider { async createPayment(){return {reference:`MOCK-${Date.now()}`,status:'paid'}} async verifyPayment(){return {status:'paid'}} }
