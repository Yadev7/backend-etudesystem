-- CreateTable
CREATE TABLE `Jours` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom_jours` ENUM('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
