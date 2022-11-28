import { IConsumo } from './../../Model/Consumo';
import { IPago } from './../../Model/Pago';
import { Pago } from './../../Entity/Payment';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PagoService {
  constructor(@InjectRepository(Pago) private pagoEntity: Repository<Pago>) {}
  async crearPago(pago: IPago, idConsumo: number) {
    await this.pagoEntity.insert({
      id_consumo: idConsumo,
      fecha: pago.fecha,
      total: pago.total,
    });
  }
  async crearPago(pago: IPago, consumo: IConsumo) {
    await this.pagoEntity.insert({
      id_consumo: consumo.id,
      fecha: pago.fecha,
      total: pago.total,
    });
  }

  async obtenerPago(idConsumo: number): IPago {
    return this.IPago.find((pago) => pago.id_consumo === idConsumo);
  }
}
