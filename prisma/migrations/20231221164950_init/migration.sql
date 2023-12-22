-- CreateTable
CREATE TABLE `Etablissement` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomEtab` VARCHAR(50) NOT NULL,
    `typeEtab` VARCHAR(50) NOT NULL,
    `descEtab` VARCHAR(200) NOT NULL,
    `nomResp` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `tel` VARCHAR(20) NOT NULL,
    `logo` LONGTEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomUser` VARCHAR(50) NOT NULL,
    `prenomUser` VARCHAR(50) NOT NULL,
    `fctUser` VARCHAR(50) NOT NULL,
    `roleUser` VARCHAR(50) NOT NULL,
    `loginUser` VARCHAR(20) NOT NULL,
    `passwordUser` VARCHAR(10) NOT NULL,
    `statusCompte` VARCHAR(50) NOT NULL,
    `idEtab` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Salle` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomSalle` VARCHAR(50) NOT NULL,
    `typeSalle` VARCHAR(50) NOT NULL,
    `etage` VARCHAR(50) NOT NULL,
    `capacite` INTEGER NOT NULL,
    `idEtab` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Matiere` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomMatiere` VARCHAR(50) NOT NULL,
    `descMat` VARCHAR(200) NOT NULL,
    `idEtab` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NiveauClass` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `refNiveau` VARCHAR(20) NOT NULL,
    `descNiveau` VARCHAR(200) NOT NULL,
    `fraisInscri` INTEGER NOT NULL,
    `montant` INTEGER NOT NULL,
    `idEtab` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Enseignant` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomEnsg` VARCHAR(50) NOT NULL,
    `prenomEnsg` VARCHAR(50) NOT NULL,
    `fctEnsg` VARCHAR(50) NOT NULL,
    `telEnsg` VARCHAR(20) NOT NULL,
    `adresseEnsg` VARCHAR(200) NOT NULL,
    `modePaiement` VARCHAR(50) NOT NULL,
    `taux` INTEGER NOT NULL,
    `login` VARCHAR(50) NOT NULL,
    `password` VARCHAR(10) NOT NULL,
    `emailEnsg` VARCHAR(50) NOT NULL,
    `idEtab` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MatiereEnsg` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `refMatiere` VARCHAR(20) NOT NULL,
    `idEtab` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DispoEnsg` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idEnsg` INTEGER NOT NULL,
    `jour` INTEGER NOT NULL,
    `heureDeb` INTEGER NOT NULL,
    `heureFin` INTEGER NOT NULL,
    `idEtab` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_idEtab_fkey` FOREIGN KEY (`idEtab`) REFERENCES `Etablissement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Salle` ADD CONSTRAINT `Salle_idEtab_fkey` FOREIGN KEY (`idEtab`) REFERENCES `Etablissement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Matiere` ADD CONSTRAINT `Matiere_idEtab_fkey` FOREIGN KEY (`idEtab`) REFERENCES `Etablissement`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NiveauClass` ADD CONSTRAINT `NiveauClass_idEtab_fkey` FOREIGN KEY (`idEtab`) REFERENCES `Etablissement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Enseignant` ADD CONSTRAINT `Enseignant_idEtab_fkey` FOREIGN KEY (`idEtab`) REFERENCES `Etablissement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MatiereEnsg` ADD CONSTRAINT `MatiereEnsg_idEtab_fkey` FOREIGN KEY (`idEtab`) REFERENCES `Etablissement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DispoEnsg` ADD CONSTRAINT `DispoEnsg_idEtab_fkey` FOREIGN KEY (`idEtab`) REFERENCES `Etablissement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
