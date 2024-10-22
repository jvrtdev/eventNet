/*
  Warnings:

  - Added the required column `conversationId` to the `conversations_requests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "conversations_requests" ADD COLUMN     "conversationId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "conversations_requests" ADD CONSTRAINT "conversations_requests_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "conversations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
