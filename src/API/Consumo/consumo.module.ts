import { Cliente } from 'src/Entity/Client';
import { ClienteService } from './../Cliente/cliente.service';
import { Consumo } from 'src/Entity/Usage';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ConsumoController } from './consumo.controller';
import { ConsumoService } from './consumo.service';
import { Pago } from 'src/Entity/Payment';
import { PagoService } from '../Pago/pago.service';

@Module({
    imports: [TypeOrmModule.forFeature([Consumo, Pago, Cliente])],
    controllers: [ConsumoController],
    providers: [ConsumoService, PagoService, ClienteService],
    exports: [TypeOrmModule]
})
export class ConsumoModule { }
