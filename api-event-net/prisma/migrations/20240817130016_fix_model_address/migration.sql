-- AlterTable
ALTER TABLE "address" ALTER COLUMN "city" DROP NOT NULL,
ALTER COLUMN "state" DROP NOT NULL,
ALTER COLUMN "neighborhood" DROP NOT NULL;