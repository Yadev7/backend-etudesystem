import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpStatus, Res,
  NotFoundException,
  // BadRequestException,
} from '@nestjs/common';

import { Response } from 'express'; // Import 'Response' from 'express'


import { EnseignantService } from '../Services/enseignant.service';
import { Prisma, Enseignant as EnseignantModel } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Controller()
export class EnseignantController {
  constructor(
    private readonly enseignantService: EnseignantService,
    private readonly prisma: PrismaService,
  ) {}

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

  @Post('/enseignant')
  async createEnseignantWithRelatedData(
    @Body() enseignantDataWithRelations: any, // This should contain enseignant data along with MatiereEnsg and DispoEnsg data
  ): Promise<any> {
    // Insert regular enseignant data
    const insertedEnseignant = await this.enseignantService.createEnseignant(
      enseignantDataWithRelations.enseignantData,
    );
    console.log(insertedEnseignant);

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



  // @Put('/enseignant/:id')
  // async updateEnseignant(
  //   @Param('id') id: string,
  //   @Body() updateData: any, // This is where you'd receive the updated data
  // ): Promise<any> {
  //   // Assuming updateData contains the fields you want to update
  
  //   const updatedEnseignant = await this.prisma.enseignant.update({
  //     where: {
  //       id: parseInt(id, 10),
  //     },
  //     data: updateData, // Update the resource with the provided data
  //     include: {
  //       matiereEnsg: {
  //         include: {
  //           matiere: {
  //             select: {
  //               nomMatiere: true,
  //             },
  //           },
  //         },
  //       },
  //       dispoEnsg: true,
  //     },
  //   });
  
  //   return updatedEnseignant;
  // }
  



  // @Put('/enseignant/:id')
  // async updateEnseignant(
  //   @Param('id') id: string,
  //   @Body() updateData: any,
  // ): Promise<any> {
  //   try {
  //     const updatedEnseignant = await this.prisma.enseignant.update({
  //       where: {
  //         id: parseInt(id, 10),
  //       },
  //       data: updateData,
  //       include: {
  //         matiereEnsg: {
  //           include: {
  //             matiere: {
  //               select: {
  //                 nomMatiere: true,
  //               },
  //             },
  //           },
  //         },
  //         dispoEnsg: true,
  //       },
  //     });

  //     if (!updatedEnseignant) {
  //       throw new NotFoundException('Enseignant not found');
  //     }

  //     return updatedEnseignant;
  //   } catch (error) {
  //     // Customizing error messages based on different conditions
  //     if (error instanceof NotFoundException) {
  //       throw error; // Re-throwing the existing NotFoundException
  //     } else if (error.code === 'P2002') {
  //       // Assuming Prisma's unique constraint violation error
  //       throw new BadRequestException('Duplicate entry or invalid data');
  //     } else {
  //       throw new BadRequestException('Invalid update operation');
  //     }
  //   }
  // }



  @Put('/enseignant/:id')
  async updateEnseignant(
    @Param('id') id: string,
    @Body() updateData: any,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const updatedEnseignant = await this.prisma.enseignant.update({
        where: {
          id: parseInt(id, 10),
        },
        data: updateData,
        include: {
          matiereEnsg: {
            include: {
              matiere: {
                select: {
                  nomMatiere: true,
                },
              },
            },
          },
          dispoEnsg: true,
        },
      });

      if (!updatedEnseignant) {
        return res.status(HttpStatus.NOT_FOUND).json({ message: 'Enseignant not found' });
      }

      return res.json(updatedEnseignant);
    } catch (error) {
      // Customizing error messages based on different conditions
      if (error instanceof NotFoundException) {
        return res.status(HttpStatus.NOT_FOUND).json({ message: error.message });
      } else if (error.code === 'P2002') {
        // Assuming Prisma's unique constraint violation error
        return res.status(HttpStatus.BAD_REQUEST).json({ message: 'Duplicate entry or invalid data' });
      } else {
        return res.status(HttpStatus.BAD_REQUEST).json({ message: 'Invalid update operation' });
      }
    }
  }

  


  @Get('/enseignant/:id')
  async getEnseignant(@Param('id') id: string, @Res() res: Response): Promise<any> {
    try {
      const enseignant = await this.prisma.enseignant.findUnique({
        where: {
          id: parseInt(id, 10),
        },
        include: {
          matiereEnsg: {
            include: {
              matiere: {
                select: {
                  nomMatiere: true,
                },
              },
            },
          },
          dispoEnsg: true,
        },
      });

      if (!enseignant) {
        return res.status(HttpStatus.NOT_FOUND).json({ message: 'Enseignant not found' });
      }

      return res.json(enseignant);
    } catch (error) {
       return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Something went wrong' });
    }
  }

  @Delete('/enseignant/:id')
  async deleteEnseignant(@Param('id') id: string): Promise<EnseignantModel> {
    return this.enseignantService.deleteEnseignant({
      id: Number(id),
    });
  }


