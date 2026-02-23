/*
  Warnings:

  - You are about to drop the column `content` on the `testimonials` table. All the data in the column will be lost.
  - You are about to drop the column `position` on the `testimonials` table. All the data in the column will be lost.
  - Added the required column `alt_image` to the `testimonials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `localized_content` to the `testimonials` table without a default value. This is not possible if the table is not empty.
  - Made the column `video_url` on table `testimonials` required. This step will fail if there are existing NULL values in that column.
  - Made the column `video_public_id` on table `testimonials` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `testimonials` DROP COLUMN `content`,
    DROP COLUMN `position`,
    ADD COLUMN `alt_image` JSON NOT NULL,
    ADD COLUMN `localized_content` JSON NOT NULL,
    MODIFY `video_url` VARCHAR(191) NOT NULL,
    MODIFY `video_public_id` VARCHAR(191) NOT NULL;
