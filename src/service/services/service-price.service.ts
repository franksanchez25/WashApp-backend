import { Repository } from "typeorm";
import { PriceService } from "../entities/price.service.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateServicePriceDto } from "../dto/create-service-price.dto";
import { UpdateServicePriceDto } from "../dto/update-service-price.dto";

@Injectable()
export class PriceServiceService {
  constructor(
    @InjectRepository(PriceService)
    private readonly priceServiceRepository: Repository<PriceService>,
  ) {}

  async create(createPriceServiceDto: CreateServicePriceDto): Promise<PriceService> {
    const priceService = this.priceServiceRepository.create(createPriceServiceDto);
    return this.priceServiceRepository.save(priceService);
  }

  async findAll(): Promise<PriceService[]> {
    return this.priceServiceRepository.find();
  }

  async update(id: number, updatePriceServiceDto: UpdateServicePriceDto): Promise<PriceService> {
    await this.priceServiceRepository.update(id, updatePriceServiceDto);
    return this.priceServiceRepository.findOne({ where: { price_service_id: id } });
  }

  async findOne (id: number){
    const servicePrice = this.priceServiceRepository.findOneBy({price_service_id:id});
        if (!servicePrice) { throw new NotFoundException(`Vehicle with id: ${id} no found`) }

        return servicePrice;
  }

  //TODO:hacer eliminacion dura

//   async softDelete(id: number): Promise<void> {
//     await this.priceServiceRepository.update(id, { isActive: false });
//   }
}