import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Admin } from 'src/db/entity/admin.entity';
import { Category } from 'src/db/entity/category.entity';
import { Customer } from 'src/db/entity/customer.entity';
import { Employee } from 'src/db/entity/employee.entity';
import { Payment } from 'src/db/entity/payment.entity';
import { Seller } from 'src/db/entity/seller.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) private adminRepo: Repository<Admin>,
    @InjectRepository(Employee) private employeeRepo: Repository<Employee>,
    @InjectRepository(Seller) private sellerRepo: Repository<Seller>,
    @InjectRepository(Customer) private customerRepo: Repository<Customer>,
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
    @InjectRepository(Payment) private paymentRepo: Repository<Payment>,
  ) {}
  async registerAccount(adminRegisterDto) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(adminRegisterDto.A_Password, salt);
    adminRegisterDto.A_Password = hashedPassword;
    adminRegisterDto.A_CreatedAt = new Date();
    adminRegisterDto.A_ModifiedAt = new Date();
    return await this.adminRepo.save(adminRegisterDto);
  }
  async createSeller(id, createEmployeeDto) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createEmployeeDto.E_Password, salt);
    createEmployeeDto.E_Password = hashedPassword;
    createEmployeeDto.E_CreatedAt = new Date();
    createEmployeeDto.E_ModifiedAt = new Date();
    createEmployeeDto.admin = id;
    return await this.employeeRepo.save(createEmployeeDto);
  }
  async createCategory(createCategoryDto) {
    return await this.categoryRepo.save(createCategoryDto);
  }
  async createPaymentType(createPaymentDto) {
    return await this.paymentRepo.save(createPaymentDto);
  }
}
