import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { GroupeHeure, Prisma } from '@prisma/client';

@Injectable()
export class GroupeHeureService {
    constructor(private prisma: PrismaService) {}

    async groupeHeure(
        groupeHeureWhereUniqueInput: Prisma.GroupeHeureWhereUniqueInput,
    ): Promise<GroupeHeure | null> {
        return this.prisma.groupeHeure.findUnique({
            where: groupeHeureWhereUniqueInput,
        });
    }
    
    async groupesHeures(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.GroupeHeureWhereUniqueInput;
        where?: Prisma.GroupeHeureWhereInput;
        orderBy?: Prisma.GroupeHeureOrderByWithRelationInput;
    }): Promise<GroupeHeure[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.groupeHeure.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createGroupeHeure(data: Prisma.GroupeHeureCreateInput): Promise<GroupeHeure> {
        return this.prisma.groupeHeure.create({
            data,
        });
    }


    async updateGroupeHeure(params: {
        where: Prisma.GroupeHeureWhereUniqueInput;
        data: Prisma.GroupeHeureUpdateInput;
    }): Promise<GroupeHeure> {
        const { where, data } = params;
        return this.prisma.groupeHeure.update({
            data,
            where,
        });
    }
    

    async deleteGroupeHeure(where: Prisma.GroupeHeureWhereUniqueInput): Promise<GroupeHeure> {
        return this.prisma.groupeHeure.delete({
            where,
        });
    }


}