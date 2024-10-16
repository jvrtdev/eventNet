import { ServiceBase } from '@bases';
import { CreateUserEventDto, UpdateUserEventDto } from '@dtos';
import { UserEventEntity } from '@entities';
import { UserEventRepository } from '../repositories/userEvent.reposiory';

export class UserEventService
  implements
    ServiceBase<UserEventEntity, CreateUserEventDto, UpdateUserEventDto>
{
  constructor(private readonly userEventRepository: UserEventRepository) {}

  async create(dto: CreateUserEventDto): Promise<UserEventEntity> {
    const useEvent = await this.userEventRepository.create(dto);

    return useEvent;
  }
}
