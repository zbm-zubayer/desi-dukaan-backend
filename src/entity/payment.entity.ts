import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('Payments')
export class Payment {
  @PrimaryGeneratedColumn()
  PaymentId: number;

  @Column()
  PaymentType: string;
}
