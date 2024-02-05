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

import { SalleService } from '../Services/salle.service';
import { Prisma, Salle as SalleModel } from '@prisma/client';
import { Response } from 'express'; // Import 'Response' from 'express'
@Controller()
export class SalleController {
  constructor(private readonly salleService: SalleService) {}

  // Get all salles
  @Get('salles')
  async getSalles(): Promise<SalleModel[]> {
    return this.salleService.salles({});
  }

  // Get salle by ID
  @Get('salle/:id')
  async getSalleById(
    @Param('id') id: string,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const salle = await this.salleService.salle({
        id: Number(id),
      });
      if (!salle) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Salle not found' });
      }
      return res.json(salle);
    } catch (error) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'Salle not found' });
    }
  }

  // Get salle by Etab
  @Get('salle/etab/:id')
  async GetSalleByEtab(@Param('id') id: string): Promise<SalleModel[]> {
    return this.salleService.GetSalleByEtab(Number(id));
  }

  // Create salle
  @Post('salle')
  async createSalle(
    @Body() data: Prisma.SalleCreateInput,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const salle = await this.salleService.createSalle(data);
      if (!salle) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Salle not found' });
      }
      return res.json(salle);
    } catch (error) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'Salle not found' });
    }
  }

  // Update salle
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

  // Delete salle
  @Delete('salle/:id')
  async deleteSalle(@Param('id') id: string): Promise<SalleModel> {
    return this.salleService.deleteSalle({
      id: Number(id),
    });
  }

  // Get Salle By Nom
  @Get('salle/nom/:nom')
  async findSalleByNom(
    @Param('nom') nomSalle: string,
  ): Promise<SalleModel | null> {
    return this.salleService.findSalleByNom(nomSalle);
  }
}
