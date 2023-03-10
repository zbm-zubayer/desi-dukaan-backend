import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  E_Name: string;

  @IsNotEmpty()
  @IsEmail()
  E_Email: string;

  @IsNotEmpty()
  E_Phone: string;

  @IsNotEmpty()
  E_Dob: Date;

  @IsNotEmpty()
  E_Gender: string;

  @IsNotEmpty()
  @Length(8, 30)
  E_Password: string;
}
