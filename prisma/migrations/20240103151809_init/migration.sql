-- AlterTable
ALTER TABLE `dispoensg` MODIFY `heureDeb` VARCHAR(191) NULL,
    MODIFY `heureFin` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Inscription` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numInscri` INTEGER NOT NULL,
    `taux_Reduct` INTEGER NOT NULL,
    `prix_mensuel` INTEGER NOT NULL,
    `date_inscri` DATETIME(3) NOT NULL,
    `etat_inscri` VARCHAR(191) NOT NULL,
    `idEtab` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GroupeHeure` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idNiveau` INTEGER NULL,
    `idEnsg` INTEGER NULL,
    `idMatiere` INTEGER NULL,
    `numGroupe` INTEGER NULL,
    `prix_mensuel` INTEGER NULL,
    `modePaiement` VARCHAR(191) NOT NULL,
    `taux` INTEGER NULL,
    `date_debut` DATETIME(3) NOT NULL,
    `date_fin` DATETIME(3) NOT NULL,
    `nbrHeureSemaine` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Absence` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idInscri` INTEGER NULL,
    `jour` INTEGER NOT NULL,
    `dateAbs` DATETIME(3) NOT NULL,
    `heureD` VARCHAR(191) NOT NULL,
    `heureF` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Inscription` ADD CONSTRAINT `Inscription_idEtab_fkey` FOREIGN KEY (`idEtab`) REFERENCES `Etablissement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GroupeHeure` ADD CONSTRAINT `GroupeHeure_idNiveau_fkey` FOREIGN KEY (`idNiveau`) REFERENCES `NiveauClass`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GroupeHeure` ADD CONSTRAINT `GroupeHeure_idEnsg_fkey` FOREIGN KEY (`idEnsg`) REFERENCES `Enseignant`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GroupeHeure` ADD CONSTRAINT `GroupeHeure_idMatiere_fkey` FOREIGN KEY (`idMatiere`) REFERENCES `Matiere`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Absence` ADD CONSTRAINT `Absence_idInscri_fkey` FOREIGN KEY (`idInscri`) REFERENCES `Inscription`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
