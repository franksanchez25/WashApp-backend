import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceDto } from '../dto/create-service.dto';
import { UpdateServiceDto } from '../dto/update-service.dto';
import { Service } from '../entities/service.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ServiceService {

  constructor(
    @InjectRepository(Service)

    private readonly serviceRepository: Repository<Service>,

  ) {}

  async create(createServiceDto: CreateServiceDto) {
   try {
     const service = this.serviceRepository.create(createServiceDto);

    this.serviceRepository.save(service);

    return service;
   } catch (error) {
    console.log(error)
   }

  }

 async findAll() : Promise<Service[]>{
  
 return this.serviceRepository.find();

  }

  async findOne(id: number) {
    

     const service = await this.serviceRepository.findOneBy({service_id: id})

    if (!service) { throw new NotFoundException(`Service with id: ${id} no found`) }

    return service;
     
  }

  async update(id: number, updateServiceDto: UpdateServiceDto): Promise<Service> {
    
     
   await this.serviceRepository.update(id, updateServiceDto);
    return this.serviceRepository.findOne({ where: { service_id: id } });

  }


  //TODO: Eliminar en cascada los servicios y sus precios
   remove(id: number) {
    return `This action removes a #${id} service`;
  }
}
