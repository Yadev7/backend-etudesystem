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

  // Get all niveauxclasses
  @Get('niveauxclasses')
  async getNiveauxclasses(): Promise<NiveauClassModel[]> {
    return this.niveauClassService.niveauClasses({});
  }

  // Get niveauxclasses by Etablissement
  @Get('niveauxclasse/etab/:id')
  async GetNiveauxclassByEtab(
    @Param('id') id: string,
  ): Promise<NiveauClassModel[]> {
    return this.niveauClassService.GetNiveauClassByEtab(Number(id));
  }

  // Get niveauxclasses by ID
  @Get('niveauxclasse/:id')
  async getNiveauxclassById(
    @Param('id') id: string,
  ): Promise<NiveauClassModel | null> {
    return this.niveauClassService.niveauClass({
      id: Number(id),
    })
  }
  

  // Create a new niveauxclass
  @Post('niveauxclasse')
  async createNiveauxclass(
    @Body() data: Prisma.NiveauClassCreateInput,
  ): Promise<NiveauClassModel> {
    return this.niveauClassService.createNiveauClass(data);
  }

  // Delete a niveauxclass
  @Delete('niveauxclasse/:id')
  async deleteNiveauxclass(@Param('id') id: string): Promise<NiveauClassModel> {
    return this.niveauClassService.deleteNiveauClass({
      id: Number(id),
    });
  }


  // Update a niveauxclass
  @Put('niveauxclasse/:id')
  async updateNiveauxclass(
    @Param('id') id: string,
    @Body() data: Prisma.NiveauClassUpdateInput,
  ): Promise<NiveauClassModel> {
    return this.niveauClassService.updateNiveauClass({
      where: { id: Number(id) },
      data,
    });
  }
}
