import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { GroupeHeureService } from '../Services/groupeheure.service';
import { Prisma, GroupeHeure as GroupeHeureModel } from '@prisma/client';

@Controller()
export class GroupeHeureController {
  constructor(private readonly groupeHeureService: GroupeHeureService) {}

  // Get all groupesHeures
  @Get('groupeheures')
  async getGroupeHeures(): Promise<GroupeHeureModel[]> {
    return this.groupeHeureService.groupesHeures({});
  }

  // Get groupesHeure by ID
  @Get('groupeheure/:id')
  async getGroupeHeureById(
    @Param('id') id: string,
  ): Promise<GroupeHeureModel | null> {
    return this.groupeHeureService.groupeHeure({
      id: Number(id),
    });
  }

  // Create new groupesHeure
  @Post('groupeheure')
  async createGroupeHeure(
    @Body() data: Prisma.GroupeHeureCreateInput,
  ): Promise<GroupeHeureModel> {
    return this.groupeHeureService.createGroupeHeure(data);
  }

  // Update groupesHeure
  @Put('groupeheure/:id')
  async updateGroupeHeure(
    @Param('id') id: string,
    @Body() data: Prisma.GroupeHeureUpdateInput,
  ): Promise<GroupeHeureModel> {
    return this.groupeHeureService.updateGroupeHeure({
      where: { id: Number(id) },
      data,
    });
  }

  // Delete groupesHeure
  @Delete('groupeheure/:id')
  async deleteGroupeHeure(@Param('id') id: string): Promise<GroupeHeureModel> {
    return this.groupeHeureService.deleteGroupeHeure({
      id: Number(id),
    });
  }


  
}
