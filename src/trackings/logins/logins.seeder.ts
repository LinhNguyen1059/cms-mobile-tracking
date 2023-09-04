import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DataFactory, Seeder } from 'nestjs-seeder';
import { Login, LoginDocument } from './schemas/login.schema';

@Injectable()
export class LoginsSeeder implements Seeder {
  constructor(
    @InjectModel(Login.name)
    private readonly ProductModel: Model<LoginDocument>,
  ) {}

  async drop(): Promise<any> {
    return this.ProductModel.deleteMany({}) as any;
  }

  async seed(): Promise<any> {
    const logins = DataFactory.createForClass(Login).generate(15);

    return this.ProductModel.insertMany(logins);
  }
}
