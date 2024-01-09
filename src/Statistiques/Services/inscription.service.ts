import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Inscription, Prisma } from '@prisma/client';

@Injectable()
export class InscriptionService {
  constructor(private prisma: PrismaService) {}

  async inscription(
    inscriptionWhereUniqueInput: Prisma.InscriptionWhereUniqueInput,
  ): Promise<Inscription | null> {
    return this.prisma.inscription.findUnique({
      where: inscriptionWhereUniqueInput,
    });
  }

  async inscriptions(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.InscriptionWhereUniqueInput;
    where?: Prisma.InscriptionWhereInput;
    orderBy?: Prisma.InscriptionOrderByWithRelationInput;
  }): Promise<Inscription[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.inscription.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createInscription(
    data: Prisma.InscriptionCreateInput,
  ): Promise<Inscription> {
    return this.prisma.inscription.create({
      data,
    });
  }

  async deleteInscription(
    data: Prisma.InscriptionWhereUniqueInput,
  ): Promise<Inscription> {
    return this.prisma.inscription.delete({
      where: data,
    });
  }

  async updateInscription(params: {
    where: Prisma.InscriptionWhereUniqueInput;
    data: Prisma.InscriptionUpdateInput;
  }): Promise<Inscription> {
    const { where, data } = params;
    return this.prisma.inscription.update({
      data,
      where,
    });
  }
}
