import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Enseignant, Prisma } from '@prisma/client';

@Injectable()
export class EnseignantService {
  constructor(private prisma: PrismaService) {}

  async enseignant(
    enseignantWhereUniqueInput: Prisma.EnseignantWhereUniqueInput,
  ): Promise<Enseignant | null> {
    return this.prisma.enseignant.findUnique({
      where: enseignantWhereUniqueInput,
    });
  }

  async enseignants(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.EnseignantWhereUniqueInput;
    where?: Prisma.EnseignantWhereInput;
    orderBy?: Prisma.EnseignantOrderByWithRelationInput;
  }): Promise<Enseignant[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.enseignant.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createEnseignant(
    data: Prisma.EnseignantCreateInput,
  ): Promise<Enseignant> {
    return this.prisma.enseignant.create({
      data,
    });
  }

  async deleteEnseignant(
    data: Prisma.EnseignantWhereUniqueInput,
  ): Promise<Enseignant> {
    return this.prisma.enseignant.delete({
      where: data,
    });
  }

  async updateEnseignant(params: {
    where: Prisma.EnseignantWhereUniqueInput;
    data: Prisma.EnseignantUpdateInput;
  }): Promise<Enseignant> {
    const { where, data } = params;
    return this.prisma.enseignant.update({
      data,
      where,
    });
  }

  async GetEnseignantsByEtab(id: number): Promise<Enseignant[]> {
    return this.prisma.enseignant.findMany({
      where: {
        idEtab: id,
      },
    });
  }

}
