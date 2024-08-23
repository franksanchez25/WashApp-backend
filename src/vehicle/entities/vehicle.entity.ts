import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @Column({
        default:true
    })
    isActive: boolean;

    @Column('timestamp',{
     nullable: false,
    default: () => 'CURRENT_TIMESTAMP'
    })
    created_at: Date

    

    @ManyToOne(() => VehicleType, vehicleType => vehicleType.vehicles)
  @JoinColumn({ name: 'vehicletype_id' })
  vehicleType: VehicleType;

    @Column()
    vehicletype_id: number;
}
