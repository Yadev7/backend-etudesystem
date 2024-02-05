-- CreateTable
CREATE TABLE `Activitylogs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `idUser` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DispoEnsg` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idEnsg` INTEGER NULL,
    `jour` INTEGER NOT NULL,
    `heureDeb` VARCHAR(50) NOT NULL,
    `heureFin` VARCHAR(50) NULL,
    `idEtab` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Eleve` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(50) NOT NULL,
    `prenom` VARCHAR(50) NOT NULL,
    `num` DOUBLE NOT NULL,
    `idNiveau` INTEGER NULL,
    `email` VARCHAR(50) NOT NULL,
    `tel` VARCHAR(20) NOT NULL,
    `login` VARCHAR(50) NOT NULL,
    `pwd` VARCHAR(50) NOT NULL,
    `etat` INTEGER NOT NULL,
    `wallet` DOUBLE NOT NULL,
    `etabOrigine` VARCHAR(50) NOT NULL,
    `image` VARCHAR(200) NOT NULL,
    `fraisInsc` VARCHAR(50) NOT NULL,
    `idEtab` INTEGER NULL,
    `datePremiereInscription` DATETIME(3) NOT NULL,

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
    `taux` DOUBLE NOT NULL,
    `login` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `emailEnsg` VARCHAR(50) NOT NULL,
    `idEtab` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
