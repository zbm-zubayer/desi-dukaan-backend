import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from './customer.entity';
import { Payment } from './payment.entity';
@Entity('CustomerPayments')
export class CustomerPayment {
  @PrimaryGeneratedColumn()
  CP_Id: number;

  @Column()
  CP_AccountNo: string;

  @Column()
  CP_ExpiryDate: Date;

  // CustomerPayment has one Customer
  @ManyToOne(() => Customer, (customer) => customer.customerPayments)
  @JoinColumn({ name: 'FK_CustomerId' })
  customer: Customer;

  // CustomerPayment has one Payment
  @ManyToOne(() => Payment, (payment) => payment.customerPayments)
  @JoinColumn({ name: 'FK_PaymentId' })
  payment: Payment;
}
