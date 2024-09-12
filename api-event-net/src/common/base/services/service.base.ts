import { QueryParamsDto } from 'src/domain/dtos/shared/query-params.dto';

export abstract class ServiceBase<Entity, CreateDto = void, UpdateDto = void> {
  abstract createMany?(dto: CreateDto[]): Promise<Entity[]>;
  abstract create?(dto: CreateDto): Promise<Entity>;
  abstract findById?(id: string): Promise<Entity>;
  abstract findAll?(queryParams: QueryParamsDto): Promise<Entity[]>;
  abstract update?(dto: UpdateDto): Promise<Entity>;
  abstract remove?(id: string): Promise<Entity>;
}
