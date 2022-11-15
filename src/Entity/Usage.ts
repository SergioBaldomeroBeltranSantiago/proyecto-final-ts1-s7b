import { Cliente } from './Client';
import { Pago } from './Payment';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Consumo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: Date;

  @Column()
  consumo: number;

  @OneToOne(() => Pago)
  pago: Pago;

  @OneToMany(() => Cliente, (cliente: Cliente) => cliente.consumos)
  id_cliente: Cliente;
}
