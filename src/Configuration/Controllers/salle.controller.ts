import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { SalleService } from '../Services/salle.service';
import { Prisma, Salle as SalleModel } from '@prisma/client';

@Controller()
export class SalleController {
  constructor(private readonly salleService: SalleService) {}

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
}
