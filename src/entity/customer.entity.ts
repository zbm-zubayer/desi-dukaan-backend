import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';
@Entity('Customers')
export class Customer {
  @PrimaryGeneratedColumn()
  C_Id: number;

  @Column()
  @Generated('uuid')
  C_Uuid: string;

  @Column({ nullable: true })
  C_Photo: string;

  @Column()
  C_Name: string;

  @Column()
  C_Email: string;

  @Column()
  C_Phone: string;

  @Column({ nullable: true })
  C_Address: string;

  @Column()
  C_Dob: Date;

  @Column()
  C_Gender: string;

  @Column()
  C_Password: string;

  @Column()
  C_CreatedAt: Date;

  @Column()
  C_ModifiedAt: Date;
}
