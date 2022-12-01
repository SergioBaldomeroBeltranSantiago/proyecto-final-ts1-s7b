import { ClienteService } from './../Cliente/cliente.service';
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
    private consumoService: ConsumoService,
    private clienteService: ClienteService) { }
  /*constructor(@InjectRepository(Pago) private pagoEntity: Repository<Pago>,
  private consumoService: ConsumoService) {}*/

  /*async crearPago(pago: IPago) {

    const date = new Date();

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
  }*/

  async crearPago(pago: IPago) {
    try {
      let costos = 0
      let date: Date = new Date();

      const consumo = await this.consumoService.consumoUnico(pago.id_consumo)
      const cliente = await this.clienteService.clienteUnico(consumo.id_cliente)

      //console.log(await this.consumoService.consumoUnico(pago.id_consumo));

      if (consumo.consumo >= 1 && consumo.consumo <= 100) {
        costos = consumo.consumo * 150;
      }
      else if (consumo.consumo > 100 && consumo.consumo <= 300) {
        costos = consumo.consumo * 170;
      }
      else if (consumo.consumo > 300) {
        costos = consumo.consumo * 190;
      }

      let edad: number = Number(date.getFullYear() - Number(cliente.fechaNacimiento.getFullYear()));

      if (edad > 50) {
        costos = costos / 1.10;
      }

      //console.log(costos)
      //console.log(cliente.fechaNacimiento.getFullYear())
      console.log(Number(date.getFullYear() - Number(cliente.fechaNacimiento.getFullYear())))


      await this.pagoEntity.insert({
        fecha: date,
        total: costos,
        id_consumo: pago.id_consumo
      });
    }
    catch (error) {
      console.log({ error })
      return false
    }
  }

  async getAll() {
    return await this.pagoEntity.find();
  }

  async pagados() {

    console.log()

    //return list;
  }

  async deuda() {

    console.log()

    //return list;
  }
}
