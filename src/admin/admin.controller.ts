import { Body, Controller, Param, ParseIntPipe, Post, ValidationPipe } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminRegisterDto } from './dto/aRegister.dto';
import { CreateCategoryDto } from './dto/createCategory.dto';
import { CreateEmployeeDto } from './dto/createEmployee.dto';
import { CreatePaymentDto } from './dto/createPayment.dto';

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Post('/register')
  registerAccount(@Body(ValidationPipe) adminRegisterDto: AdminRegisterDto) {
    return this.adminService.registerAccount(adminRegisterDto);
  }
  @Post('/create-seller/:id')
  createSeller(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) createEmployeeDto: CreateEmployeeDto) {
    return this.adminService.createSeller(id, createEmployeeDto);
  }
  @Post('/create-category/')
  createCategory(@Body(ValidationPipe) createCategoryDto: CreateCategoryDto) {
    return this.adminService.createCategory(createCategoryDto);
  }
  @Post('/create-payment')
  createPayment(@Body(ValidationPipe) createPaymentDto: CreatePaymentDto) {
    return this.adminService.createPaymentType(createPaymentDto);
  }
}
