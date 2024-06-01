/*
  Warnings:

  - You are about to drop the `lineup` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `lineup`;

-- CreateTable
CREATE TABLE `Festival` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `year` INTEGER NOT NULL,
    `location` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
