import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from 'src/Entity/Client';
import { Pago } from 'src/Entity/Payment';
import { Consumo } from 'src/Entity/Usage';

export const Connection = TypeOrmModule.forRoot({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) ,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Cliente, Consumo, Pago],
  synchronize: true //Desactivado por causa a un pequeño bug con mi sql -Pedro
});
