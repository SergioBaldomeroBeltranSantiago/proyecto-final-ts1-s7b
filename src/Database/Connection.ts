import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from 'src/Entity/Client';
import { Pago } from 'src/Entity/Payment';
import { Consumo } from 'src/Entity/Usage';

export const Connection = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'DB-PF-TS',
  entities: [Cliente, Consumo, Pago],
  synchronize: false //Desactivado por causa a un pequeño bug con mi sql -Pedro
});
