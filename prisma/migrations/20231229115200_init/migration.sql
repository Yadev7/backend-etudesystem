/*
  Warnings:

  - You are about to drop the column `descNiveau` on the `niveauclass` table. All the data in the column will be lost.
  - You are about to drop the column `montant` on the `niveauclass` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `niveauclass` DROP COLUMN `descNiveau`,
    DROP COLUMN `montant`;
