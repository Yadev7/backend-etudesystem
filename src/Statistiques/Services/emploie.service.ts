import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Emploie, Prisma } from '@prisma/client';
import { GroupeHeureService } from './groupeheure.service';

@Injectable()
export class EmploieService {
  constructor(
    private prisma: PrismaService,
    private groupeHeure: GroupeHeureService,
  ) {}

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

  async getNomSalle(idSalle: number): Promise<string | null> {
    const salle = await this.prisma.salle.findUnique({
      where: { id: idSalle },
      select: { nomSalle: true },
    });
    return salle?.nomSalle || null;
  }


  // async getNumGroupe(idGroupe: number): Promise<string | null> {
  //   const groupe = await this.prisma.groupe.findUnique({
  //     where: { id: idGroupe },
  //     select: { numGroupe: true },
  //   });
  //   return groupe?.numGroupe || null;
  // }



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

  async GetEmploieByGroupe(id: number): Promise<Emploie[]> {
    return this.prisma.emploie.findMany({
      where: {
        idGroupe: id,
      },
    });
  }

  async GetEmploieBySalle(id: number): Promise<Emploie[]> {
    return this.prisma.emploie.findMany({
      where: {
        idSalle: id,
      },
    });
  }

  async GetEmploieByEnseignant(id: number ): Promise<Emploie[]> {
    return this.prisma.emploie.findMany({
      where: {
        idEnsg: id,
      },
    });
  }


  async GetEmploieByEleve(id: number): Promise<Emploie[]> {
    return this.prisma.emploie.findMany({
      where: {
        idEleve: id,
      }
    })
  }

  // async getSchedule(enseignantId: number) {
  //   const schedule = await this.prisma.$queryRaw`
  //   SELECT jours.nom_jours, emploi.*, enseignant.nomEnsg, enseignant.prenomEnsg, groupeheure.numGroupe, salle.nomSalle
  //   FROM jours
  //   LEFT JOIN emploi ON jours.id_jours = emploi.jour
  //   LEFT JOIN enseignant ON emploi.idEnsg = enseignant.id
  //   LEFT JOIN groupeheure ON emploi.idGroupe = groupeheure.id
  //   LEFT JOIN salle ON emploi.idSalle = salle.id
  //   WHERE enseignant.id = ${enseignantId}
  //   ORDER BY emploi.jour, emploi.heureDebut
  // `;

  //   return schedule;
  // }

  // async getGroupInfo(enseignantId: number) {
  //   const groupInfo = await this.prisma.groupeHeure.findUnique({
  //     where: {
  //       id: enseignantId,
  //     },
  //   });

  //   return groupInfo;
  // }
}
