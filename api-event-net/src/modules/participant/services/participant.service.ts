import { Injectable } from "@nestjs/common";
import { ServiceBase } from "src/common/base";
import { CreateParticipantDto } from "src/domain/dtos/participant";
import { ParticipantEntity } from "src/domain/entities";
import { ParticipantRepository } from "../repositories/participant.repository";
import { CreateConversationDto } from "src/domain/dtos/conversation";



@Injectable()
export class ParticipantService implements ServiceBase<ParticipantEntity, CreateParticipantDto>{
  constructor(private readonly participantRepository: ParticipantRepository) {}

  async create(dto: CreateParticipantDto): Promise<ParticipantEntity>{
    return await this.participantRepository.create(dto)
  }

  async createMany(dto: CreateParticipantDto[]) {
    return await this.participantRepository.createMany(dto)
  }

}