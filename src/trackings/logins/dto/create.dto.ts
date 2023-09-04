import { IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class CreateLoginDto {
  @MinLength(1)
  @IsNotEmpty()
  username: string;

  @IsOptional()
  ipAddress: string;

  @IsOptional()
  status: number;
}
