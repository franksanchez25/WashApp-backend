import { IsString } from "class-validator";

export class CreateVehicleTypeDto {

    @IsString()
    vehicle_type: string
}