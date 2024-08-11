import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WashService } from './wash.service';
import { CreateWashDto } from './dto/create-wash.dto';
import { UpdateWashDto } from './dto/update-wash.dto';

@Controller('wash')
export class WashController {
  constructor(private readonly washService: WashService) {}

  @Post()
  create(@Body() createWashDto: CreateWashDto) {
    return this.washService.create(createWashDto);
  }

  @Get()
  findAll() {
    return this.washService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.washService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWashDto: UpdateWashDto) {
    return this.washService.update(+id, updateWashDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.washService.remove(+id);
  }
}
