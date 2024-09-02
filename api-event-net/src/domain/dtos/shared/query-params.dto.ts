import { IsNumber, IsOptional, IsString } from "class-validator";

export class QueryParamsInput{
  @IsNumber()
  @IsOptional()
  page: number = 1

  @IsNumber()
  @IsOptional()
  pageSize: number = 10

  @IsString()
  @IsOptional()
  orderBy?: string

}