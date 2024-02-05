import {
    Body,
    Controller,
    Get,
    Post,
    Param,
    Put,
    Delete,
  } from '@nestjs/common';

  import { GroupeEnsgService } from "../Services/groupeensg.service";
  import { Prisma, GroupeEnsg as GroupeEnsgModel } from '@prisma/client';

  @Controller()
  export class GroupeEnsgController {
    constructor(private readonly groupeEnsgService: GroupeEnsgService) {}

    // Get all groupesEnsgs
    @Get('groupesEnsgs')
    async getGroupesEnsgs(): Promise<GroupeEnsgModel[]> {
      return this.groupeEnsgService.groupesEnsgs({});
    }

    // Get groupeEnsg by ID
    @Get('groupeEnsg/:id')
    async getGroupeEnsgById(
      @Param('id') id: string,
    ): Promise<GroupeEnsgModel | null> {
      return this.groupeEnsgService.groupeEnsg({
        id: Number(id),
      });
    }
    
// Create new groupeEnsg
    @Post('groupeEnsg')
    async createGroupeEnsg(
      @Body() data: Prisma.GroupeEnsgCreateInput,
    ): Promise<GroupeEnsgModel> {
      return this.groupeEnsgService.createGroupeEnsg(data);
    }
    
    // Update groupeEnsg
    @Put('groupeEnsg/:id')
    async updateGroupeEnsg(
      @Param('id') id: string,
      @Body() data: Prisma.GroupeEnsgUpdateInput,
    ): Promise<GroupeEnsgModel> {
      return this.groupeEnsgService.updateGroupeEnsg({
        where: { id: Number(id) },
        data,
      });
    }
    
    // Delete groupeEnsg
    @Delete('groupeEnsg/:id')
    async deleteGroupeEnsg(
      @Param('id') id: string,
    ): Promise<GroupeEnsgModel> {
      return this.groupeEnsgService.deleteGroupeEnsg({
        id: Number(id),
      });
    }
    

  }