export enum Status {
    OPEN = 'OPEN',
    CLOSED = 'CLOSED',
    CANCELED = 'CANCELED'
}
export class CreateShoopingCartDto {
    id:string
    status: Status
    startedAt: Date
    customer_id: string
}
