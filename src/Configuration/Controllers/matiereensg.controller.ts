import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { MatiereEnsgService } from '../Services/matiereensg.service';
import { Prisma, MatiereEnsg as MatiereEnsgModel } from '@prisma/client';

@Controller()
export class MatiereEnsgController {
  constructor(private readonly matiereEnsgService: MatiereEnsgService) {}

  @Get('/matieresEnsgs')
  async getMatieresEnsg(): Promise<MatiereEnsgModel[]> {
    return this.matiereEnsgService.matiereEnsgs({});
  }

  @Get('/matiereEnsg/:id')
  async getMatiereEnsgById(
    @Param('id') id: string,
  ): Promise<MatiereEnsgModel | null> {
    return this.matiereEnsgService.matiereEnsg({
      id: Number(id),
    });
  }

  @Post('/matiereEnsg')
  async createMatiereEnsg(
    @Body() data: Prisma.MatiereEnsgCreateInput,
  ): Promise<MatiereEnsgModel> {
    return this.matiereEnsgService.createMatiereEnsg(data);
  }

  @Delete('/matiereEnsg/:id')
  async deleteMatiereEnsg(@Param('id') id: string): Promise<MatiereEnsgModel> {
    return this.matiereEnsgService.deleteMatiereEnsg({
      id: Number(id),
    });
  }

  @Put('/matiereEnsg/:id')
  async updateMatiereEnsg(
    @Param('id') id: string,
    @Body() data: Prisma.MatiereEnsgUpdateInput,
  ): Promise<MatiereEnsgModel> {
    return this.matiereEnsgService.updateMatiereEnsg({
      where: { id: Number(id) },
      data,
    });
  }

  @Get('/matiereEnsgs/etab/:id')
  async GetMatiereEnsgByEtab(
    @Param('id') id: string,
  ): Promise<MatiereEnsgModel[]> {
    return this.matiereEnsgService.GetMatiereEnsgByEtab(Number(id));
  }
}
