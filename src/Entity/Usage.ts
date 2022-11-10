import { Cliente } from './Client';
import { Pago } from './Payment';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
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

  @ManyToOne(() => Pago, (pago) => pago.id_consumo)
  pago: Pago[];

  @OneToMany(() => Cliente, (cliente) => cliente.consumos)
  id_cliente: Cliente;
}
