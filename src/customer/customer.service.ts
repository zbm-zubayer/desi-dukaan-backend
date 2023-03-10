import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Customer } from 'src/db/entity/customer.entity';
import { Order } from 'src/db/entity/order.entity';
import { Payment } from 'src/db/entity/payment.entity';
import { Product } from 'src/db/entity/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer) private customerRepo: Repository<Customer>,
    @InjectRepository(Product) private productRepo: Repository<Product>,
    @InjectRepository(Order) private orderRepo: Repository<Order>,
    @InjectRepository(Payment) private paymentRepo: Repository<Payment>,
  ) {}
  // Customer Register
  async registerAccount(customerRegisterDto) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(customerRegisterDto.C_Password, salt);
    customerRegisterDto.C_Password = hashedPassword;
    customerRegisterDto.C_CreatedAt = new Date();
    customerRegisterDto.C_ModifiedAt = new Date();
    return await this.customerRepo.save(customerRegisterDto);
  }
  // Customer Profile
  async viewProfile(uuid) {
    return await this.customerRepo.findOneBy({ C_Uuid: uuid });
  }
  // Customer Update Profile
  async updateProfile(id, customerUpdateDto) {
    customerUpdateDto.C_ModifiedAt = new Date();
    return await this.customerRepo.update(id, customerUpdateDto);
  }
  // Customer Update Profile Photo
  async uploadProfilePhoto(id, customerUpdateDto) {
    return await this.customerRepo.update(id, customerUpdateDto);
  }
  // Customer Delete Account
  async deleteAccount(id) {
    return await this.customerRepo.delete(id);
  }
  // Customer Change Password
  async changePassword(id, customerChangePassDto) {
    const dbPassword = await (await this.customerRepo.findOneBy({ C_Id: id })).C_Password;
    const isMatch = await bcrypt.compare(customerChangePassDto.C_CurrentPassword, dbPassword);
    if (isMatch) {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(customerChangePassDto.C_NewPassword, salt);
      customerChangePassDto.C_NewPassword = hashedPassword;
      return await this.customerRepo.update({ C_Id: id }, { C_Password: customerChangePassDto.C_NewPassword });
    } else {
      return 'Password not match';
    }
  }
  // Customer Forgot Password
  async forgotPassword() {}

  viewAllProduct() {
    return this.productRepo.find();
  }
  // Customer View Product Detail
  viewProductDetail(id) {
    return this.productRepo.findOneBy({ P_Id: id });
  }
  // Customer Search Product
  searchProduct(name) {
    return this.productRepo.findBy({ P_Name: name.q });
  }
  // Customer View Cart
  async viewCart() {}
  // Customer View All Order
  async viewAllOrder() {
    return await this.orderRepo.find();
  }
  // Customer View Order Detail
  async viewOrderDetail() {}
  // Customer View Payment
  async viewPayment() {}

  // Customer can a post review
  async postReview() {}

  // Customer can view all own reviews
  async viewAllReview() {}
}
