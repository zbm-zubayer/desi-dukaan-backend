import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('CustomerPayments')
export class CustomerPayment {
  @PrimaryGeneratedColumn()
  CP_Id: number;

  @Column()
  CP_AccountNo: string;

  @Column()
  CP_ExpiryDate: Date;
}
