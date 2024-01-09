import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Emploie, Prisma } from '@prisma/client';

@Injectable()
export class EmploieService {
  constructor(private prisma: PrismaService) {}

  async emploie(
    emlpoieWhereUniqueInput: Prisma.EmploieWhereUniqueInput,
  ): Promise<Emploie | null> {
    return this.prisma.emploie.findUnique({
      where: emlpoieWhereUniqueInput,
    });
  }

  async emploies(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.EmploieWhereUniqueInput;
    where?: Prisma.EmploieWhereInput;
    orderBy?: Prisma.EmploieOrderByWithRelationInput;
  }): Promise<Emploie[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.emploie.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createEmploie(data: Prisma.EmploieCreateInput): Promise<Emploie> {
    return this.prisma.emploie.create({
      data,
    });
  }

  async deleteEmploie(data: Prisma.EmploieWhereUniqueInput): Promise<Emploie> {
    return this.prisma.emploie.delete({
      where: data,
    });
  }

  async updateEmploie(params: {
    where: Prisma.EmploieWhereUniqueInput;
    data: Prisma.EmploieUpdateInput;
  }): Promise<Emploie> {
    const { where, data } = params;
    return this.prisma.emploie.update({
      data,
      where,
    });
  }
}
