import {
    Body,
    Controller,
    Get,
    Post,
    Param,
    Delete,
    Put
  } from '@nestjs/common';

import { PackService } from '../Services/pack.service';
import { Prisma, Pack as PackModel } from '@prisma/client';

@Controller()
export class PackController {
  constructor(private readonly packService: PackService) {}

  // Get all packs
  @Get('packs')
  async getPacks(): Promise<PackModel[]> {
    return this.packService.packs({});
  }

  // Get pack by ID
  @Get('pack/:id')
  async getPackById(@Param('id') id: string): Promise<PackModel | null> {
    return this.packService.pack({
      id: Number(id),
    });
  }

  // Get pack by enseignant
  @Get('pack/enseignant/:id')
  async getPackByEnseignant(@Param('id') id: string): Promise<PackModel | null> {
    return this.packService.GetPackByEnseignant({
      id: Number(id),
    })
  }

 // Get pack by salle
 @Get('pack/salle/:id')
 async getPackBySalle(@Param('id') id: string): Promise<PackModel | null> {
   return this.packService.getPackBySalle({
     id: Number(id),
   });
 }

 // Get pack by groupe
 @Get('pack/groupe/:id')
 async getPackByGroupe(@Param('id') id: string): Promise<PackModel | null> {
   return this.packService.getPackByGroupe({
     id: Number(id),
   });
 }

 @Post('pack')
 async createPack(@Body() data: Prisma.PackCreateInput): Promise<PackModel> {
   return this.packService.createPack(data);
 }

 @Put('pack/:id')
 async updatePack(
   @Param('id') id: string,
   @Body() data: Prisma.PackUpdateInput,
 ): Promise<PackModel> {
   return this.packService.updatePack({
     where: { id: Number(id) },
     data,
   });
 }

 @Delete('pack/:id')
 async deletePack(@Param('id') id: string): Promise<PackModel> {
   return this.packService.deletePack({
     id: Number(id),
   })
 }


}