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
import { PrismaService } from 'src/prisma.service';

@Controller()
export class EnseignantController {
  constructor(private readonly enseignantService: EnseignantService, private readonly prisma: PrismaService) {}

  @Get('/enseignants')
  async getEnseignants(): Promise<EnseignantModel[]> {
    return this.enseignantService.enseignants({});
  }

  @Get('/enseignant/etab/:id')
  async GetEnseignantsByEtab(
    @Param('id') id: string,
  ): Promise<EnseignantModel[]> {
    return this.enseignantService.GetEnseignantsByEtab(Number(id));
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
  async createEnseignantWithRelatedData(
    @Body() enseignantDataWithRelations: any, // This should contain enseignant data along with MatiereEnsg and DispoEnsg data
  ): Promise<any> {
    // Insert regular enseignant data
    const insertedEnseignant = await this.enseignantService.createEnseignant(
      enseignantDataWithRelations.enseignantData,
    );

    // Retrieve the inserted enseignant's ID
    const insertedEnseignantId = insertedEnseignant.id;
    

    // Prepare MatiereEnsg and DispoEnsg data array for bulk insertion
    const matiereEnsgDataArray: Prisma.MatiereEnsgUncheckedCreateInput[] = [];
    const dispoEnsgDataArray: Prisma.DispoEnsgUncheckedCreateInput[] = [];

    // Populate MatiereEnsg and DispoEnsg data arrays
    enseignantDataWithRelations.matiereEnsgData.forEach((matiereData: any) => {
      // Adjust the data structure according to your requirements
      matiereEnsgDataArray.push({
        idMatiere: matiereData.idMatiere,
        // Other fields as needed
        idEnsg: insertedEnseignantId,
        idEtab: matiereData.idEtab,
      });
    });

    enseignantDataWithRelations.dispoEnsgData.forEach((dispoData: any) => {
      // Adjust the data structure according to your requirements
      dispoEnsgDataArray.push({
        jour: dispoData.jour,
        heureDeb: dispoData.heureDeb,
        heureFin: dispoData.heureFin,
        // Other fields as needed
        idEnsg: insertedEnseignantId,
        idEtab: dispoData.idEtab,
      });
    });

    // Insert MatiereEnsg and DispoEnsg data
    const createdMatiereEnsg = await this.prisma.matiereEnsg.createMany({
      data: matiereEnsgDataArray,
    });
    const createdDispoEnsg = await this.prisma.dispoEnsg.createMany({
      data: dispoEnsgDataArray,
    });

    return {
      enseignant: insertedEnseignant,
      matiereEnsg: createdMatiereEnsg,
      dispoEnsg: createdDispoEnsg,
    };
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


}
