import { ConsumoService } from './../Consumo/consumo.service';
import { Consumo } from './../../Entity/Usage';
import { IPago } from './../../Model/Pago';
import { Pago } from './../../Entity/Payment';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PagoService {
  constructor(@InjectRepository(Pago) private pagoEntity: Repository<Pago>,
  private consumoService: ConsumoService) {}

  async crearPago(pago: IPago) {

    const consumos: Consumo = await this.consumoService.getByID(pago.id_consumo);

        if (consumos.id > 0) {

          let costos = 0 
          const date = new Date();

          if(consumos.consumo >= 1 && consumos.consumo <= 100){
            costos = consumos.consumo * 150;
          }
          else if(consumos.consumo > 100 && consumos.consumo <= 300){
            costos = consumos.consumo * 170;
          }
          else if(consumos.consumo > 300){
            costos = consumos.consumo * 190;
          }

          let edad:number = Number(consumos.fecha) - Number(date.getFullYear);

          if (edad > 50){
            costos = costos/1.10;
          }
          
            await this.pagoEntity.insert({
              fecha: pago.fecha,
              total: costos,
              id_consumo: pago.id_consumo
            });
        }
        else{
            return "El cliente no existe"
        }
  }
}
