import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { MatiereEnsg, Prisma } from '@prisma/client';

@Injectable()
export class MatiereEnsgService {
  constructor(private prisma: PrismaService) {}

  //MatiereEnsg
  async matiereEnsg(
    matiereEnsgWhereUniqueInput: Prisma.MatiereEnsgWhereUniqueInput,
  ): Promise<MatiereEnsg | null> {
    return this.prisma.matiereEnsg.findUnique({
      where: matiereEnsgWhereUniqueInput,
    });
  }

  async matiereEnsgs(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.MatiereEnsgWhereUniqueInput;
    where?: Prisma.MatiereEnsgWhereInput;
    orderBy?: Prisma.MatiereEnsgOrderByWithRelationInput;
  }): Promise<MatiereEnsg[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.matiereEnsg.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  // Create New MatiereEnsg
  async createMatiereEnsg(
    data: Prisma.MatiereEnsgCreateInput,
  ): Promise<MatiereEnsg> {
    return this.prisma.matiereEnsg.create({
      data,
    });
  }

  // Update MatiereEnsg
  async updateMatiereEnsg(params: {
    where: Prisma.MatiereEnsgWhereUniqueInput;
    data: Prisma.MatiereEnsgUpdateInput;
  }): Promise<MatiereEnsg> {
    const { where, data } = params;
    return this.prisma.matiereEnsg.update({
      data,
      where,
    });
  }

  // Delete MatiereEnsg
  async deleteMatiereEnsg(
    where: Prisma.MatiereEnsgWhereUniqueInput,
  ): Promise<MatiereEnsg> {
    return this.prisma.matiereEnsg.delete({
      where,
    });
  }

  async GetMatiereEnsgByEtab(id: number): Promise<MatiereEnsg[]> {
    return this.prisma.matiereEnsg.findMany({
      where: {
        idEtab: id,
      },
    });
  }

  async GetMatiereEnsgByEnsg(id: number): Promise<MatiereEnsg[]> {
    return this.prisma.matiereEnsg.findMany({
      where: {
        idEnsg: id,
      }
    })
  }
}
