import { Consumo } from './Usage';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Pago {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Consumo)
  @JoinColumn()
  id_consumo: Consumo;

  @Column()
  fecha: Date;

  @Column()
  total: number;
}
