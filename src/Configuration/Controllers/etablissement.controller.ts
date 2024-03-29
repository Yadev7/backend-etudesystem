import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

import { Response } from 'express'; // Import 'Response' from 'express'

import { EtablissementService } from '../Services/etablissement.service';
import { Prisma, Etablissement as EtablissementModel } from '@prisma/client';

import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from 'multer';
import * as fs from 'fs';

import { retry } from 'rxjs';
import { UserService } from '../Services/user.service';
@Controller()
export class EtablissementController {
  constructor(
    private readonly etablissementService: EtablissementService,
    private readonly userService: UserService,
  ) {}


  // Get all etablissements
  @Get('etablissements')
  async getEtablissements(): Promise<EtablissementModel[]> {
    return this.etablissementService.etablissements({});
  }

  // @Get('etablissement/:id')
  // async getEtablissementById(
  //   @Param('id') id: string,
  // ): Promise<EtablissementModel | null> {
  //     return this.etablissementService.etablissement({
  //       id: Number(id),
  //     });
  // }

  // @Get('etablissement/:id')
  // async getEtablissementById(
  //   @Param('id') id: string,
  // ): Promise<EtablissementModel | null> {
  //   try {
  //     const etablissement = await this.etablissementService.etablissement({
  //       id: Number(id),
  //     });

  //     if (!etablissement) {
  //       throw new NotFoundException('Etablissement not found');
  //     }

  //     return etablissement;
  //   } catch (error) {
  //     throw new NotFoundException('Etablissement not found');
  //   }
  // }


  // Get etablissement by ID
  @Get('etablissement/:id')
  async getEtablissementById(
    @Param('id') id: string,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const etablissement = await this.etablissementService.etablissement({
        id: Number(id),
      });

      if (!etablissement) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Etablissement not found' });
      }

      return res.json(etablissement);
    } catch (error) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'Etablissement not found' });
    }
  }


  // Create a new etablissement
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
      roleUser: 'ADMIN',
      statusCompte: 'ACTIF',
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

  // Delete an etablissement
  @Delete('etablissement/:id')
  async deleteEtablissement(
    @Param('id') id: string,
  ): Promise<EtablissementModel> {
    return this.etablissementService.deleteEtablissement({
      id: Number(id),
    });
  }


  // Update an etablissement
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


  // Upload a file
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
  
}
