import { Prisma } from '@prisma/client';
import { QueryParamsInput } from 'src/domain/dtos/shared/query-params.dto';

export abstract class ServiceBase<Entity, CreateDto = void, UpdateDto = void> {
  abstract createMany?(dto: CreateDto[]): Promise<Prisma.BatchPayload>;
  abstract create?(dto: CreateDto): Promise<Entity>;
  abstract findById?(id: string): Promise<Entity>;
  abstract findAll?(queryParams: QueryParamsInput): Promise<Entity[]>;
  abstract update?(dto: UpdateDto): Promise<Entity>;
  abstract remove?(id: string): Promise<boolean>;
}