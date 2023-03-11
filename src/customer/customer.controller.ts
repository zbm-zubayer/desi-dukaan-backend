import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { saveUploadedFile } from 'src/helper/saveUploadedFile';
import { CustomerService } from './customer.service';
import { CustomerChangePassDto } from './dto/cChangePass.dto';
import { CustomerForgotPassDto } from './dto/cForgotPass.dto';
import { CustomerUpdateDto } from './dto/cProfileUpdate.dto';
import { CreateOrderDto } from './dto/createOrder.dto';
import { CreateReviewDto } from './dto/createReview.dto';
import { CustomerRegisterDto } from './dto/cRegister.dto';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Post('/register')
  registerAccount(@Body(ValidationPipe) customerRegisterDto: CustomerRegisterDto) {
    return this.customerService.registerAccount(customerRegisterDto);
  }
  @Get('/verify-email/')
  verifyEmail(@Query('uid', ParseUUIDPipe) uuid) {
    return this.customerService.verifyEmail(uuid);
  }
  @Get('/profile/:id')
  viewProfile(@Param('id', ParseUUIDPipe) uuid) {
    return this.customerService.viewProfile(uuid);
  }
  @Put('/profile/:id')
  @UseInterceptors(FileInterceptor('C_Photo', saveUploadedFile))
  updateProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) customerUpdateDto: CustomerUpdateDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      customerUpdateDto.C_Photo = null;
      return this.customerService.updateProfile(id, customerUpdateDto);
    } else {
      console.log(file);
      customerUpdateDto.C_Photo = file.filename;
      return this.customerService.updateProfile(id, customerUpdateDto);
    }
  }
  @Delete('/delete/:id')
  deleteAccount(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.deleteAccount(id);
  }
  @Patch('/change-password/:id')
  changePassword(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) customerChangePassDto: CustomerChangePassDto) {
    return this.customerService.changePassword(id, customerChangePassDto);
  }
  @Post('/forgot-password')
  forgotPassword(@Body(ValidationPipe) customerForgotPassDto: CustomerForgotPassDto) {
    return this.customerService.forgotPassword(customerForgotPassDto);
  }
  @Get('/product')
  viewAllProduct() {
    return this.customerService.viewAllProduct();
  }
  @Get('/product/:id')
  viewProductDetail(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.viewProductDetail(id);
  }
  @Get('/s')
  searchProduct(@Query() query) {
    return this.customerService.searchProduct(query);
  }
  @Get('/cart')
  viewCart() {}

  @Post('/create-order/:id')
  createOrder(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) createOrderDto: CreateOrderDto) {
    return this.customerService.createOrder(id, createOrderDto);
  }
  @Get('/order/:id')
  viewAllOrder(@Param('id') id: number) {
    return this.customerService.viewAllOrder(id);
  }
  @Get('/order/')
  viewOrderDetail(@Query() orderCode: string) {
    return this.customerService.viewOrderDetail(orderCode);
  }
  @Get('/payment')
  viewPayment() {
    return this.customerService.viewPayment();
  }

  @Post('/:id/review/')
  postReview(
    @Param('id', ParseIntPipe) id: number,
    @Query() productId: number,
    @Body(ValidationPipe) createReviewDto: CreateReviewDto,
  ) {
    return this.customerService.postReview(id, productId, createReviewDto);
  }

  @Get('/myReviews/:id')
  viewMyReviews(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.viewMyReviews(id);
  }
}
