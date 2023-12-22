import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

import { UserService } from './user.service';
import { SalleService } from './salle.service';
import { EtablissementService } from './etablissement.service';
import { EnseignantService } from './enseignant.service';
import { MatiereEnsgService } from './matiereensg.service';
import { DispoEnsgService } from './dispoensg.service';
import { NiveauClassService } from './niveauclass.service';

import {
  Prisma,
  Etablissement as EtablissementModel,
  Salle as SalleModel,
  User as UserModel,
  Matiere as MatiereModel,
  NiveauClass as NiveauClassModel,
  Enseignant as EnseignantModel,
  MatiereEnsg as MatiereEnsgModel,
  DispoEnsg as DispoEnsgModel,
} from '@prisma/client';
import { MatiereService } from './matiere.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from 'multer';
import * as fs from 'fs';

import { retry } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    private readonly etablissementService: EtablissementService,
    private readonly salleService: SalleService,
    private readonly userService: UserService,
    private readonly matiereService: MatiereService,
    private readonly niveauClassService: NiveauClassService,
    private readonly enseignantService: EnseignantService,
    private readonly matiereEnsgService: MatiereEnsgService,
    private readonly dispoEnsgService: DispoEnsgService,
  ) {}

  //Salle

  @Get('salles')
  async getSalles(): Promise<SalleModel[]> {
    return this.salleService.salles({});
  }

  @Get('salle/:id')
  async getSalleById(@Param('id') id: string): Promise<SalleModel | null> {
    return this.salleService.salle({
      id: Number(id),
    });
  }

  @Get('salle/etab/:id')
  async GetSalleByEtab(@Param('id') id: string): Promise<SalleModel[]> {
    return this.salleService.GetSalleByEtab(Number(id));
  }

  @Post('salle')
  async createSalle(
    @Body() data: Prisma.SalleCreateInput,
  ): Promise<SalleModel> {
    return this.salleService.createSalle(data);
  }

  @Put('salle/:id')
  async updateSalle(
    @Param('id') id: string,
    @Body() data: Prisma.SalleUpdateInput,
  ): Promise<SalleModel> {
    return this.salleService.updateSalle({
      where: { id: Number(id) },
      data,
    });
  }

  @Delete('salle/:id')
  async deleteSalle(@Param('id') id: string): Promise<SalleModel> {
    return this.salleService.deleteSalle({
      id: Number(id),
    });
  }

  // ----------------------------------

  //Etablissement
  @Get('etablissements')
  async getEtablissements(): Promise<EtablissementModel[]> {
    return this.etablissementService.etablissements({});
  }

  @Get('etablissement/:id')
  async getEtablissementById(
    @Param('id') id: string,
  ): Promise<EtablissementModel | null> {
    return this.etablissementService.etablissement({
      id: Number(id),
    });
  }

  // @Post('etablissement')
  // async createEtablissement(
  //   @Body() data: Prisma.EtablissementCreateInput,
  // ): Promise<EtablissementModel> {
  //   return this.etablissementService.createEtablissement(data);
  // }

  @Post('etablissement')
  async createEtablissement(
    @Body() etabData: Prisma.EtablissementCreateInput,
  ): Promise<EtablissementModel> {
    const newEtablissement =
      await this.etablissementService.createEtablissement(etabData);
    console.log(newEtablissement);
    const adminUserData: Prisma.UserCreateInput = {
      nomUser: 'Admin',
      prenomUser: 'Admin',
      fctUser: 'admin',
      roleUser: 'admin',
      statusCompte: '1',
      loginUser: newEtablissement.email,
      passwordUser: 'admin',
      etablissement: {
        connect: {
          id: newEtablissement.id,
        },
      },
    };

    await this.userService.createUser(adminUserData);

    return newEtablissement;
  }

  @Delete('etablissement/:id')
  async deleteEtablissement(
    @Param('id') id: string,
  ): Promise<EtablissementModel> {
    return this.etablissementService.deleteEtablissement({
      id: Number(id),
    });
  }

  @Put('etablissement/:id')
  async updateEtablissement(
    @Param('id') id: string,
    @Body() data: Prisma.EtablissementUpdateInput,
  ): Promise<EtablissementModel> {
    return this.etablissementService.updateEtablissement({
      where: { id: Number(id) },
      data,
    });
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: (req, file, callback) => {
          let folder = './files/';
          if (req.query) {
            if (req.query.type) {
              if (req.query.type == 'rep') {
                if (req.query.folder && req.query.folder != '') {
                  folder += '/' + req.query.folder;
                  !fs.existsSync(folder) &&
                    fs.mkdirSync(folder, { recursive: true });
                }
              }
            }
          }
          callback(null, `${folder}`);
        },
        filename: (req, file, callback) => {
          const name = file.originalname.split('.')[0];
          const fileExtName = extname(file.originalname);
          const randomName = Array(4)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          callback(null, `${name}-${randomName}${fileExtName}`);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };

    console.log(response.filename);
    retry;
  }

  // ----------------------------------

  // Users
  @Get('users')
  async getUsers(): Promise<UserModel[]> {
    return this.userService.users({});
  }

  @Get('user/:id')
  async getUserById(@Param('id') id: string): Promise<UserModel | null> {
    return this.userService.user({
      id: Number(id),
    });
  }

  @Post('user')
  async createUser(@Body() data: Prisma.UserCreateInput): Promise<UserModel> {
    return this.userService.createUser(data);
  }

  @Delete('user/:id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    return this.userService.deleteUser({
      id: Number(id),
    });
  }

  @Put('user/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: Prisma.UserUpdateInput,
  ): Promise<UserModel> {
    return this.userService.updateUser({
      where: { id: Number(id) },
      data,
    });
  }

  //------------------------------------

  //Matières

  @Get('matieres')
  async getMatieres(): Promise<MatiereModel[]> {
    return this.matiereService.matieres({});
  }

  @Get('matiere/:id')
  async getMatiereById(@Param('id') id: string): Promise<MatiereModel | null> {
    return this.matiereService.matiere({
      id: Number(id),
    });
  }

  @Post('matiere')
  async createMatiere(
    @Body() data: Prisma.MatiereCreateInput,
  ): Promise<MatiereModel> {
    return this.matiereService.createMatiere(data);
  }

  @Delete('matiere/:id')
  async deleteMatiere(@Param('id') id: string): Promise<MatiereModel> {
    return this.matiereService.deleteMatiere({
      id: Number(id),
    });
  }

  @Put('matiere/:id')
  async updateMatiere(
    @Param('id') id: string,
    @Body() data: Prisma.MatiereUpdateInput,
  ): Promise<MatiereModel> {
    return this.matiereService.updateMatiere({
      where: { id: Number(id) },
      data,
    });
  }

  // ------------------------------------
  // NiveauxClasses

  @Get('niveauxclasses')
  async getNiveauxclasses(): Promise<NiveauClassModel[]> {
    return this.niveauClassService.niveauClasses({});
  }

  @Get('niveauxclass/:id')
  async getNiveauxclassById(
    @Param('id') id: string,
  ): Promise<NiveauClassModel | null> {
    return this.niveauClassService.niveauClass({
      id: Number(id),
    });
  }

  @Post('niveauxclass')
  async createNiveauxclass(
    @Body() data: Prisma.NiveauClassCreateInput,
  ): Promise<NiveauClassModel> {
    return this.niveauClassService.createNiveauClass(data);
  }

  @Delete('niveauxclass/:id')
  async deleteNiveauxclass(@Param('id') id: string): Promise<NiveauClassModel> {
    return this.niveauClassService.deleteNiveauClass({
      id: Number(id),
    });
  }

  @Put('niveauxclass/:id')
  async updateNiveauxclass(
    @Param('id') id: string,
    @Body() data: Prisma.NiveauClassUpdateInput,
  ): Promise<NiveauClassModel> {
    return this.niveauClassService.updateNiveauClass({
      where: { id: Number(id) },
      data,
    });
  }

  //------------------------------------------------------------------------------
  //Enseignant

  @Get('/enseignants')
  async getEnseignants(): Promise<EnseignantModel[]> {
    return this.enseignantService.enseignants({});
  }

  @Get('/enseignant/:id')
  async getEnseignantById(
    @Param('id') id: string,
  ): Promise<EnseignantModel | null> {
    return this.enseignantService.enseignant({
      id: Number(id),
    });
  }

  @Post('/enseignant')
  async createEnseignant(
    @Body() data: Prisma.EnseignantCreateInput,
  ): Promise<EnseignantModel> {
    return this.enseignantService.createEnseignant(data);
  }

  @Delete('/enseignant/:id')
  async deleteEnseignant(@Param('id') id: string): Promise<EnseignantModel> {
    return this.enseignantService.deleteEnseignant({
      id: Number(id),
    });
  }

  @Put('/enseignant/:id')
  async updateEnseignant(
    @Param('id') id: string,
    @Body() data: Prisma.EnseignantUpdateInput,
  ): Promise<EnseignantModel> {
    return this.enseignantService.updateEnseignant({
      where: { id: Number(id) },
      data,
    });
  }

  //------------------------------------------------------------------------------
  //MatièresEnsg

  @Get('/matieresEnsgs')
  async getMatieresEnsg(): Promise<MatiereEnsgModel[]> {
    return this.matiereEnsgService.matiereEnsgs({});
  }

  @Get('/matiereEnsg/:id')
  async getMatiereEnsgById(
    @Param('id') id: string,
  ): Promise<MatiereEnsgModel | null> {
    return this.matiereEnsgService.matiereEnsg({
      id: Number(id),
    });
  }

  @Post('/matiereEnsg')
  async createMatiereEnsg(
    @Body() data: Prisma.MatiereEnsgCreateInput,
  ): Promise<MatiereEnsgModel> {
    return this.matiereEnsgService.createMatiereEnsg(data);
  }

  @Delete('/matiereEnsg/:id')
  async deleteMatiereEnsg(@Param('id') id: string): Promise<MatiereEnsgModel> {
    return this.matiereEnsgService.deleteMatiereEnsg({
      id: Number(id),
    });
  }

  @Put('/matiereEnsg/:id')
  async updateMatiereEnsg(
    @Param('id') id: string,
    @Body() data: Prisma.MatiereEnsgUpdateInput,
  ): Promise<MatiereEnsgModel> {
    return this.matiereEnsgService.updateMatiereEnsg({
      where: { id: Number(id) },
      data,
    });
  }

  //------------------------------------------------------------------------------

  //dispoEnsg

  @Get('/dispoEnsgs')
  async getDispoEnsg(): Promise<DispoEnsgModel[]> {
    return this.dispoEnsgService.dispoEnsgs({});
  }

  @Get('/dispoEnsg/:id')
  async getDispoEnsgById(
    @Param('id') id: string,
  ): Promise<DispoEnsgModel | null> {
    return this.dispoEnsgService.dispoEnsg({
      id: Number(id),
    });
  }

  @Post('/dispoEnsg')
  async createDispoEnsg(
    @Body() data: Prisma.DispoEnsgCreateInput,
  ): Promise<DispoEnsgModel> {
    return this.dispoEnsgService.createDispoEnsg(data);
  }

  @Delete('/dispoEnsg/:id')
  async deleteDispoEnsg(@Param('id') id: string): Promise<DispoEnsgModel> {
    return this.dispoEnsgService.deleteDispoEnsg({
      id: Number(id),
    });
  }

  @Put('/dispoEnsg/:id')
  async updateDispoEnsg(
    @Param('id') id: string,
    @Body() data: Prisma.DispoEnsgUpdateInput,
  ): Promise<DispoEnsgModel> {
    return this.dispoEnsgService.updateDispoEnsg({
      where: { id: Number(id) },
      data,
    });
  }
}
