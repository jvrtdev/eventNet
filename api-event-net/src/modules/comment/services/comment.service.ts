import { Injectable } from "@nestjs/common";
import { ServiceBase } from "src/common/base";
import { CreateCommentDto, UpdateCommentDto } from "src/domain/dtos";
import { CommentEntity } from "src/domain/entities";
import { CommentRepository } from "../repositories/comment.repository";


@Injectable()
export class CommentSevice implements ServiceBase<CommentEntity, CreateCommentDto, UpdateCommentDto>{

  constructor(private readonly commentRepository: CommentRepository) {}
  
  async create(dto: CreateCommentDto): Promise<CommentEntity> {
    return this.commentRepository.create(dto);
  }
}