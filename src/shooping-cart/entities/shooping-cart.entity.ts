import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UpdateShoopingCartDto } from '../dto/update-shooping-cart.dto';
import { CreateShoopingCartDto, Status } from '../dto/create-shooping-cart.dto';

@Entity({ name: 'shooping-cart' })
export class ShoopingCart extends UpdateShoopingCartDto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: ['OPEN', 'CLOSED', 'CANCELED'],
    default: 'OPEN',
  }) //Utilize un enum como decia el grafico con valores provisorios
  status: Status;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) //No se si es lo correcto
  startedAt: Date;

  // TODO: relaciones
}
