import { Injectable } from "@nestjs/common";
import { RepositoryFactory } from "src/common/factories";
import { CreateLikeDto } from "src/domain/dtos";
import { LikeEntity } from "src/domain/entities";




@Injectable()
export class LikeRepository extends RepositoryFactory<LikeEntity, CreateLikeDto>{
  constructor() {
    super('like')
  }
}