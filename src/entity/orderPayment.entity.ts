import { Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('OrderPayments')
export class OrderPayment {
  @PrimaryGeneratedColumn()
  OP_Id: number;
}
