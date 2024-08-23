import { IsString, MinLength } from "class-validator";

export class CreateServiceDto {
    @IsString()
    @MinLength(2)
    service: string


    @IsString()
    @MinLength(2)
    service_description: string
}
