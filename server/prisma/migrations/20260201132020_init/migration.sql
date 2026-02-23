/*
  Warnings:

  - You are about to drop the column `description` on the `services` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `services` table. All the data in the column will be lost.
  - Added the required column `icon_public_id` to the `Services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `localeData` to the `Services` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `services` DROP COLUMN `description`,
    DROP COLUMN `title`,
    ADD COLUMN `icon_public_id` INTEGER NOT NULL,
    ADD COLUMN `localeData` JSON NOT NULL;
