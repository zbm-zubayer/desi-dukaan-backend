import { IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  CategoryName: string;
}
