-- AlterTable
ALTER TABLE "messages" ALTER COLUMN "is_read" DROP NOT NULL,
ALTER COLUMN "is_read" SET DEFAULT false;
