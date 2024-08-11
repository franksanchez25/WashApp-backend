import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { Service } from './entities/service.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceService } from './entities/price.service.entity';

@Module({
  controllers: [ServiceController],
  providers: [ServiceService],
   imports: [
    TypeOrmModule.forFeature([
      Service,
      PriceService
    ])
  ]
})
export class ServiceModule {}
