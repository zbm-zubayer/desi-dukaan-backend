import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('OrderDetails')
export class OrderDetail {
  @PrimaryGeneratedColumn()
  P_OrderId: number;

  @Column()
  P_OrderQty: number;

  @Column()
  P_OrderPrice: number;
}
