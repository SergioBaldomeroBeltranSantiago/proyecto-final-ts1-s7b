import { Consumo } from './Usage';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

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

  @Column()
  fechaNacimiento: Date;

  @OneToMany(() => Consumo, (consumo: Consumo) => consumo.id_cliente)
  consumos: Consumo[];
}
