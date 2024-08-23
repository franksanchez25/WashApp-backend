import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateVehicleTypeDto } from "../dto/create-vehicle-type.dto";
import { UpdateVehicleTypeDto } from "../dto/update-vehicle-type.dto";
import { VehicleType } from "../entities/vehicle.type.entity";

@Injectable()
export class VehicleTypeService {
  constructor(
    @InjectRepository(VehicleType)
    private readonly vehicleTypeRepository: Repository<VehicleType>,
  ) {}

  async create(createVehicleTypeDto: CreateVehicleTypeDto): Promise<VehicleType> {
    const vehicleType = this.vehicleTypeRepository.create(createVehicleTypeDto);
    return this.vehicleTypeRepository.save(vehicleType);
  }

  async findAll(): Promise<VehicleType[]> {
    return this.vehicleTypeRepository.find();
  }

    async findOne(id: number): Promise<VehicleType> {
    const vehicleType = await this.vehicleTypeRepository.findOneBy({vehicletype_id:id})

    if (!vehicleType) { throw new NotFoundException(`Vehicle Type with id: ${id} no found`) }

    return vehicleType;
  }

  async update(id: number, updateVehicleTypeDto: UpdateVehicleTypeDto): Promise<VehicleType> {
    
    
   await this.vehicleTypeRepository.update(id, updateVehicleTypeDto);
    return this.vehicleTypeRepository.findOne({ where: { vehicletype_id: id } });

  
}
//TODO:implement cascade delete
//   async softDelete(id: number): Promise<void> {
//     await this.vehicleTypeRepository.update(id, { p});
//   }
}