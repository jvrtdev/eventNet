import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { IsSort } from 'src/common/validators';

export class QueryParamsDto {
  @IsNumber()
  @IsOptional()
  page: number;

  @IsNumber()
  @IsOptional()
  pageSize: number;

  @IsString()
  @IsOptional()
  @IsSort()
  orderBy?: string;

  @IsOptional()
  @IsDate()
  from?: Date;

  @IsOptional()
  @IsDate()
  to?: Date;
}
