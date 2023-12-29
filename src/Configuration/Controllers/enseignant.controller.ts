import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { EnseignantService } from '../Services/enseignant.service';
import { Prisma, Enseignant as EnseignantModel } from '@prisma/client';

@Controller()
export class EnseignantController {
  constructor(private readonly enseignantService: EnseignantService) {}

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

  @Get('/enseignant/etab/:id')
  async GetEnseignantsByEtab(
    @Param('id') id: string,
  ): Promise<EnseignantModel[]> {
    return this.enseignantService.GetEnseignantsByEtab(Number(id));
  }
}
