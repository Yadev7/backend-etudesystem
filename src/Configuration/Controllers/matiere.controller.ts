import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { MatiereService } from '../Services/matiere.service';
import { Prisma, Matiere as MatiereModel } from '@prisma/client';

@Controller()
export class MatiereController {
  constructor(private readonly matiereService: MatiereService) {}

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
}
