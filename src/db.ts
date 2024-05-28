import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const options: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'dev.sqlite3',
  autoLoadEntities: true,
  synchronize: true,
};
