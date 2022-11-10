import { Consumo } from './Usage';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Pago {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Consumo, (consumo) => consumo.pago)
  id_consumo: Consumo;

  @Column()
  fecha: Date;

  @Column()
  total: number;
}
