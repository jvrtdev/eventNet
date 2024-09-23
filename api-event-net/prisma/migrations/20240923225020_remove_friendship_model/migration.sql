/*
  Warnings:

  - You are about to drop the `friendships` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "friendships" DROP CONSTRAINT "friendships_conversationId_fkey";

-- DropForeignKey
ALTER TABLE "friendships" DROP CONSTRAINT "friendships_friendId_fkey";

-- DropForeignKey
ALTER TABLE "friendships" DROP CONSTRAINT "friendships_userId_fkey";

-- AlterTable
ALTER TABLE "conversations" ADD COLUMN     "status" "FriendshipStatus" DEFAULT 'pending';

-- DropTable
DROP TABLE "friendships";
