import { ConfigModule } from '@nestjs/config';
import { Connection } from './Database/Connection';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'docker' ? '.docker.env' : '.local.env',
    }),
    Connection,
  ], //Faltan modulos de entidades
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
