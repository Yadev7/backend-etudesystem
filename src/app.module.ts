import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { SalleService } from './Configuration/Services/salle.service';
import { EtablissementService } from './Configuration/Services/etablissement.service';
import { UserService } from './Configuration/Services/user.service';
import { MatiereService } from './Configuration/Services/matiere.service';
import { FilesController } from './files.controller';
import { NiveauClassService } from './Configuration/Services/niveauclass.service';
import { EnseignantService } from './Configuration/Services/enseignant.service';
import { MatiereEnsgService } from './Configuration/Services/matiereensg.service';
import { DispoEnsgService } from './Configuration/Services/dispoensg.service';
import { UserController } from './Configuration/Controllers/user.controller';
import { SalleController } from './Configuration/Controllers/salle.controller';
import { EnseignantController } from './Configuration/Controllers/enseignant.controller';
import { MatiereController } from './Configuration/Controllers/matiere.controller';
import { EtablissementController } from './Configuration/Controllers/etablissement.controller';
import { DispoEnsgController } from './Configuration/Controllers/dispoensg.controller';
import { MatiereEnsgController } from './Configuration/Controllers/matiereensg.controller';
import { NiveauClassController } from './Configuration/Controllers/niveauclass.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EleveController } from './Configuration/Controllers/eleve.controller';
import { EleveService } from './Configuration/Services/eleve.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    UserController,
    FilesController,
    SalleController,
    EnseignantController,
    MatiereController,
    EtablissementController,
    DispoEnsgController,
    MatiereEnsgController,
    NiveauClassController,
    EleveController
  ],
  providers: [
    AppService,
    PrismaService,
    SalleService,
    EtablissementService,
    UserService,
    MatiereService,
    NiveauClassService,
    EnseignantService,
    MatiereEnsgService,
    DispoEnsgService,
    EleveService
  ],
})
export class AppModule {}
