-- CreateTable
CREATE TABLE "conversations_requests" (
    "id" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "recipientId" TEXT NOT NULL,

    CONSTRAINT "conversations_requests_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "conversations_requests" ADD CONSTRAINT "conversations_requests_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "conversations_requests" ADD CONSTRAINT "conversations_requests_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
