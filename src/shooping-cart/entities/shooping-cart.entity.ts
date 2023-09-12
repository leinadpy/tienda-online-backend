import { Column, Entity } from 'typeorm';

import { Status } from '../dto/create-shooping-cart.dto';
import { BaseEntity } from '../../shared/base-entity';

@Entity({ name: 'shooping-cart' })
export class ShoopingCart extends BaseEntity {
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
