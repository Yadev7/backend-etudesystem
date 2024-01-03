-- CreateTable
CREATE TABLE `Eleve` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numElevees` INTEGER NOT NULL,
    `nomEleve` VARCHAR(50) NOT NULL,
    `prenomEleve` VARCHAR(50) NOT NULL,
    `telEleve` VARCHAR(20) NOT NULL,
    `emailEleve` VARCHAR(50) NOT NULL,
    `login` VARCHAR(50) NOT NULL,
    `password` VARCHAR(10) NOT NULL,
    `idEtab` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Eleve` ADD CONSTRAINT `Eleve_idEtab_fkey` FOREIGN KEY (`idEtab`) REFERENCES `Etablissement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
