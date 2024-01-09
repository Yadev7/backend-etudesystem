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
    `loginUser` VARCHAR(100) NOT NULL,
    `passwordUser` VARCHAR(50) NOT NULL,
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
    `idEtab` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NiveauClass` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `refNiveau` VARCHAR(20) NOT NULL,
    `fraisInscri` VARCHAR(50) NOT NULL,
    `idEtab` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Enseignant` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomEnsg` VARCHAR(50) NOT NULL,
    `prenomEnsg` VARCHAR(50) NOT NULL,
    `telEnsg` VARCHAR(20) NOT NULL,
    `adresseEnsg` VARCHAR(200) NOT NULL,
    `modePaiement` VARCHAR(50) NOT NULL,
    `taux` INTEGER NOT NULL,
    `login` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `emailEnsg` VARCHAR(50) NOT NULL,
    `idEtab` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MatiereEnsg` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idEtab` INTEGER NULL,
    `idEnsg` INTEGER NULL,
    `idMatiere` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DispoEnsg` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idEnsg` INTEGER NULL,
    `jour` INTEGER NOT NULL,
    `heureDeb` VARCHAR(191) NULL,
    `heureFin` VARCHAR(191) NULL,
    `idEtab` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Eleve` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numElevees` INTEGER NOT NULL,
    `nomEleve` VARCHAR(50) NOT NULL,
    `prenomEleve` VARCHAR(50) NOT NULL,
    `telEleve` VARCHAR(20) NOT NULL,
    `emailEleve` VARCHAR(50) NOT NULL,
    `login` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `idEtab` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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

-- CreateTable
CREATE TABLE `GroupeEnsg` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idGroupe` INTEGER NULL,
    `date_debut` DATETIME(3) NOT NULL,
    `date_fin` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PaiementInscription` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `moisPay` INTEGER NOT NULL,
    `montantPay` INTEGER NOT NULL,
    `datePay` DATETIME(3) NOT NULL,
    `modePay` VARCHAR(191) NOT NULL,
    `idInscri` INTEGER NULL,
    `idGroupe` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Emploie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idGroupe` INTEGER NULL,
    `idSalle` INTEGER NULL,
    `jour` INTEGER NOT NULL,
    `heureDeb` VARCHAR(191) NOT NULL,
    `heureFin` VARCHAR(191) NOT NULL,

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
ALTER TABLE `MatiereEnsg` ADD CONSTRAINT `MatiereEnsg_idEnsg_fkey` FOREIGN KEY (`idEnsg`) REFERENCES `Enseignant`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MatiereEnsg` ADD CONSTRAINT `MatiereEnsg_idMatiere_fkey` FOREIGN KEY (`idMatiere`) REFERENCES `Matiere`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DispoEnsg` ADD CONSTRAINT `DispoEnsg_idEnsg_fkey` FOREIGN KEY (`idEnsg`) REFERENCES `Enseignant`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DispoEnsg` ADD CONSTRAINT `DispoEnsg_idEtab_fkey` FOREIGN KEY (`idEtab`) REFERENCES `Etablissement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eleve` ADD CONSTRAINT `Eleve_idEtab_fkey` FOREIGN KEY (`idEtab`) REFERENCES `Etablissement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE `GroupeEnsg` ADD CONSTRAINT `GroupeEnsg_idGroupe_fkey` FOREIGN KEY (`idGroupe`) REFERENCES `GroupeHeure`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PaiementInscription` ADD CONSTRAINT `PaiementInscription_idInscri_fkey` FOREIGN KEY (`idInscri`) REFERENCES `Inscription`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PaiementInscription` ADD CONSTRAINT `PaiementInscription_idGroupe_fkey` FOREIGN KEY (`idGroupe`) REFERENCES `GroupeHeure`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Emploie` ADD CONSTRAINT `Emploie_idGroupe_fkey` FOREIGN KEY (`idGroupe`) REFERENCES `GroupeHeure`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Emploie` ADD CONSTRAINT `Emploie_idSalle_fkey` FOREIGN KEY (`idSalle`) REFERENCES `Salle`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
