import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVehicleDto } from '../dto/create-vehicle.dto';
import { UpdateVehicleDto } from '../dto/update-vehicle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from '../entities/vehicle.entity';
import { Repository } from 'typeorm';



@Injectable()
export class VehiclesService {
constructor (
  @InjectRepository(Vehicle)
  private readonly vehicleRepository: Repository<Vehicle>,
){}
  
  async create(createVehicleDto: CreateVehicleDto) {

   try {
     const vehicle = this.vehicleRepository.create(createVehicleDto);

    this.vehicleRepository.save(vehicle);

    return vehicle;
   } catch (error) {
    console.log(error)
   }

  }

  async findAll() : Promise<Vehicle[]>{
    return await this.vehicleRepository.find({
    where: { isActive: true },
     relations: ['vehicleType'] 
  });
  }

  async findOne(id: number) {

    const vehicle = await this.vehicleRepository.findOneBy({vehicle_id:id})

    if (!vehicle) { throw new NotFoundException(`Vehicle with id: ${id} no found`) }

    return vehicle;
  }

  async update(id: number, updateVehicleDto: UpdateVehicleDto) {
    
   await this.vehicleRepository.update(id, updateVehicleDto);
    return this.vehicleRepository.findOne({ where: { vehicle_id: id } });

  }

  async remove(id: number) {
    
  const vehicle = await this.vehicleRepository.findOne({
      where: { vehicle_id: id, isActive: true },
    });

    if (!vehicle) {
      throw new NotFoundException(`Vehicle with ID ${id} not found or already inactive`);
    }

    vehicle.isActive = false;
    await this.vehicleRepository.save(vehicle);
  }
    // vehicle.status = unctive

  }

