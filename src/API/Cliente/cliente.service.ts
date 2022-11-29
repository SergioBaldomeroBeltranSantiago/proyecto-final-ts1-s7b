import { ICliente } from '../../Model/Cliente';
import { Cliente } from '../../Entity/Client';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {
  constructor(@InjectRepository(Cliente) private clienteEntity: Repository<Cliente>) { }

  async crearUsuario(cliente: ICliente) {
    return await this.clienteEntity.insert({
      nombre: cliente.nombre,
      correo: cliente.correo,
      telefono: cliente.telefono,
      domicilio: cliente.domicilio,
      fechaNacimiento: cliente.fechaNacimiento
    });
  }

  async getByID(id: number) {
    return await this.clienteEntity.find({
      where: {
        id: id
      }
    })
  }

  async getAll() {
    return await this.clienteEntity.find();
  }
}
