import { IsNumber, IsPositive } from "class-validator";

export class CreateServicePriceDto {


    @IsNumber()
    @IsPositive()
    precio: number

      @IsNumber()
    @IsPositive()
    service_id: number

      @IsNumber()
    @IsPositive()
    vehicletype_id: number



}