-- CreateTable
CREATE TABLE `requests` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `number` INTEGER NOT NULL,
    `about` VARCHAR(191) NOT NULL,
    `heard_from` ENUM('INSTAGRAM', 'TELEGRAM', 'YOUTUBE', 'BANNER', 'OTHER', 'FRIEND') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
