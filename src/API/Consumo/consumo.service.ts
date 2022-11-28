import { Injectable } from '@nestjs/common';
import { Consumo } from 'src/Entity/Usage';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IConsumo } from 'src/Model/Consumo';
import { Cliente } from 'src/Entity/Client';

@Injectable()
export class ConsumoService {
    constructor(@InjectRepository(Consumo) private consumoEntity: Repository<Consumo>) { }

    async crearConsumo(consumo: IConsumo, cliente: Cliente) {
        await this.consumoEntity.insert({
            fecha: consumo.fecha,
            consumo: consumo.consumo,
            id_cliente: cliente,
        });
    }
}
