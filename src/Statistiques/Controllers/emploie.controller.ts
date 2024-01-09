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

  //Inscription
  @Get('emploies')
  async getEmploies(): Promise<EmploieModel[]> {
    return this.emploieService.emploies({});
  }

  @Get('emploie/:id')
  async getEmploieById(@Param('id') id: string): Promise<EmploieModel | null> {
    return this.emploieService.emploie({
      id: Number(id),
    });
  }

  @Post('emploie')
  async createEmploie(
    @Body() data: Prisma.EmploieCreateInput,
  ): Promise<EmploieModel> {
    return this.emploieService.createEmploie(data);
  }

  @Put('emploie/:id')
  async updateEmploie(
    @Param('id') id: string,
    @Body() data: Prisma.EmploieUpdateInput,
  ): Promise<EmploieModel> {
    return this.emploieService.updateEmploie({
      where: { id: Number(id) },
      data,
    });
  }

  @Delete('emploie/:id')
  async deleteEmploie(@Param('id') id: string): Promise<EmploieModel> {
    return this.emploieService.deleteEmploie({
      id: Number(id),
    });
  }
}
