import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateVehicleTypeDto } from '../dto/create-vehicle-type.dto';
import { VehicleTypeService } from '../services/vehicle-type.service';
import { VehicleType } from '../entities/vehicle.type.entity';
import { UpdateVehicleTypeDto } from '../dto/update-vehicle-type.dto';

@Controller('vehicle-type')
export class VehicleTypeController {

constructor(
    private readonly vehicleTypeService: VehicleTypeService 
){}

  
@Post()
  create(@Body() createVehicleTypeDtop: CreateVehicleTypeDto) {
    return this.vehicleTypeService.create(createVehicleTypeDtop);
  }


@Get()
  findAll() {
    return this.vehicleTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.vehicleTypeService.findOne(+id);
  }


  @Patch(':id')
  update(@Param('id') id: number, @Body() updateVehicleType: UpdateVehicleTypeDto) {
    return this.vehicleTypeService.update(id, updateVehicleType);
  }


}
