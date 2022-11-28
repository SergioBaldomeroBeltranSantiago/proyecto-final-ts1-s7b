import { Consumo } from 'src/Entity/Usage';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ConsumoController } from './consumo.controller';
import { ConsumoService } from './consumo.service';
import { Pago } from 'src/Entity/Payment';
import { PagoService } from '../Pago/pago.service';

@Module({
    imports: [TypeOrmModule.forFeature([Consumo, Pago])],
    controllers: [ConsumoController],
    providers: [ConsumoService, PagoService],
    exports: [TypeOrmModule]
})
export class ConsumoModule { }
