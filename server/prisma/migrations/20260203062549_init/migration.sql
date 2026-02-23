/*
  Warnings:

  - You are about to drop the `cover_image` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[title]` on the table `project_category` will be added. If there are existing duplicate values, this will fail.

*/
-- DropTable
DROP TABLE `cover_image`;

-- CreateIndex
CREATE UNIQUE INDEX `project_category_title_key` ON `project_category`(`title`);
