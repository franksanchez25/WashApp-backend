import { IsNumber, IsString, MinLength } from "class-validator";
import { VehicleType } from "../entities/vehicle.type.entity";

export class CreateVehicleDto {
    @IsString()
    @MinLength(5)
    plate: string;
    
    @IsString()
    @MinLength(2)
    brand: string

    @IsString()
    @MinLength(2)
    model: string

    @IsNumber()
    vehicle_type: VehicleType

}
