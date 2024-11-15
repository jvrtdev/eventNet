-- AlterTable
ALTER TABLE "events" ALTER COLUMN "qr_code" DROP NOT NULL,
ALTER COLUMN "image" DROP NOT NULL;

-- AlterTable
ALTER TABLE "profiles" ALTER COLUMN "avatar" SET DEFAULT 'https://ionicframework.com/docs/img/demos/avatar.svg';
