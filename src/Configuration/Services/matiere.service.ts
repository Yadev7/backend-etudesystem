import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Matiere, Prisma } from '@prisma/client';

@Injectable()
export class MatiereService {
  constructor(private prisma: PrismaService) {}

  async matiere(
    matiereWhereUniqueInput: Prisma.MatiereWhereUniqueInput,
  ): Promise<Matiere | null> {
    return this.prisma.matiere.findUnique({
      where: matiereWhereUniqueInput,
    });
  }

  async matieres(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.MatiereWhereUniqueInput;
    where?: Prisma.MatiereWhereInput;
    orderBy?: Prisma.MatiereOrderByWithRelationInput;
  }): Promise<Matiere[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.matiere.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createMatiere(data: Prisma.MatiereCreateInput): Promise<Matiere> {
    return this.prisma.matiere.create({
      data,
    });
  }

  async updateMatiere(params: {
    where: Prisma.MatiereWhereUniqueInput;
    data: Prisma.MatiereUpdateInput;
  }): Promise<Matiere> {
    const { where, data } = params;
    return this.prisma.matiere.update({
      data,
      where,
    });
  }

  async deleteMatiere(where: Prisma.MatiereWhereUniqueInput): Promise<Matiere> {
    return this.prisma.matiere.delete({
      where,
    });
  }
}
