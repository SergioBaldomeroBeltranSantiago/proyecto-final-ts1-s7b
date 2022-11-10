import { Consumo } from './Usage';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  correo: string;

  @Column()
  telefono: string;

  @Column()
  domicilio: string;

  @OneToMany(() => Consumo, (consumo) => consumo.id_cliente)
  consumos: Consumo[];
}
