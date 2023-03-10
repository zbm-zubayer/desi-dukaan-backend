import { Body, Controller, Param, Post, ValidationPipe } from '@nestjs/common';
import { CreateProductDto } from './dto/createProduct.dto';
import { SellerRegisterDto } from './dto/sRegister.dto';
import { SellerService } from './seller.service';

@Controller('seller')
export class SellerController {
  constructor(private sellerService: SellerService) {}

  // Seller can register
  @Post('/register')
  registerAccount(@Body(ValidationPipe) sellerRegisterDto: SellerRegisterDto) {
    return this.sellerService.registerAccount(sellerRegisterDto);
  }
  // Seller can create product
  @Post('/create-product/:id')
  createProduct(@Param('id') id: number, @Body(ValidationPipe) createProductDto: CreateProductDto) {
    return this.sellerService.createProduct(id, createProductDto);
  }
}
