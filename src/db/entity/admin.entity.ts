import { Column, Entity, Generated, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from './employee.entity';
@Entity('Admins')
export class Admin {
  @PrimaryGeneratedColumn()
  A_Id: number;

  @Column()
  @Generated('uuid')
  A_Uuid: string;

  @Column({ nullable: true })
  A_Photo: string;

  @Column()
  A_Name: string;

  @Column()
  A_Email: string;

  @Column()
  A_Phone: string;

  @Column({ nullable: true })
  A_Address: string;

  @Column()
  A_Dob: Date;

  @Column()
  A_Gender: string;

  @Column()
  A_Password: string;

  @Column()
  A_CreatedAt: Date;

  @Column()
  A_ModifiedAt: Date;

  // Admin has many Employees
  @OneToMany(() => Employee, (employee) => employee.admin)
  employees: Employee[];
}
