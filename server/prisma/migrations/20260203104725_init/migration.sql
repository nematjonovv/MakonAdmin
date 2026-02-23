/*
  Warnings:

  - You are about to drop the column `localeData` on the `projects` table. All the data in the column will be lost.
  - Added the required column `localizedContent` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `projects` DROP COLUMN `localeData`,
    ADD COLUMN `localizedContent` JSON NOT NULL;

-- CreateTable
CREATE TABLE `cover_image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `projectId` INTEGER NOT NULL,
    `image_light` VARCHAR(191) NOT NULL,
    `image_dark` VARCHAR(191) NOT NULL,
    `image_light_public_id` VARCHAR(191) NULL,
    `image_dark_public_id` VARCHAR(191) NULL,
    `image_alt` JSON NOT NULL,

    UNIQUE INDEX `cover_image_projectId_key`(`projectId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `project_gallery` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `projectId` INTEGER NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `image_public_id` VARCHAR(191) NULL,
    `image_alt` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cover_image` ADD CONSTRAINT `cover_image_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `projects`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_gallery` ADD CONSTRAINT `project_gallery_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `projects`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
