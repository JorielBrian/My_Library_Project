-- CreateTable
CREATE TABLE "Borrower" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "contact" INTEGER NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "borrowed" TEXT NOT NULL,
    "dateborrowed" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "datereturn" TIMESTAMP(3),

    CONSTRAINT "Borrower_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "isbn" TEXT,
    "intro" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "author" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "borrow" INTEGER NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
