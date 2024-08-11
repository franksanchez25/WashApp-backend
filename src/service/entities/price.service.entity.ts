import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Service } from "./service.entity";
import { VehicleType } from "src/vehicles/entities/vehicle.type.entity";

@Entity('price_service')
export class PriceService {

    @PrimaryGeneratedColumn('identity')
    price_service_id: number
    
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    precio: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

   // Relación Muchos a Uno con Service
  @ManyToOne(() => Service, (service) => service.priceServices,
  {
        onDelete:'CASCADE'
    })
    service: Service;

  // Relación Muchos a Uno con VehicleType
  @ManyToOne(() => VehicleType, (vehicleType) => vehicleType.priceServices,
{
        onDelete:'CASCADE'
    })
  vehicleType: VehicleType;

}