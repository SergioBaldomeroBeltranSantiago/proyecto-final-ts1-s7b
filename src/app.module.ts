import { ConfigModule } from '@nestjs/config';
import { Connection } from './Database/Connection';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PagoModule } from './API/Pago/pago.module';
import { ConsumoService } from './API/Consumo/consumo.service';
import { ConsumoController } from './consumo/consumo.controller';
import { ConsumoModule } from './consumo/consumo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'docker' ? '.docker.env' : '.local.env',
    }),
    Connection,
    PagoModule,
    ConsumoModule,
  ], //Faltan modulos de entidades
  controllers: [AppController, ConsumoController],
  providers: [AppService, ConsumoService],
})
export class AppModule {}
