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

import { MatiereService } from '../Services/matiere.service';
import { Prisma, Matiere as MatiereModel } from '@prisma/client';
import { Response } from 'express'; // Import 'Response' from 'express'
@Controller()
export class MatiereController {
  constructor(private readonly matiereService: MatiereService) {}


  // Get all matieres
  @Get('matieres')
  async getMatieres(): Promise<MatiereModel[]> {
    return this.matiereService.matieres({});
  }


  // Get all matieres as Formatted HTML
  @Get('matieres/htmlData')
  async findAllAsHtml(): Promise<string> {
    const data = await this.matiereService.matieres({});

    // Convert data to HTML rows (replace columnName with your actual property)
    const htmlRows = data.map(item => `
    <tr>
    <td>${item.nomMatiere}</td>
    </tr>
    
    `).join('');

    return `<table>${htmlRows}</table>`;
  }


// Get matiere by id
  @Get('matiere/:id')
  async getMatiereById(
    @Param('id') id: string,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const matiere = await this.matiereService.matiere({
        id: Number(id),
      });

      if (!matiere) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Matiere not found' });
      }
      return res.json(matiere);
    } catch (error) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'Matiere not found' });
    }
  }



  // Create new matiere
  @Post('matiere')
  async createMatiere(
    @Body() data: Prisma.MatiereCreateInput,
  ): Promise<MatiereModel> {
    return this.matiereService.createMatiere(data);
  }


  // Delete matiere
  @Delete('matiere/:id')
  async deleteMatiere(@Param('id') id: string): Promise<MatiereModel> {
    return this.matiereService.deleteMatiere({
      id: Number(id),
    });
  }


  // Update matiere
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


  // Get matiere by etablissement
  @Get('matiere/etab/:id')
  async GetMatiereByEtab(@Param('id') id: string): Promise<MatiereModel[]> {
    return this.matiereService.GetMatireByEtab(Number(id));
  }
}
