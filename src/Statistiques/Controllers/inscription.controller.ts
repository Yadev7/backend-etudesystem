import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';

  import { InscriptionService } from '../Services/inscription.service';
  import { Prisma, Inscription as InscriptionModel } from '@prisma/client';

  @Controller()
  export class InscriptionController {
    constructor(private readonly inscriptionService: InscriptionService) {}

    // Get all inscriptions
    @Get('inscriptions')
    async getInscriptions(): Promise<InscriptionModel[]> {
      return this.inscriptionService.inscriptions({});
    }

    // Get inscription by ID
    @Get('inscription/:id')
    async getInscriptionById(
      @Param('id') id: string,
    ): Promise<InscriptionModel | null> {
      return this.inscriptionService.inscription({
        id: Number(id),
      });
    }

    // Create new inscription
    @Post('inscription')
    async createInscription(
      @Body() data: Prisma.InscriptionCreateInput,
    ): Promise<InscriptionModel> {
      return this.inscriptionService.createInscription(data);
    }
    
    // Update inscription
    @Put('inscription/:id')
    async updateInscription(
      @Param('id') id: string,
      @Body() data: Prisma.InscriptionUpdateInput,
    ): Promise<InscriptionModel> {
      return this.inscriptionService.updateInscription({
        where: { id: Number(id) },
        data,
      });
    }

    // Delete inscription
    @Delete('inscription/:id')
    async deleteInscription(
      @Param('id') id: string,
    ): Promise<InscriptionModel> {
      return this.inscriptionService.deleteInscription({
        id: Number(id),
      });
    }

    
  }