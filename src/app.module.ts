import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customer/customer.module';
import { DbModule } from './db/db.module';
import { AdminModule } from './admin/admin.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234567890',
      database: 'DesiDukaanDBdemo',
      autoLoadEntities: true,
      synchronize: true,
    }),
    DbModule,
    CustomerModule,
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
