import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { VehicleType } from './vehicle.type.entity';

@Entity('vehicles')
export class Vehicle {
    @PrimaryGeneratedColumn('increment')
    vehicle_id: number

    @Column('text')
    plate: string

    @Column('text')
    brand: string
    
    @Column('text')
    model: string


    @Column('timestamp',{
     nullable: false,
    default: () => 'CURRENT_TIMESTAMP'
    })
    created_at: Date

    @ManyToOne(
        ()=> VehicleType,
        (vehicletype)=> vehicletype.vehicle,
        {
            onDelete:'CASCADE'
        }
    )

    vehicle_type: VehicleType;

}
