import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { NiveauClass, Prisma } from '@prisma/client';

@Injectable()
export class NiveauClassService {
  constructor(private prisma: PrismaService) {}

  //NiveauClass
  async niveauClass(
    niveauClassWhereUniqueInput: Prisma.NiveauClassWhereUniqueInput,
  ): Promise<NiveauClass | null> {
    return this.prisma.niveauClass.findUnique({
      where: niveauClassWhereUniqueInput,
    });
  }

  async niveauClasses(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.NiveauClassWhereUniqueInput;
    where?: Prisma.NiveauClassWhereInput;
    orderBy?: Prisma.NiveauClassOrderByWithRelationInput;
  }): Promise<NiveauClass[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.niveauClass.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  // Create New NiveauClass
  async createNiveauClass(
    data: Prisma.NiveauClassCreateInput,
  ): Promise<NiveauClass> {
    return this.prisma.niveauClass.create({
      data,
    });
  }

  // Update NiveauClass
  async updateNiveauClass(params: {
    where: Prisma.NiveauClassWhereUniqueInput;
    data: Prisma.NiveauClassUpdateInput;
  }): Promise<NiveauClass> {
    const { where, data } = params;
    return this.prisma.niveauClass.update({
      data,
      where,
    });
  }

  // Delete NiveauClass
  async deleteNiveauClass(
    where: Prisma.NiveauClassWhereUniqueInput,
  ): Promise<NiveauClass> {
    return this.prisma.niveauClass.delete({
      where,
    });
  }

  // Get Niveau By Etablissement 
  async GetNiveauClassByEtab(id: number): Promise<NiveauClass[]> {
    return this.prisma.niveauClass.findMany({
      where: {
        idEtab: id,
      },
    });
  }
}
