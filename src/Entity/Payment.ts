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
  @JoinColumn({name: 'id_consumo'})
  consumo: Consumo;

  @Column()
  fecha: Date;

  @Column()
  total: number;

  @Column({name: "id_consumo"})
  id_consumo: number;
}
