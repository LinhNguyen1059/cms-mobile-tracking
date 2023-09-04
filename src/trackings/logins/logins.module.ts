import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Login, LoginSchema } from './schemas/login.schema';
import LoginsController from './logins.controller';
import { LoginsService } from './logins.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Login.name, schema: LoginSchema }]),
  ],
  controllers: [LoginsController],
  providers: [LoginsService],
})
export class LoginsModule {}
