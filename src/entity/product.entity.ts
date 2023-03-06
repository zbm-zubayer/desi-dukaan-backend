import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';
@Entity('Products')
export class Product {
  @PrimaryGeneratedColumn()
  P_Id: number;

  @Column()
  @Generated('uuid')
  P_Uuid: string;

  @Column()
  P_Name: string;

  @Column()
  P_Desc: string;

  @Column()
  P_Qty: number;

  @Column()
  P_Waranty: string;

  @Column()
  P_Price: number;

  @Column()
  P_CreatedAt: Date;

  @Column()
  P_ModifiedAt: Date;
}
