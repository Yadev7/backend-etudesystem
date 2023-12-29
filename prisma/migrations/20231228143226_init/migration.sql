/*
  Warnings:

  - You are about to drop the column `descMat` on the `matiere` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `matiere` DROP COLUMN `descMat`;

-- AlterTable
ALTER TABLE `matiereensg` ADD COLUMN `idEnsg` INTEGER NULL,
    ADD COLUMN `idMatiere` INTEGER NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `loginUser` VARCHAR(100) NOT NULL;
