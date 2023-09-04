import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'bases' })
export class Base {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'date' })
  created_at: Date;

  @Column({ type: 'date' })
  updated_at: Date;

  @Column({ type: 'date' })
  deleted_at: Date;
}
