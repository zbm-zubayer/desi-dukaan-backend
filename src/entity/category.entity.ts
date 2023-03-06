import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('Categories')
export class Category {
  @PrimaryGeneratedColumn()
  CategoryId: number;

  @Column()
  CategoryName: string;
}
