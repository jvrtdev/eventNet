import { Injectable } from "@nestjs/common";
import { RepositoryFactory } from "src/common/factories";
import { CreateCommentDto, UpdateCommentDto } from "src/domain/dtos";
import { CommentEntity } from "src/domain/entities";



@Injectable()
export class CommentRepository extends RepositoryFactory<CommentEntity, CreateCommentDto, UpdateCommentDto> {
  constructor() {
    super('comment')
  }
}