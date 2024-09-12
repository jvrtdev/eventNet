import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from 'src/common/factories';
import { CreateFriendshipDto, CreateParticipantDto } from 'src/domain/dtos';
import { FriendshipEntity } from 'src/domain/entities';

@Injectable()
export class FriendshipRepository extends RepositoryFactory<
  FriendshipEntity,
  CreateFriendshipDto
> {
  constructor() {
    super('friendship');
  }
}
