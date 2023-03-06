import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';
@Entity('Employees')
export class Employee {
  @PrimaryGeneratedColumn()
  E_Id: number;

  @Column()
  @Generated('uuid')
  E_Uuid: string;

  @Column({ nullable: true })
  E_Photo: string;

  @Column()
  E_Name: string;

  @Column()
  E_Email: string;

  @Column()
  E_Phone: string;

  @Column({ nullable: true })
  E_Address: string;

  @Column()
  E_Dob: Date;

  @Column()
  E_Gender: string;

  @Column()
  E_Password: string;

  @Column()
  E_CreatedAt: Date;

  @Column()
  E_ModifiedAt: Date;
}
