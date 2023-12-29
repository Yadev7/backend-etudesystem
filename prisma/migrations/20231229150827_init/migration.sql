/*
  Warnings:

  - You are about to drop the column `fctEnsg` on the `enseignant` table. All the data in the column will be lost.
  - You are about to drop the column `refMatiere` on the `matiereensg` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `dispoensg` MODIFY `idEnsg` INTEGER NULL;

-- AlterTable
ALTER TABLE `enseignant` DROP COLUMN `fctEnsg`;

-- AlterTable
ALTER TABLE `matiereensg` DROP COLUMN `refMatiere`;

-- AddForeignKey
ALTER TABLE `MatiereEnsg` ADD CONSTRAINT `MatiereEnsg_idEnsg_fkey` FOREIGN KEY (`idEnsg`) REFERENCES `Enseignant`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MatiereEnsg` ADD CONSTRAINT `MatiereEnsg_idMatiere_fkey` FOREIGN KEY (`idMatiere`) REFERENCES `Matiere`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DispoEnsg` ADD CONSTRAINT `DispoEnsg_idEnsg_fkey` FOREIGN KEY (`idEnsg`) REFERENCES `Enseignant`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
