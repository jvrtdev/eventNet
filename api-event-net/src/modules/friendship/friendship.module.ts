import { Module } from "@nestjs/common";
import { FriendshipService } from "./services/friendship.service";
import { FriendshipRepository } from "./repositories/friendship.repository";
import { FriendshipController } from "./controllers/friendship.controller";


@Module({
  controllers: [FriendshipController],
  providers: [FriendshipService, FriendshipRepository],
  exports: [FriendshipService]
})
export class FriendshipModule {}