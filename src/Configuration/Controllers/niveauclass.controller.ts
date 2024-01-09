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
} from '@nestjs/common';

import { NiveauClassService } from '../Services/niveauclass.service';
import { Prisma, NiveauClass as NiveauClassModel } from '@prisma/client';
import { Response } from 'express';

@Controller()
export class NiveauClassController {
  constructor(private readonly niveauClassService: NiveauClassService) {}

  @Get('niveauxclasses')
  async getNiveauxclasses(): Promise<NiveauClassModel[]> {
    return this.niveauClassService.niveauClasses({});
  }

  @Get('niveauxclass/:id')
  async getNiveauxclassById(
    @Param('id') id: string,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const niveauClass = await this.niveauClassService.niveauClass({
        id: Number(id),
      });
      if (!niveauClass) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Salle not found' });
      }
      return niveauClass;
    } catch (error) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'Salle not found' });
    }
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

  @Get('niveauxclass/etab/:id')
  async GetNiveauxclassByEtab(
    @Param('id') id: string,
  ): Promise<NiveauClassModel[]> {
    return this.niveauClassService.GetNiveauClassByEtab(Number(id));
  }
}
