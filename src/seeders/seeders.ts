import { MongooseModule } from '@nestjs/mongoose';
import { seeder } from 'nestjs-seeder';
import { LoginsSeeder } from '../trackings/logins/logins.seeder';
import { Login, LoginSchema } from '../trackings/logins/schemas/login.schema';

seeder({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://cmsUser:iV6C0VWxAM1yUKZk@cluster0.ghr1fa4.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: Login.name, schema: LoginSchema }]),
  ],
}).run([LoginsSeeder]);
