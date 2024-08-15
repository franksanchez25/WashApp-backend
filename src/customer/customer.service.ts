/* eslint-disable */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';

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


    const customers = await this.customerRepository.find();


    return customers;
  }

  async findOne(id: number) {

    
    
      const customer = await this.customerRepository.findOneBy({customer_id:id})

      if (!customer) throw new NotFoundException('No encontrado')

      

        return customer;
       

  }

  async update(customer_id: number, updateCustomerDto: UpdateCustomerDto) {



const customer = await this.customerRepository.findOne({ where: { customer_id } });

  if (!customer) {
    throw new NotFoundException(`No se ha encontrado el cliente con id ${customer_id}`);
  }

  const updatedCustomer = this.customerRepository.merge(customer, updateCustomerDto);

  return this.customerRepository.save(updatedCustomer);
 
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
