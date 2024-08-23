import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ServiceModule } from './service/service.module';

import { WashModule } from './wash/wash.module';
import { VehiclesModule } from './vehicle/vehicles.module';

@Module({
  imports: [
   ConfigModule.forRoot(),
   TypeOrmModule.forRoot({
    type:'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    database:process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    autoLoadEntities:true,
    synchronize:true
   }),
    CustomerModule,
    ServiceModule,
    VehiclesModule,
    WashModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
