/*
  Warnings:

  - You are about to alter the column `logo` on the `etablissement` table. The data in that column could be lost. The data in that column will be cast from `Blob` to `LongText`.

*/
-- AlterTable
ALTER TABLE `etablissement` MODIFY `logo` LONGTEXT NULL;
