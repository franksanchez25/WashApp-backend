import { Body, Controller, Get, Param, ParseFloatPipe, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateServicePriceDto } from '../dto/create-service-price.dto';
import { PriceServiceService } from '../services/service-price.service';
import { UpdateServicePriceDto } from '../dto/update-service-price.dto';

@Controller('service-price')
export class ServicePriceController {s
    constructor(
        private readonly priceService: PriceServiceService
    ){}

  @Post()
  create(@Body() createServiceDto: CreateServicePriceDto) {
    return this.priceService.create(createServiceDto);
  }

  @Get()
  findAll() {
    return this.priceService.findAll();
  }
   @Get(':id')
  findOne(@Param('id') id: number) {
    return this.priceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id',ParseFloatPipe) id: number, @Body() updateServicePrice: UpdateServicePriceDto) {

    return this.priceService.update(id,updateServicePrice)
  }
}
