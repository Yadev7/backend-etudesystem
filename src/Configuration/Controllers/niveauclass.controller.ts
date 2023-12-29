import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { NiveauClassService } from '../Services/niveauclass.service';
import { Prisma, NiveauClass as NiveauClassModel } from '@prisma/client';

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

  @Get('niveauxclass/etab/:id')
  async GetNiveauxclassByEtab(
    @Param('id') id: string,
  ): Promise<NiveauClassModel[]> {
    return this.niveauClassService.GetNiveauClassByEtab(Number(id));
  }
}
