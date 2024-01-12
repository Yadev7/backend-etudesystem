/*
  Warnings:

  - You are about to alter the column `heureD` on the `absence` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `heureF` on the `absence` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `heureFin` on the `dispoensg` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `heureDeb` on the `emploie` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `heureFin` on the `emploie` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `modePaiement` on the `groupeheure` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `etat_inscri` on the `inscription` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `modePay` on the `paiementinscription` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - Made the column `heureDeb` on table `dispoensg` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `etabOrigine` to the `Eleve` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wallet` to the `Eleve` table without a default value. This is not possible if the table is not empty.
  - Added the required column `etatGroupe` to the `GroupeHeure` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_dern_reprise` to the `Inscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_susp` to the `Inscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_susp` to the `PaiementInscription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `absence` MODIFY `heureD` VARCHAR(50) NOT NULL,
    MODIFY `heureF` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `dispoensg` MODIFY `heureDeb` VARCHAR(50) NOT NULL,
    MODIFY `heureFin` VARCHAR(50) NULL;

-- AlterTable
ALTER TABLE `eleve` ADD COLUMN `etabOrigine` VARCHAR(50) NOT NULL,
    ADD COLUMN `wallet` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `emploie` ADD COLUMN `idEnsg` INTEGER NULL,
    MODIFY `heureDeb` VARCHAR(50) NOT NULL,
    MODIFY `heureFin` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `groupeensg` ADD COLUMN `idEnsg` INTEGER NULL;

-- AlterTable
ALTER TABLE `groupeheure` ADD COLUMN `etatGroupe` VARCHAR(50) NOT NULL,
    ADD COLUMN `prix_fix_eleve` INTEGER NULL,
    MODIFY `modePaiement` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `inscription` ADD COLUMN `date_dern_reprise` DATETIME(3) NOT NULL,
    ADD COLUMN `date_susp` DATETIME(3) NOT NULL,
    MODIFY `etat_inscri` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `paiementinscription` ADD COLUMN `date_susp` DATETIME(3) NOT NULL,
    MODIFY `modePay` VARCHAR(50) NOT NULL;

-- AddForeignKey
ALTER TABLE `GroupeEnsg` ADD CONSTRAINT `GroupeEnsg_idEnsg_fkey` FOREIGN KEY (`idEnsg`) REFERENCES `Enseignant`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Emploie` ADD CONSTRAINT `Emploie_idEnsg_fkey` FOREIGN KEY (`idEnsg`) REFERENCES `Enseignant`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
