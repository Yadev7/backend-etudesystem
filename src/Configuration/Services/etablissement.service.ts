import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Etablissement, Prisma } from '@prisma/client';

@Injectable()
export class EtablissementService {
  constructor(private prisma: PrismaService) {}

  async etablissement(
    etablissementWhereUniqueInput: Prisma.EtablissementWhereUniqueInput,
  ): Promise<Etablissement | null> {
  if(!etablissementWhereUniqueInput.id) {
    throw new Error('Missing ID')
  } else {
        return this.prisma.etablissement.findUnique({
      where: etablissementWhereUniqueInput,
    });
  }

  }

  async etablissements(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.EtablissementWhereUniqueInput;
    where?: Prisma.EtablissementWhereInput;
    orderBy?: Prisma.EtablissementOrderByWithRelationInput;
  }): Promise<Etablissement[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.etablissement.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createEtablissement(
    data: Prisma.EtablissementCreateInput,
  ): Promise<Etablissement> {
    return this.prisma.etablissement.create({
      data,
    });
  }

  async deleteEtablissement(
    data: Prisma.EtablissementWhereUniqueInput,
  ): Promise<Etablissement> {
    return this.prisma.etablissement.delete({
      where: data,
    });
  }

  async updateEtablissement(params: {
    where: Prisma.EtablissementWhereUniqueInput;
    data: Prisma.EtablissementUpdateInput;
  }): Promise<Etablissement> {
    const { where, data } = params;
    return this.prisma.etablissement.update({
      data,
      where,
    });
  }

  // uploadFile(@UploadedFile() file: Express.Multer.File) {
  //   const response = {
  //     originalname: file.originalname,
  //     filename: file.filename,
  //   };
  //   return response;
  // }
}
