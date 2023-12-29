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
    try {
      // Check if the content already exists based on a specific property (for example, 'name')
      const existingEnseignant =
        await this.enseignantService.findEnseignantByName(data.nomEnsg);

      if (existingEnseignant) {
        // If the content exists, you can choose to handle it, log it, or throw an error
        throw new Error('Enseignant with the same name already exists.');
      }

      // If it doesn't exist, proceed with creating the content
      return await this.enseignantService.createEnseignant(data);
    } catch (error) {
      // Handle the error here, you can log it or customize the response
      console.error('Error creating enseignant:', error);
      throw new Error('Error creating enseignant: ' + error.message); // You can customize the error message if needed
    }
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
