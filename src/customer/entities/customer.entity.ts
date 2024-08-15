import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('customers')
export class Customer {

    @PrimaryGeneratedColumn('increment')
    customer_id: number

    @Column('text',{
        nullable:false
    })
    full_name: string

    @Column('text',{
        nullable: false
    })
    document_id: string

     @Column('text',{
        nullable: true
    })
    email: string

      @Column('bigint',{
        nullable: true
    })
    phone_number: number

    @Column('timestamp',{
     nullable: false,
    default: () => 'CURRENT_TIMESTAMP'
    })

    created_at: Date
}