CREATE TABLE `Matiere` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomMatiere` VARCHAR(50) NOT NULL,
    `idEtab` INTEGER NOT NULL,

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
CREATE TABLE `NiveauClass` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `refNiveau` VARCHAR(20) NOT NULL,
    `fraisInscri` VARCHAR(50) NOT NULL,
    `idEtab` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Salle` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomSalle` VARCHAR(50) NOT NULL,
    `typeSalle` VARCHAR(50) NOT NULL,
    `etage` VARCHAR(50) NOT NULL,
    `capacite` FLOAT NOT NULL,
    `idEtab` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomUser` VARCHAR(50) NOT NULL,
    `prenomUser` VARCHAR(50) NOT NULL,
    `fctUser` VARCHAR(50) NOT NULL,
    `roleUser` ENUM('ADMIN', 'USER', 'MANAGER') NOT NULL,
    `loginUser` VARCHAR(100) NOT NULL,
    `passwordUser` VARCHAR(50) NOT NULL,
    `statusCompte` ENUM('ACTIF', 'SUSPENDU', 'INACTIF') NOT NULL,
    `idEtab` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Inscription` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idGroupe` INTEGER NULL,
    `idEleve` INTEGER NULL,
    `prixMensuel` DOUBLE NOT NULL,
    `dateInscription` DATETIME(3) NOT NULL,
    `etatInscription` VARCHAR(50) NOT NULL,
    `dateSusp` DATETIME(3) NOT NULL,
    `dateReprise` DATETIME(3) NOT NULL,
    `idPack` INTEGER NULL,
    `idEtab` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GroupeHeure` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idNiveau` INTEGER NULL,
    `idEnsg` INTEGER NULL,
    `idMatiere` INTEGER NULL,
    `numGroupe` VARCHAR(191) NOT NULL,
    `type` ENUM('Soutiens', 'Libre') NOT NULL,
    `prix_mensuel` DOUBLE NULL,
    `modePaiementEns` ENUM('ParPourcentage', 'ParEleve', 'ParHeure', 'ParSeance', 'ForfaitMensuell') NOT NULL,
    `taux` DOUBLE NULL,
    `date_debut` DATETIME(3) NOT NULL,
    `date_fin` DATETIME(3) NOT NULL,
    `nbrHeureSemaine` DOUBLE NOT NULL,
    `etatGroupe` ENUM('En_instance', 'En_cours', 'Suspendue', 'Cloture') NOT NULL,
    `idEtab` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GroupeEnsg` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idGroupe` INTEGER NULL,
    `idEnsg` INTEGER NULL,
    `date_debut` DATETIME(3) NOT NULL,
    `date_fin` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Emploie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idGroupe` INTEGER NULL,
    `idSalle` INTEGER NULL,
    `idEnsg` INTEGER NULL,
    `idEleve` INTEGER NULL,
    `jour` INTEGER NOT NULL,
    `heureDebut` VARCHAR(50) NOT NULL,
    `heureFin` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pack` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(191) NOT NULL,
    `idNiveau` INTEGER NULL,
    `prixPack` DOUBLE NOT NULL,
    `idEtab` INTEGER NULL,
    `idMatiere` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PackMatieres` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idPack` INTEGER NOT NULL,
    `idMatiere` INTEGER NOT NULL,
    `prixMatiere` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Activitylogs` ADD CONSTRAINT `Activitylogs_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DispoEnsg` ADD CONSTRAINT `DispoEnsg_idEnsg_fkey` FOREIGN KEY (`idEnsg`) REFERENCES `Enseignant`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DispoEnsg` ADD CONSTRAINT `DispoEnsg_idEtab_fkey` FOREIGN KEY (`idEtab`) REFERENCES `Etablissement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eleve` ADD CONSTRAINT `Eleve_idNiveau_fkey` FOREIGN KEY (`idNiveau`) REFERENCES `NiveauClass`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eleve` ADD CONSTRAINT `Eleve_idEtab_fkey` FOREIGN KEY (`idEtab`) REFERENCES `Etablissement`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Enseignant` ADD CONSTRAINT `Enseignant_idEtab_fkey` FOREIGN KEY (`idEtab`) REFERENCES `Etablissement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Matiere` ADD CONSTRAINT `Matiere_idEtab_fkey` FOREIGN KEY (`idEtab`) REFERENCES `Etablissement`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MatiereEnsg` ADD CONSTRAINT `MatiereEnsg_idEtab_fkey` FOREIGN KEY (`idEtab`) REFERENCES `Etablissement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MatiereEnsg` ADD CONSTRAINT `MatiereEnsg_idEnsg_fkey` FOREIGN KEY (`idEnsg`) REFERENCES `Enseignant`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MatiereEnsg` ADD CONSTRAINT `MatiereEnsg_idMatiere_fkey` FOREIGN KEY (`idMatiere`) REFERENCES `Matiere`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NiveauClass` ADD CONSTRAINT `NiveauClass_idEtab_fkey` FOREIGN KEY (`idEtab`) REFERENCES `Etablissement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Salle` ADD CONSTRAINT `Salle_idEtab_fkey` FOREIGN KEY (`idEtab`) REFERENCES `Etablissement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_idEtab_fkey` FOREIGN KEY (`idEtab`) REFERENCES `Etablissement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inscription` ADD CONSTRAINT `Inscription_idGroupe_fkey` FOREIGN KEY (`idGroupe`) REFERENCES `GroupeHeure`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inscription` ADD CONSTRAINT `Inscription_idEleve_fkey` FOREIGN KEY (`idEleve`) REFERENCES `Eleve`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inscription` ADD CONSTRAINT `Inscription_idPack_fkey` FOREIGN KEY (`idPack`) REFERENCES `Pack`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inscription` ADD CONSTRAINT `Inscription_idEtab_fkey` FOREIGN KEY (`idEtab`) REFERENCES `Etablissement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GroupeHeure` ADD CONSTRAINT `GroupeHeure_idNiveau_fkey` FOREIGN KEY (`idNiveau`) REFERENCES `NiveauClass`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GroupeHeure` ADD CONSTRAINT `GroupeHeure_idEnsg_fkey` FOREIGN KEY (`idEnsg`) REFERENCES `Enseignant`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GroupeHeure` ADD CONSTRAINT `GroupeHeure_idMatiere_fkey` FOREIGN KEY (`idMatiere`) REFERENCES `Matiere`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GroupeHeure` ADD CONSTRAINT `GroupeHeure_idEtab_fkey` FOREIGN KEY (`idEtab`) REFERENCES `Etablissement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GroupeEnsg` ADD CONSTRAINT `GroupeEnsg_idGroupe_fkey` FOREIGN KEY (`idGroupe`) REFERENCES `GroupeHeure`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GroupeEnsg` ADD CONSTRAINT `GroupeEnsg_idEnsg_fkey` FOREIGN KEY (`idEnsg`) REFERENCES `Enseignant`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Emploie` ADD CONSTRAINT `Emploie_idGroupe_fkey` FOREIGN KEY (`idGroupe`) REFERENCES `GroupeHeure`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Emploie` ADD CONSTRAINT `Emploie_idSalle_fkey` FOREIGN KEY (`idSalle`) REFERENCES `Salle`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Emploie` ADD CONSTRAINT `Emploie_idEnsg_fkey` FOREIGN KEY (`idEnsg`) REFERENCES `Enseignant`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Emploie` ADD CONSTRAINT `Emploie_idEleve_fkey` FOREIGN KEY (`idEleve`) REFERENCES `Eleve`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pack` ADD CONSTRAINT `Pack_idNiveau_fkey` FOREIGN KEY (`idNiveau`) REFERENCES `NiveauClass`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pack` ADD CONSTRAINT `Pack_idEtab_fkey` FOREIGN KEY (`idEtab`) REFERENCES `Etablissement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pack` ADD CONSTRAINT `Pack_idMatiere_fkey` FOREIGN KEY (`idMatiere`) REFERENCES `Matiere`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PackMatieres` ADD CONSTRAINT `PackMatieres_idPack_fkey` FOREIGN KEY (`idPack`) REFERENCES `Pack`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PackMatieres` ADD CONSTRAINT `PackMatieres_idMatiere_fkey` FOREIGN KEY (`idMatiere`) REFERENCES `Matiere`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
