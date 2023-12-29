import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { DispoEnsg, Prisma } from '@prisma/client';

@Injectable()
export class DispoEnsgService {
  constructor(private prisma: PrismaService) {}

  async dispoEnsg(
    dispoEnsgWhereUniqueInput: Prisma.DispoEnsgWhereUniqueInput,
  ): Promise<DispoEnsg | null> {
    return this.prisma.dispoEnsg.findUnique({
      where: dispoEnsgWhereUniqueInput,
    });
  }

  async dispoEnsgs(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DispoEnsgWhereUniqueInput;
    where?: Prisma.DispoEnsgWhereInput;
    orderBy?: Prisma.DispoEnsgOrderByWithRelationInput;
  }): Promise<DispoEnsg[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.dispoEnsg.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createDispoEnsg(data: Prisma.DispoEnsgCreateInput): Promise<DispoEnsg> {
    return this.prisma.dispoEnsg.create({
      data,
    });
  }

  async updateDispoEnsg(params: {
    where: Prisma.DispoEnsgWhereUniqueInput;
    data: Prisma.DispoEnsgUpdateInput;
  }): Promise<DispoEnsg> {
    const { where, data } = params;
    return this.prisma.dispoEnsg.update({
      data,
      where,
    });
  }

  async deleteDispoEnsg(
    where: Prisma.DispoEnsgWhereUniqueInput,
  ): Promise<DispoEnsg> {
    return this.prisma.dispoEnsg.delete({
      where,
    });
  }

  async GetDispoEnsgByEnseignant(
    where: Prisma.DispoEnsgWhereInput,
  ): Promise<DispoEnsg[]> {
    return this.prisma.dispoEnsg.findMany({
      where,
    });
  }
  

  async GetDispoEnsgByEtab(id: number): Promise<DispoEnsg[]> {
    return this.prisma.dispoEnsg.findMany({
      where: {
        idEtab: id,
      },
    });
  }
}
