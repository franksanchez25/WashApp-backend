/* eslint-disable */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
import { Vehicle } from '../vehicle/entities/vehicle.entity';

@Injectable()
export class CustomerService {

  constructor (
    @InjectRepository(Customer)

    private readonly customerRepository: Repository<Customer>


  ){}

  create(createCustomerDto: CreateCustomerDto) {

    try {

      const customer = this.customerRepository.create(createCustomerDto);

      this.customerRepository.save(customer);

      return customer;

    } catch (error) {
      console.log(error)
    }

    
  }

  async findAll() {


    return  await this.customerRepository.find();


  }

  async findOne(id: number) {

      const customer = await this.customerRepository.findOneBy({customer_id:id})
     
      if (!customer) throw new NotFoundException('No encontrado')
      
      return customer;
       
  }

  async update(customer_id: number, updateCustomerDto: UpdateCustomerDto) {


  await this.customerRepository.update(customer_id, updateCustomerDto)

  return this.customerRepository.findOne({where: {customer_id}})
  
  }

  async remove(id: number) {

    let customer = this.findOne(id);

    if (!customer) {
       throw new NotFoundException('Vehiculo no encontrado');
    }


  }
}
