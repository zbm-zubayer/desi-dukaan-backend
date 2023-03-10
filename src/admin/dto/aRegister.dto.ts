import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class AdminRegisterDto {
  @IsNotEmpty()
  A_Name: string;

  @IsNotEmpty()
  @IsEmail()
  A_Email: string;

  @IsNotEmpty()
  A_Phone: string;

  @IsNotEmpty()
  A_Dob: Date;

  @IsNotEmpty()
  A_Gender: string;

  @IsNotEmpty()
  @Length(8, 30)
  A_Password: string;
}
