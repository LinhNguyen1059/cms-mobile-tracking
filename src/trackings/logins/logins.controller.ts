import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { LoginsService } from './logins.service';
import { CreateLoginDto } from './dto/create.dto';

@Controller('trackings/logins')
export default class LoginsController {
  constructor(private readonly loginsService: LoginsService) {}

  @Post()
  create(@Body() createLoginDto: CreateLoginDto) {
    return this.loginsService.create(createLoginDto);
  }

  @Get()
  findAll(@Query() query: any) {
    return this.loginsService.findAll(query);
  }

  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.loginsService.findOneById(id);
  }
}
