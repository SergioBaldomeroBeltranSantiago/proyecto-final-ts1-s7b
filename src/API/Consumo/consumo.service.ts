import { ClienteService } from './../Cliente/cliente.service';
import { Injectable } from '@nestjs/common';
import { Consumo } from 'src/Entity/Usage';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IConsumo } from 'src/Model/Consumo';
import { Cliente } from 'src/Entity/Client';

@Injectable()
export class ConsumoService {
    constructor(@InjectRepository(Consumo) private consumoEntity: Repository<Consumo>,
        private clienteService: ClienteService) { }

    async crearConsumo(consumo: IConsumo) {

        const usuario: Cliente = await this.clienteService.getByID(consumo.id_cliente);

        if (usuario.id > 0) {

            await this.consumoEntity.insert({
                fecha: consumo.fecha,
                consumo: consumo.consumo,
                id_cliente: usuario.id
            });
        }
        else {
            return "El cliente no existe"
        }

    }

    async getByID(id: number) {
        return await this.consumoEntity.find({
            where: {
                id: id
            }
        })
    }

    async getAll() {
        return await this.consumoEntity.find();
    }

    async getBordes() {
        let borde:string = "";

        borde = await this.consumoEntity.find({
            order: {
                consumo: "ASC"
            }
        })

        borde = borde + await this.consumoEntity.find({
            order: {
                consumo: "DESC"
            }
        })

        return borde;
    }
}
