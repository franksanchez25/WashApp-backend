import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PriceService } from "./price.service.entity";

@Entity('services')
export class Service {
    @PrimaryGeneratedColumn('increment')
    service_id: number
    
    @Column('text')
    service: string

    @Column('text')
    service_description: string

    @Column('timestamp',{
     nullable: false,
    default: () => 'CURRENT_TIMESTAMP'
    })
    created_at: Date

     @OneToMany(() => PriceService, (priceService) => priceService.service)
  priceServices: PriceService[];


}
