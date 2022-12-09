import { ClienteModule } from './API/Cliente/cliente.module';
import { ClienteService } from './API/Cliente/cliente.service';
import { ClienteController } from './API/Cliente/cliente.controller';
import { ConfigModule } from '@nestjs/config';
import { Connection } from './Database/Connection';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PagoModule } from './API/Pago/pago.module';
import { ConsumoService } from './API/Consumo/consumo.service';
import { ConsumoController } from './API/Consumo/consumo.controller';
import { ConsumoModule } from './API/Consumo/consumo.module';

@Module({
  imports: [ConfigModule.forRoot({envFilePath: process.env.NODE_ENV === 'docker' ? '.env': '.env.local'}),
    Connection, PagoModule, ConsumoModule, ClienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
