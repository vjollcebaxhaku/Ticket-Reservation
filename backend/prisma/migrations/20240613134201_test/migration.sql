/*
  Warnings:

  - Added the required column `concertID` to the `Lineup` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lineup` ADD COLUMN `concertID` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Concert` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `year` INTEGER NOT NULL,
    `location` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Lineup` ADD CONSTRAINT `Lineup_concertID_fkey` FOREIGN KEY (`concertID`) REFERENCES `Concert`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
