import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { SalleService } from './salle.service';
import { EtablissementService } from './etablissement.service';
import { UserService } from './user.service';
import { MatiereService } from './matiere.service';
import { FilesController } from './files.controller';
import { NiveauClassService } from './niveauclass.service';
import { EnseignantService } from './enseignant.service';
import { MatiereEnsgService } from './matiereensg.service';
import { DispoEnsgService } from './dispoensg.service';

@Module({
  imports: [],
  controllers: [AppController,FilesController],
  providers: [
    PrismaService,
    SalleService,
    EtablissementService,
    UserService,
    MatiereService,
    NiveauClassService,
    EnseignantService,
    MatiereEnsgService,
    DispoEnsgService,
  ],
   
})
export class AppModule {}
