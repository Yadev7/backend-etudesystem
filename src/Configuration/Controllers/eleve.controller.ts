import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { EleveService } from '../Services/eleve.service';
import { Prisma, Eleve as EleveModel } from '@prisma/client';

@Controller()
export class EleveController {
  constructor(private readonly eleveService: EleveService) {}

  //Eleve
  @Get('eleves')
  async getEleves(): Promise<EleveModel[]> {
    return this.eleveService.eleves({});
  }

  @Get('eleve/:id')
  async getEleveById(@Param('id') id: string): Promise<EleveModel | null> {
    return this.eleveService.eleve({
      id: Number(id),
    });
  }

  @Post('eleve')
  async createEleve(
    @Body() data: Prisma.EleveCreateInput,
  ): Promise<EleveModel> {
    return this.eleveService.createEleve(data);
  }

  @Post('eleve/:id')
  async updateEleve(
    @Param('id') id: string,
    @Body() data: Prisma.EleveUpdateInput,
  ): Promise<EleveModel> {
    return this.eleveService.updateEleve({
      where: {
        id: Number(id),
      },
      data,
    });
  }


  @Post('eleve/:id')
  async deleteEleve(@Param('id') id: string): Promise<EleveModel> {
    return this.eleveService.deleteEleve({
      id: Number(id),
    });
  }

  
}
