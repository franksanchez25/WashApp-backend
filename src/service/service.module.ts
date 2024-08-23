import { Module } from '@nestjs/common';
import { ServiceService } from './services/service.service';
import { ServiceController } from './controllers/service.controller';
import { Service } from './entities/service.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceService } from './entities/price.service.entity';
import { ServicePriceController } from './controllers/service-price.controller';
import { PriceServiceService } from './services/service-price.service';

@Module({
  controllers: [ServiceController, ServicePriceController],
  providers: [ServiceService, PriceServiceService],
   imports: [
    TypeOrmModule.forFeature([
      Service,
      PriceService
    ])
  ]
})
export class ServiceModule {}
