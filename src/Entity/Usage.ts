import { Cliente } from './Client';
import { Pago } from './Payment';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Consumo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: Date;

  @Column()
  consumo: number;

  @Column({name: "id_cliente"})
  id_cliente: number;

  @OneToOne(() => Pago)
  pago: Pago;

  @ManyToOne(() => Cliente)
  @JoinColumn({name: 'id_cliente'})
  cliente: Cliente;
}
