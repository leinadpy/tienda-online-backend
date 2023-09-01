import {Column,Entity,PrimaryGeneratedColumn} from "typeorm"

@Entity({name:"shooping-cart"})
export class ShoopingCart {
    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column({type:"enum",enum:["OPEN","CLOSED","CANCELED"],default:"OPEN"}) //Utilize un enum como decia el grafico con valores provisorios
    status: string

    @Column({type:"timestamp",default: () => "CURRENT_TIMESTAMP"}) //No se si es lo correcto
    startedAt: Date

    @Column({type:"uuid"})
    customer_id: string 

    // TODO: relaciones
}
