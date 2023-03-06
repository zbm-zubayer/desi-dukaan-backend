import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('ProductPhotos')
export class ProductPhoto {
  @PrimaryGeneratedColumn()
  P_PhotoId: number;

  @Column({ nullable: true })
  P_Photo: string;
}
