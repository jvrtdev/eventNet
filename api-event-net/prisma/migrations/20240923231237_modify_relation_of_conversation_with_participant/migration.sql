-- DropForeignKey
ALTER TABLE "participants" DROP CONSTRAINT "participants_conversation_id_fkey";

-- AddForeignKey
ALTER TABLE "participants" ADD CONSTRAINT "participants_conversation_id_fkey" FOREIGN KEY ("conversation_id") REFERENCES "conversations"("id") ON DELETE CASCADE ON UPDATE CASCADE;
