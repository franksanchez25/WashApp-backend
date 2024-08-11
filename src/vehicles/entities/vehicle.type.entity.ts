import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Vehicle } from "./vehicle.entity";
import { PriceService } from '../../service/entities/price.service.entity';



@Entity('vehicle_type')
export class VehicleType {

    @PrimaryGeneratedColumn('increment')
    vehicletype_id: number

    @Column('text')
    vehicle_type: string


 @OneToMany(
    ()=> Vehicle,
    (vehicle) => vehicle.vehicle_type,{
        cascade:true,
        eager:true
    }
 )
    vehicle: Vehicle [];

    @Column('timestamp',{
     nullable: false,
    default: () => 'CURRENT_TIMESTAMP'
    })
    created_at: Date

    @OneToMany(() => PriceService, (priceService) => priceService.vehicleType)
    priceServices: PriceService[];

}