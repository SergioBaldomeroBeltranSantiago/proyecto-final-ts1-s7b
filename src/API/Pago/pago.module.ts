import { ClienteService } from './../Cliente/cliente.service';
import { Cliente } from 'src/Entity/Client';
import { ConsumoService } from './../Consumo/consumo.service';
import { Pago } from './../../Entity/Payment';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PagoController } from './pago.controller';
import { PagoService } from './pago.service';
import { Consumo } from 'src/Entity/Usage';

@Module({
  imports: [TypeOrmModule.forFeature([Pago, Consumo, Cliente])],
  controllers: [PagoController],
  providers: [PagoService, ConsumoService, ClienteService],
  exports: [TypeOrmModule],
})
export class PagoModule {}
