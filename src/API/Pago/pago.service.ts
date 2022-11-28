import { Consumo } from './../../Entity/Usage';
import { IPago } from './../../Model/Pago';
import { Pago } from './../../Entity/Payment';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PagoService {
  constructor(@InjectRepository(Pago) private pagoEntity: Repository<Pago>) {}

  async crearPago(pago: IPago, consumo: Consumo) {
    await this.pagoEntity.insert({
      fecha: pago.fecha,
      total: pago.total,
      id_consumo: consumo,
    });
  }
}
