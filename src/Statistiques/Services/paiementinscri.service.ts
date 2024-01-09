import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { PaiementInscription, Prisma } from '@prisma/client';

@Injectable()
export class PaiementInscriService {
  constructor(private prisma: PrismaService) {}

  async paiementInscription(
    paiementInscriptionWhereUniqueInput: Prisma.PaiementInscriptionWhereUniqueInput,
  ): Promise<PaiementInscription | null> {
    return this.prisma.paiementInscription.findUnique({
      where: paiementInscriptionWhereUniqueInput,
    });
  }

  async paiementInscriptions(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PaiementInscriptionWhereUniqueInput;
    where?: Prisma.PaiementInscriptionWhereInput;
    orderBy?: Prisma.PaiementInscriptionOrderByWithRelationInput;
  }): Promise<PaiementInscription[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.paiementInscription.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createPaiement(
    data: Prisma.PaiementInscriptionCreateInput,
  ): Promise<PaiementInscription> {
    return this.prisma.paiementInscription.create({
      data,
    });
  }

  async deletePaiement(
    data: Prisma.PaiementInscriptionWhereUniqueInput,
  ): Promise<PaiementInscription> {
    return this.prisma.paiementInscription.delete({
      where: data,
    });
  }

  async updatePaiement(params: {
    where: Prisma.PaiementInscriptionWhereUniqueInput;
    data: Prisma.PaiementInscriptionUpdateInput;
  }): Promise<PaiementInscription> {
    const { where, data } = params;
    return this.prisma.paiementInscription.update({
      data,
      where,
    });
  }
}
