import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';

import { SalleController } from './Configuration/Controllers/salle.controller';
import { SalleService } from './Configuration/Services/salle.service';

import { EtablissementController } from './Configuration/Controllers/etablissement.controller';
import { EtablissementService } from './Configuration/Services/etablissement.service';

import { UserController } from './Configuration/Controllers/user.controller';
import { UserService } from './Configuration/Services/user.service';

import { MatiereEnsgController } from './Configuration/Controllers/matiereensg.controller';
import { MatiereEnsgService } from './Configuration/Services/matiereensg.service';

import { MatiereController } from './Configuration/Controllers/matiere.controller';
import { MatiereService } from './Configuration/Services/matiere.service';

import { NiveauClassController } from './Configuration/Controllers/niveauclass.controller';
import { NiveauClassService } from './Configuration/Services/niveauclass.service';

import { DispoEnsgController } from './Configuration/Controllers/dispoensg.controller';
import { DispoEnsgService } from './Configuration/Services/dispoensg.service';

import { EnseignantController } from './Configuration/Controllers/enseignant.controller';
import { EnseignantService } from './Configuration/Services/enseignant.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { EleveController } from './Configuration/Controllers/eleve.controller';
import { EleveService } from './Configuration/Services/eleve.service';

// import { AbsenceController } from './Statistiques/Controllers/absence.controller';
// import { AbsenceService } from './Statistiques/Services/absence.service';

import { GroupeHeureController } from './Statistiques/Controllers/groupeheure.controller';
import { GroupeHeureService } from './Statistiques/Services/groupeheure.service';

import { EmploieController } from './Statistiques/Controllers/emploie.controller';
import { EmploieService } from './Statistiques/Services/emploie.service';

import { GroupeEnsgController } from './Statistiques/Controllers/groupeensg.controller';
import { GroupeEnsgService } from './Statistiques/Services/groupeensg.service';

import { InscriptionController } from './Statistiques/Controllers/inscription.controller';
import { InscriptionService } from './Statistiques/Services/inscription.service';

// import { PaiementInscriController } from './Statistiques/Controllers/paiementinscri.controller';
// import { PaiementInscriService } from './Statistiques/Services/paiementinscri.service';

import { FilesController } from './files.controller';
import { ActivitylogsController } from './Configuration/Controllers/activitylogs.controller';
import { ActivitylogsService } from './Configuration/Services/activitylogs.service';
import { PackController } from './Statistiques/Controllers/pack.controller';
import { PackService } from './Statistiques/Services/pack.service';

import { PackMatiereController } from './Statistiques/Controllers/packmatieres.controller';
import { PackMatiereService } from './Statistiques/Services/packmatieres.service';

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
    EleveController,
    // AbsenceController,
    GroupeHeureController,
    EmploieController,
    GroupeEnsgController,
    InscriptionController,
    // PaiementInscriController,
    ActivitylogsController,
    PackController,
    PackMatiereController
  
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
    EleveService,
    // AbsenceService,
    GroupeHeureService,
    EmploieService,
    GroupeEnsgService,
    InscriptionService,
    // PaiementInscriService,
    ActivitylogsService,
    PackService,
    PackMatiereService
  ],
})
export class AppModule {}
