import { Module } from '@nestjs/common';
import { VehiclesService } from './services/vehicles.service';
import { VehiclesController } from './controllers/vehicles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { VehicleType } from './entities/vehicle.type.entity';
import { VehicleTypeController } from './controllers/vehicle-type.controller';
import { VehicleTypeService } from './services/vehicle-type.service';

@Module({
  controllers: [VehiclesController, VehicleTypeController],
  providers: [VehiclesService, VehicleTypeService],
   imports: [
    TypeOrmModule.forFeature([
     Vehicle,
     VehicleType,
    ])
  ],
})
export class VehiclesModule {}
