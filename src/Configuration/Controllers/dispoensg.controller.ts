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

  @Get('/dispoEnsgs')
  async getDispoEnsg(): Promise<DispoEnsgModel[]> {
    return this.dispoEnsgService.dispoEnsgs({});
  }

  @Get('/dispoEnsg/:id')
  async getDispoEnsgById(
    @Param('id') id: string,
  ): Promise<DispoEnsgModel | null> {
    return this.dispoEnsgService.dispoEnsg({
      id: Number(id),
    });
  }

  @Post('/dispoEnsg')
  async createDispoEnsg(
    @Body() data: Prisma.DispoEnsgCreateInput,
  ): Promise<DispoEnsgModel> {
    return this.dispoEnsgService.createDispoEnsg(data);
  }


  @Delete('/dispoEnsg/:id')
  async deleteDispoEnsg(@Param('id') id: string): Promise<DispoEnsgModel> {
    return this.dispoEnsgService.deleteDispoEnsg({
      id: Number(id),
    });
  }

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
}
