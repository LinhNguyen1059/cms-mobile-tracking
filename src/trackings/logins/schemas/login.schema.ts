import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Factory } from 'nestjs-seeder';

@Schema()
export class Login {
  @Factory((faker) => faker.internet.userName())
  @Prop()
  username: string;

  @Factory((faker) => faker.internet.ip())
  @Prop()
  ipAddress: string;

  @Factory((faker) => faker.number.int({ min: 1, max: 3 }))
  @Prop()
  status: number;

  @Factory((faker) => faker.date.past())
  @Prop({ default: Date.now })
  createdAt: Date;

  @Factory((faker) => faker.date.past())
  @Prop({ default: Date.now })
  updatedAt: Date;
}

export type LoginDocument = Login & Document;

export const LoginSchema = SchemaFactory.createForClass(Login);
