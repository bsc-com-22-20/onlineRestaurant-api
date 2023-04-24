import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Menus {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number

    @Column()
    food_name: string

    @Column()
    price: number

    @Column()
    isAvailable: boolean
}