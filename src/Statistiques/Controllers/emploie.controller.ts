import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
} from '@nestjs/common';

import { EmploieService } from '../Services/emploie.service';
import { Prisma, Emploie as EmploieModel } from '@prisma/client';

@Controller()
export class EmploieController {
  constructor(private readonly emploieService: EmploieService) {}

// Get all emploies
  // @Get('emploies')
  // async getEmploies(): Promise<EmploieModel[]> {
  //   return this.emploieService.emploies({});
  // }

  
  // Get all emploies
@Get('emplois')
async getEmploies(): Promise<EmploieModel[]> {
  try {
    const emploies = await this.emploieService.emploies({});
    return emploies;
  } catch (error) {
    console.error('Error fetching emploies:', error);
    throw new Error('Failed to retrieve emploies');
  }
}


// @Get('emplois/htmlData')
// async findAllAsHtml(): Promise<string> {
//   const data = await this.emploieService.emploies({});
//   // Convert data to HTML rows (replace columnName with your actual property)
//   const htmlRows = data.map(item => `
//   <tr>
//   <td>${item.idGroupe}</td>
//   <td>${item.idSalle}</td>
//   <td>${item.idEnsg}</td>
//   <td>${item.idEleve}</td>
//   <td>${item.jour}</td>
//   <td>${item.heureDebut}</td>
//   <td>${item.heureFin}</td>
//   </tr>
  
//   `).join('');

//   return `<table>${htmlRows}</table>`;
// }


@Get('emplois/htmlData')
async findAllAsHtml(): Promise<string> {
  const emploies = await this.emploieService.emploies({
    orderBy: {
      id: 'asc', // or 'desc' for descending order
    },
  });

  // Retrieve additional information
  const additionalInfoPromises = emploies.map(async (item) => {
    // const numGroupe = await this.emploieService.getNumGroupe(item.idGroupe);
    const nomSalle = await this.emploieService.getNomSalle(item.idSalle);


    return {
      // numGroupe,
      nomSalle,

    };
  });

  const additionalInfo = await Promise.all(additionalInfoPromises);

  // Convert data and additional information to HTML rows
  const htmlRows = emploies.map((item, index) => `
    <tr>
      <td>${item.jour}</td>
      <td>
      ${item.heureDebut} - ${item.heureFin}<br>
      ${additionalInfo[index].nomSalle}
      </td>
    </tr>
  `).join('');

  return `<table border="1">${htmlRows}</table>`;
}






// @Get('emplois/htmlData')
// async findAllAsHtml(): Promise<string> {
//   const data = await this.emploieService.emploies({});
//   // Convert data to HTML rows (replace columnName with your actual property)
//   const htmlRows = data.map(item => `
//   <tr>
//   <td>${item.idGroupe}</td>
//   <td>${item.idSalle}</td>
//   <td>${item.idEnsg}</td>
//   <td>${item.idEleve}</td>
//   <td>${item.jour}</td>
//   <td>${item.heureDebut}</td>
//   <td>${item.heureFin}</td>
//   </tr>
  
//   `).join('');

//   return `<table>${htmlRows}</table>`;
// }


  // Get emploie by ID
  @Get('emploi/:id')
  async getEmploieById(@Param('id') id: string): Promise<EmploieModel | null> {
    try {
      const emploie = this.emploieService.emploie({
        id: Number(id),
      });
      return emploie
    } catch (erro) {
      console.error('Error fetching emploie:', erro);
      throw new Error('Failed to retrieve emploie');
    }
  }

  // Get emploie by enseignant
  @Get('emploi/enseignant/:id')
  async getEmploieByEnseignant(
    @Param('id') id: string,
  ): Promise<EmploieModel[]> {
    return this.emploieService.GetEmploieByEnseignant(Number(id));
  }

  // Get emploie by salle
  @Get('emploi/salle/:id')
  async GetEmploieBySalle(@Param('id') id: string): Promise<EmploieModel[]> {
    return this.emploieService.GetEmploieBySalle(Number(id));
  }

  // Get emploie by groupe
  @Get('emploi/groupe/:id')
  async getEmploieByGroupe(
    @Param('id') id: string,
  ): Promise<EmploieModel[]> {
    return this.emploieService.GetEmploieByGroupe(Number(id));
  }


// Create emploie by eleve
@Get('emploi/eleve/:id')
async getEmploieByEleve(
  @Param('id') id: string,
): Promise<EmploieModel[]> {
  return this.emploieService.GetEmploieByEleve(Number(id));
}



  // Create a new emploie
  @Post('emploi')
  async createEmploie(
    @Body() data: Prisma.EmploieCreateInput,
  ): Promise<EmploieModel> {
    return this.emploieService.createEmploie(data);
  }



  // Update an existing emploie
  @Put('emploi/:id')
  async updateEmploie(
    @Param('id') id: string,
    @Body() data: Prisma.EmploieUpdateInput,
  ): Promise<EmploieModel> {
    return this.emploieService.updateEmploie({
      where: { id: Number(id) },
      data,
    });
  }

  // Delete an existing emploie
  @Delete('emploi/:id')
  async deleteEmploie(@Param('id') id: string): Promise<EmploieModel> {
    return this.emploieService.deleteEmploie({
      id: Number(id),
    });
  }

  // Get schedule by enseignant
  // @Get(':enseignantId')
  // async getSchedule(@Param('enseignantId') enseignantId: number) {
  //   const schedule = await this.emploieService.getSchedule(enseignantId);
  //   return { schedule };
  // }

  // Get group info by enseignant
  // @Get('group-info/:enseignantId')
  // async getGroupInfo(@Param('enseignantId') enseignantId: number) {
  //   const groupInfo = await this.emploieService.getGroupInfo(enseignantId);
  //   return { groupInfo };
  // }
}
