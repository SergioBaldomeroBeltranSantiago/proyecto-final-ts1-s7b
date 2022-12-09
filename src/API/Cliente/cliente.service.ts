import { ICliente } from '../../Model/Cliente';
import { Cliente } from '../../Entity/Client';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {
  constructor(@InjectRepository(Cliente) private clienteEntity: Repository<Cliente>) { }

  async crearUsuario(cliente: ICliente) {
    try{
      if (Number(cliente.telefono) && cliente.telefono.length == 10)
      {
        return await this.clienteEntity.insert({
          nombre: cliente.nombre,
          correo: cliente.correo,
          telefono: cliente.telefono,
          domicilio: cliente.domicilio,
          fechaNacimiento: cliente.fechaNacimiento
        });
      }
      else{
        console.log("Numero telefonico mal escrito")
      }
      
    }
    catch{
      console.log("Error al ingresar cliente")
    }
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

  async clienteUnico(param: number) {
    const lista = await this.clienteEntity.find({
      where: {
        id: param
      }
    })
    return lista[0];
  }
}
