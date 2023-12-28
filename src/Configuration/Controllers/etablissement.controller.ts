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

  @Post('etablissement')
  async createEtablissement(
    @Body() data: Prisma.EtablissementCreateInput,
  ): Promise<EtablissementModel> {
    return this.etablissementService.createEtablissement(data);
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
}
