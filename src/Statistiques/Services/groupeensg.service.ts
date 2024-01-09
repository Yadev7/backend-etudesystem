import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { GroupeEnsg, Prisma } from '@prisma/client';

@Injectable()
export class GroupeEnsgService {
  constructor(private prisma: PrismaService) {}

  async groupeEnsg(
    groupeEnsgWhereUniqueInput: Prisma.GroupeEnsgWhereUniqueInput,
  ): Promise<GroupeEnsg | null> {
    return this.prisma.groupeEnsg.findUnique({
      where: groupeEnsgWhereUniqueInput,
    });
  }

  async groupesEnsgs(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.GroupeEnsgWhereUniqueInput;
    where?: Prisma.GroupeEnsgWhereInput;
    orderBy?: Prisma.GroupeEnsgOrderByWithRelationInput;
  }): Promise<GroupeEnsg[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.groupeEnsg.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createGroupeEnsg(
    data: Prisma.GroupeEnsgCreateInput,
  ): Promise<GroupeEnsg> {
    return this.prisma.groupeEnsg.create({
      data,
    });
  }

  async deleteGroupeEnsg(
    data: Prisma.GroupeEnsgWhereUniqueInput,
  ): Promise<GroupeEnsg> {
    return this.prisma.groupeEnsg.delete({
      where: data,
    });
  }

  async updateGroupeEnsg(params: {
    where: Prisma.GroupeEnsgWhereUniqueInput;
    data: Prisma.GroupeEnsgUpdateInput;
  }): Promise<GroupeEnsg> {
    const { where, data } = params;
    return this.prisma.groupeEnsg.update({
      data,
      where,
    });
  }
}
