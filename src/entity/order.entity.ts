import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('Orders')
export class Order {
  @PrimaryGeneratedColumn()
  OrderId: number;

  @Column()
  OrderCode: string;

  @Column()
  OrderStatus: string;

  @Column()
  OrderPhone: string;

  @Column()
  OrderAddress: string;

  @Column()
  OrderAmount: number;

  @Column()
  OrderPlacedDate: Date;

  @Column()
  OrderDeliveredDate: Date;
}
