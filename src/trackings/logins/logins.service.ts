import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Login } from './schemas/login.schema';
import { Model } from 'mongoose';
import { PaginationDTO } from 'src/common/dto/pagination.dto';
import { CreateLoginDto } from './dto/create.dto';

@Injectable()
export class LoginsService {
  constructor(@InjectModel(Login.name) private LoginModel: Model<Login>) {}

  async create(loginDto: CreateLoginDto): Promise<any> {
    const username = loginDto.username;
    const sameUsername = await this.LoginModel.findOne({ username });

    if (sameUsername && sameUsername._id.toString()) {
      const id = sameUsername._id;
      const data = {
        ...loginDto,
        updatedAt: new Date(),
      };
      return this.LoginModel.findByIdAndUpdate(id, data, {
        new: true,
      });
    }

    return this.LoginModel.create(loginDto);
  }

  async findAll(query: PaginationDTO): Promise<any> {
    const { filter, limit, offset, sort, keyword } = query;

    let filterObject: any = {};

    if (filter) {
      filterObject = filter;
    }

    if (keyword) {
      filterObject = {
        ...filterObject,
        $or: [
          { name: new RegExp(keyword.toString(), 'i') },
          { description: new RegExp(keyword.toString(), 'i') },
          { slug: new RegExp(keyword.toString(), 'i') },
          { sku: new RegExp(keyword.toString(), 'i') },
        ],
      };
    }

    const finalQuery = this.LoginModel.find(filterObject)
      .skip(offset)
      .limit(limit);

    if (sort) {
      finalQuery.sort(sort);
    }

    const result = await finalQuery.exec();
    const total = await this.LoginModel.count(filterObject);

    return {
      total,
      result,
      offset,
      limit,
    };
  }

  async findOneById(id: string): Promise<Login> {
    const result = await this.LoginModel.findById(id).exec();
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }
}
