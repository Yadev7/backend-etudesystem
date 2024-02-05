/*
  Warnings:

  - You are about to alter the column `jour` on the `emploie` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Enum(EnumId(6))`.

*/
-- AlterTable
ALTER TABLE `emploie` MODIFY `jour` ENUM('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi') NOT NULL;
