import {
    Controller,
    Get,
    Post,
    Body,
    Param,

  } from '@nestjs/common';
  
  import { Prisma, Activitylogs as ActivitylogsModel } from '@prisma/client';
import { ActivitylogsService } from '../Services/activitylogs.service';


  @Controller()
  export class ActivitylogsController {
    [x: string]: any;
    constructor(private readonly activitylogs: ActivitylogsService) {}

    @Get('/activitylogs')
    async getActivitylogs(): Promise<ActivitylogsModel[]> {
      return this.activitylogs.ActivityLogs({});
    }

    @Post('/activitylogs')
    async createActivitylogs(
      @Body() data: Prisma.ActivitylogsCreateInput,
    ): Promise<ActivitylogsModel> {
      return this.activitylogs.createActivitylogs(data);
    }

    @Get('/activitylogs/:id')
    async getActivitylogsById(
      @Param('id') id: string,
    ): Promise<ActivitylogsModel | null> {
      return this.activitylogs.ActivityLog({
        id: Number(id),
      })
    }
    
    // @Put('/activitylogs/:id')
    // async updateActivitylogs(
    //   @Param('id') id: string,
    //   @Body() data: Prisma.ActivitylogsUpdateInput,
    // ): Promise<Activitylogs> {
    //   return this.activitylogs.updateActivitylogs({
    //     where: {
    //       id: Number(id),
    //     }
    //   })
    // }


  }