  // @Put('/enseignant/:id')
  // async updateEnseignantWithRelatedData(
  //   @Param('id') enseignantId: number,
  //   @Body() updatedEnseignantData: any,
  // ): Promise<any> {
  //   // Update regular enseignant data
  //   const updatedEnseignant = await this.enseignantService.updateEnseignant(
      
  //     updatedEnseignantData.enseignantId
  //   );

  //   // Prepare MatiereEnsg and DispoEnsg update array for bulk update
  //   const matiereEnsgUpdateArray: Prisma.MatiereEnsgUpdateManyArgs[] = [];
  //   const dispoEnsgUpdateArray: Prisma.DispoEnsgUpdateManyArgs[] = [];

  //   // Populate MatiereEnsg and DispoEnsg update arrays
  //   updatedEnseignantData.matiereEnsg.forEach((matiereData: any) => {
  //     matiereEnsgUpdateArray.push({
  //       where: { id: matiereData.id },
  //       data: {
  //         idMatiere: matiereData.idMatiere,
  //         nomMatiere: matiereData.nomMatiere,
  //         // Update other fields as needed
  //       },
  //     });
  //   });

  //   updatedEnseignantData.dispoEnsg.forEach((dispoData: any) => {
  //     dispoEnsgUpdateArray.push({
  //       where: { id: dispoData.id },
  //       data: {
  //         jour: dispoData.jour,
  //         heureDeb: dispoData.heureDeb,
  //         heureFin: dispoData.heureFin,
  //         idEtab: dispoData.idEtab || null,
  //         // Update other fields as needed
  //       },
  //     });
  //   });

  //   // Update MatiereEnsg and DispoEnsg data
  //   const updatedMatiereEnsg = await Promise.all(
  //     matiereEnsgUpdateArray.map((updateData) =>
  //       this.prisma.matiereEnsg.updateMany(updateData),
  //     ),
  //   );
  //   const updatedDispoEnsg = await Promise.all(
  //     dispoEnsgUpdateArray.map((updateData) =>
  //       this.prisma.dispoEnsg.updateMany(updateData),
  //     ),
  //   );

  //   return {
  //     enseignant: updatedEnseignant,
  //     matiereEnsg: updatedMatiereEnsg,
  //     dispoEnsg: updatedDispoEnsg,
  //   };
  // }


  
  // @Get('/enseignant/:id')
  // async getEnseignant(@Param('id') id: string): Promise<any> {
  //   try {
  //     const enseignant = await this.prisma.enseignant.findUnique({
  //       where: {
  //         id: parseInt(id, 10),
  //       },
  //       include: {
  //         matiereEnsg: {
  //           include: {
  //             matiere: {
  //               select: {
  //                 nomMatiere: true,
  //               },
  //             },
  //           },
  //         },
  //         dispoEnsg: true,
  //       },
  //     });

  //     if (!enseignant) {
  //       throw new NotFoundException('Enseignant not found');
  //     }

  //     return enseignant;
  //   } catch (error) {
  //     throw new NotFoundException('Enseignant not found');
  //   }
  // }

  // @Get('/enseignant/:id')
  // async getEnseignant(@Param('id') id: string): Promise<any> {
  //   const enseignant = await this.prisma.enseignant.findUnique({
  //     where: {
  //       id: parseInt(id, 10),
  //     },
  //     include: {
  //       matiereEnsg: {
  //         include: {
  //           matiere: {
  //             select: {
  //               nomMatiere: true, // Include the field nomMatiere from the matiere table
  //             },
  //           },
  //         },
  //       },
  //       dispoEnsg: true,
  //     },
  //   });

  //   return enseignant;
  // }





  // @Put('/enseignant/:id')
  // async updateEnseignant(
  //   @Param('id') id: string,
  //   @Body() data: Prisma.EnseignantUpdateInput,
  // ): Promise<EnseignantModel> {
  //   return this.enseignantService.updateEnseignant({
  //     where: { id: Number(id) },
  //     data,
  //   });
  // }


  // @Put('/enseignant/:id')
  // async updateEnseignantWithRelatedData(
  //   @Param('id') id: string,
  //   @Body() updateData: any, // This is where you'd receive the updated data
  // ): Promise<any> {
  //   // Assuming updateData contains the fields you want to update
  //   const updatedEnseignant = await this.enseignantService.updateEnseignantWithRelatedData(
  //     Number(id),
  //     updateData,
  //   );
  //   return updatedEnseignant;
  // }
  

  // @Get('/enseignant/:id') // Define the route with a parameter for the teacher's ID
  // async getEnseignant(@Param('id') id: string): Promise<any> {
  //   // Fetch the Enseignant data by ID
  //   const enseignant = await this.prisma.enseignant.findUnique({
  //     where: {
  //       id: parseInt(id, 10), // Convert the ID to a number if needed
  //     },
  //     include: {
  //       matiereEnsg: true, // Include related MatiereEnsg data
  //       dispoEnsg: true, // Include related DispoEnsg data
  //     },
  //   });

  //   return enseignant;
  // }
}
