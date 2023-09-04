import {
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class PaginationDTO {
  @IsNumber()
  @IsOptional()
  offset: number;

  @IsNumber()
  @Min(1)
  @Max(100)
  @IsOptional()
  limit: number;

  @MaxLength(60)
  @IsOptional()
  sort: string;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  keyword: string;

  @IsOptional()
  filter: any;
}
