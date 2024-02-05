import {
    Body,
    Controller,
    Get,
    Post,
    Param,
    Delete,
    Put
  } from '@nestjs/common';

import { PackMatiereService } from '../Services/packmatieres.service';
import { Prisma, PackMatieres as PackMatieresModel } from '@prisma/client';

@Controller()
export class PackMatiereController {
  constructor(private readonly packMatiereService: PackMatiereService) {}

  // Get all packmatieres
  @Get('packmatieres')
  async getPackMatieres(): Promise<PackMatieresModel[]> {
    return this.packMatiereService.packMatieres({});
  }

  // Get packmatiere by ID
  @Get('packmatiere/:id')
  async getPackMatiereById(@Param('id') id: string): Promise<PackMatieresModel | null> {
    return this.packMatiereService.packMatiere({
      id: Number(id),
    });
  }


  // Get packmatiere by enseignant
  @Get('packmatiere/enseignant/:id')
  async getPackMatiereByEnseignant(@Param('id') id: string): Promise<PackMatieresModel | null> {
    return this.packMatiereService.GetPackMatiereByEnseignant({
      id: Number(id),
    })
  }


  // Get packmatiere by salle
  @Get('packmatiere/salle/:id')
  async getPackMatiereBySalle(@Param('id') id: string): Promise<PackMatieresModel | null> {
    return this.packMatiereService.getPackMatiereBySalle({
      id: Number(id),
    });
  }


  // Get packmatiere by groupe
  @Get('packmatiere/groupe/:id')
  async getPackMatiereByGroupe(@Param('id') id: string): Promise<PackMatieresModel | null> {
    return this.packMatiereService.getPackMatiereByGroupe({
      id: Number(id),
    });
  }


  @Post('packmatiere')
  async createPackMatiere(@Body() data: Prisma.PackMatieresCreateInput): Promise<PackMatieresModel> {
    return this.packMatiereService.createPackMatiere(data);
  }


  @Delete('packmatiere/:id')
  async deletePackMatiere(@Param('id') id: string): Promise<PackMatieresModel> {
    return this.packMatiereService.deletePackMatiere({
      id: Number(id),
    });
  }


  @Put('packmatiere/:id')
  async updatePackMatiere(
    @Param('id') id: string,
    @Body() data: Prisma.PackMatieresUpdateInput,
  ): Promise<PackMatieresModel> {
    return this.packMatiereService.updatePackMatiere({
      where: { id: Number(id) },
      data,
    });
  }

  @Get('packmatiere/:id')
  async getPackMatiere(@Param('id') id: string): Promise<PackMatieresModel | null> {
    return this.packMatiereService.packMatiere({
      id: Number(id),
    })
  }

}