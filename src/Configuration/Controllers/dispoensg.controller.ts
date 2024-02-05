import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { DispoEnsgService } from '../Services/dispoensg.service';
import { Prisma, DispoEnsg as DispoEnsgModel } from '@prisma/client';

@Controller()
export class DispoEnsgController {
  constructor(private readonly dispoEnsgService: DispoEnsgService) {}

  // Get all dispoEnsgs
  @Get('/dispoEnsgs')
  async getDispoEnsg(): Promise<DispoEnsgModel[]> {
    return this.dispoEnsgService.dispoEnsgs({});
  }

  // Get dispoEnsgs by Enseignant
  @Get('/dispoEnsgs/enseignant/:id') // /dispoEnsgs/1
  async GetDispoEnsgByEnseignant(
    @Param('id') id: string,
  ): Promise<DispoEnsgModel[]> {
    return this.dispoEnsgService.GetDispoEnsgByEnseignant({
      id: Number(id),
    });
  }

  // Get dispoEnsg by ID
  @Get('/dispoEnsg/:id')
  async getDispoEnsgById(
    @Param('id') id: string,
  ): Promise<DispoEnsgModel | null> {
    return this.dispoEnsgService.dispoEnsg({
      id: Number(id),
    });
  }

  // Post a new dispoEnsg
  @Post('/dispoEnsg')
  async createDispoEnsg(
    @Body() data: Prisma.DispoEnsgCreateInput,
  ): Promise<DispoEnsgModel> {
    return this.dispoEnsgService.createDispoEnsg(data);
  }

  // Delete a dispoEnsg
  @Delete('/dispoEnsg/:id')
  async deleteDispoEnsg(@Param('id') id: string): Promise<DispoEnsgModel> {
    return this.dispoEnsgService.deleteDispoEnsg({
      id: Number(id),
    });
  }

  // Update a dispoEnsg
  @Put('/dispoEnsg/:id')
  async updateDispoEnsg(
    @Param('id') id: string,
    @Body() data: Prisma.DispoEnsgUpdateInput,
  ): Promise<DispoEnsgModel> {
    return this.dispoEnsgService.updateDispoEnsg({
      where: { id: Number(id) },
      data,
    });
  }

  // Get dispoEnsg by etab
  @Get('dispoEnsgs/etab/:id')
  async GetDispoEnsgByEtab(@Param('id') id: string): Promise<DispoEnsgModel[]> {
    return this.dispoEnsgService.GetDispoEnsgByEtab(Number(id));
  }
}
