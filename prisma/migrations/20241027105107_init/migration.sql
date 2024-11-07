CREATE EXTENSION IF NOT EXISTS postgis;


-- CreateTable
CREATE TABLE "rates" (
    "rate_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "base_fare" INTEGER ,
    "additional_charges" INTEGER,
    "distance_fare" INTEGER,
    "time_fare" INTEGER,

    CONSTRAINT "rates_pkey" PRIMARY KEY ("rate_id")
);