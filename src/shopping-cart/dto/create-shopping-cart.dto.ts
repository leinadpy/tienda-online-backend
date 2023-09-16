import { IsDate, IsString } from "class-validator"

export enum Status {
    OPEN = 'OPEN',
    CLOSED = 'CLOSED',
    CANCELED = 'CANCELED'
}
export class CreateShoppingCartDto {
    @IsString()
    status: Status

    @IsDate()
    startedAt: Date

    @IsString()
    customer_id: string
}
