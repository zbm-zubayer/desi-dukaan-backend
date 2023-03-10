import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Product } from 'src/db/entity/product.entity';
import { Seller } from 'src/db/entity/seller.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SellerService {
  constructor(
    @InjectRepository(Seller) private sellerRepo: Repository<Seller>,
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  async registerAccount(sellerRegisterDto) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(sellerRegisterDto.S_Password, salt);
    sellerRegisterDto.S_Password = hashedPassword;
    sellerRegisterDto.S_CreatedAt = new Date();
    sellerRegisterDto.S_ModifiedAt = new Date();
    return await this.sellerRepo.save(sellerRegisterDto);
  }
  createProduct(id, createProductDto) {
    createProductDto.P_CreatedAt = new Date();
    createProductDto.P_ModifiedAt = new Date();
    createProductDto.seller = id;
    return this.productRepo.save(createProductDto);
  }
}
