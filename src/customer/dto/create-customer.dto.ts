import { IsEmail, IsNumber, IsOptional, IsPhoneNumber, IsString, Min } from "class-validator";

export class CreateCustomerDto {
 
    @IsString()

    full_name: string

    @IsString()
   
    @IsOptional()
    document_id?: string

    @IsString()
    @IsEmail()
    @IsOptional()
    email?: string

    @IsNumber()
    @IsOptional()
    phone_number?: number
}
