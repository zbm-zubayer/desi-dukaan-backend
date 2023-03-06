import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('Reviews')
export class Review {
  @PrimaryGeneratedColumn()
  ReviewId: number;

  @Column()
  ReviewRating: number;

  @Column()
  ReviewMessage: string;
}
