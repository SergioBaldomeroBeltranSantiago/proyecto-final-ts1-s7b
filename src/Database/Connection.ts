import { TypeOrmModule } from '@nestjs/typeorm';

export const Connection = TypeOrmModule.forRoot({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  //Falta añadir las entidades
  synchronize: true,
});
