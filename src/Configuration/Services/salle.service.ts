import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Salle, Prisma } from '@prisma/client';

@Injectable()
export class SalleService {
  constructor(private prisma: PrismaService) {}

  //Salle
  async salle(
    salleWhereUniqueInput: Prisma.SalleWhereUniqueInput,
  ): Promise<Salle | null> {
    return this.prisma.salle.findUnique({
      where: {
        ...salleWhereUniqueInput,
      }
    });
  }

  async salles(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SalleWhereUniqueInput;
    where?: Prisma.SalleWhereInput;
    orderBy?: Prisma.SalleOrderByWithRelationInput;
  }): Promise<Salle[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.salle.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  // Create New Salle
  async createSalle(data: Prisma.SalleCreateInput): Promise<Salle> {
    return this.prisma.salle.create({
      data,
    });
  }

  // Update Salle
  async updateSalle(params: {
    where: Prisma.SalleWhereUniqueInput;
    data: Prisma.SalleUpdateInput;
  }): Promise<Salle> {
    const { where, data } = params;
    return this.prisma.salle.update({
      data,
      where,
    });
  }

  // Delete Salle
  async deleteSalle(where: Prisma.SalleWhereUniqueInput): Promise<Salle> {
    return this.prisma.salle.delete({
      where,
    });
  }

  async GetSalleByEtab(id: number): Promise<Salle[]> {
    return this.prisma.salle.findMany({
      where: {
        idEtab: id,
      },
    });
  }

  async findSalleByNom(nomSalle: string): Promise<Salle | null> {
    return this.prisma.salle.findFirst({
      where: {
        nomSalle: nomSalle,
      },
    });
  }



}
