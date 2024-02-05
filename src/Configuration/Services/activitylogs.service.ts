import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Prisma, Activitylogs } from '@prisma/client';

@Injectable()
export class ActivitylogsService {
    constructor(private prisma: PrismaService) {}

    async ActivityLog(
        activitylogsWhereUniqueInput: Prisma.ActivitylogsWhereUniqueInput,
      ): Promise<Activitylogs | null> {
        return this.prisma.activitylogs.findUnique({
          where: activitylogsWhereUniqueInput,
        });
      }
      

    async ActivityLogs(
        activitylogsWhereInput: Prisma.ActivitylogsWhereInput,
      ): Promise<Activitylogs[]> {
        return this.prisma.activitylogs.findMany({
          where: activitylogsWhereInput,
        })
      }
    
    async createActivitylogs(data: Prisma.ActivitylogsCreateInput): Promise<Activitylogs> {
        return this.prisma.activitylogs.create({
          data
        })
    }

    async updateActivitylogs(params: {
        where: Prisma.ActivitylogsWhereUniqueInput;
        data: Prisma.ActivitylogsUpdateInput;
      }): Promise<Activitylogs> {
        const { where, data } = params;
        return this.prisma.activitylogs.update({
          data,
          where,
        })
      }
    


    async deleteActivitylogs(
        where: Prisma.ActivitylogsWhereUniqueInput
      ): Promise<Activitylogs> {
        return this.prisma.activitylogs.delete({ where })
      }
   

      
}