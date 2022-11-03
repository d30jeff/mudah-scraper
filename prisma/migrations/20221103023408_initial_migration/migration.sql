-- CreateTable
CREATE TABLE "User" (
    "ID" TEXT NOT NULL,
    "name" TEXT,
    "subject" TEXT,
    "location" TEXT,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");
