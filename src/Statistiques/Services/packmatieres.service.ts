import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { PackMatieres, Prisma } from '@prisma/client';
import { GroupeHeureService } from './groupeheure.service';

@Injectable()
export class PackMatiereService {
    constructor(private prisma: PrismaService, private groupeHeure: GroupeHeureService) {}

    async packMatiere(
        packMatiereWhereUniqueInput: Prisma.PackMatieresWhereUniqueInput,
    ): Promise<PackMatieres | null> {
        return this.prisma.packMatieres.findUnique({
            where: packMatiereWhereUniqueInput,
        });
    }

    async packMatieres(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.PackMatieresWhereUniqueInput;
        where?: Prisma.PackMatieresWhereInput;
        orderBy?: Prisma.PackMatieresOrderByWithRelationInput;
    }): Promise<PackMatieres[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.packMatieres.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }


    async createPackMatiere(data: Prisma.PackMatieresCreateInput): Promise<PackMatieres> {
        return this.prisma.packMatieres.create({
            data,
        })
    }


    async deletePackMatiere(
        data: Prisma.PackMatieresWhereUniqueInput,
    ): Promise<PackMatieres> {
        return this.prisma.packMatieres.delete({
            where: data,
        })
    }


    async updatePackMatiere(params: {
        where: Prisma.PackMatieresWhereUniqueInput;
        data: Prisma.PackMatieresUpdateInput;
    }): Promise<PackMatieres> {
        const { where, data } = params;
        return this.prisma.packMatieres.update({
            data,
            where,
        })
    }

    async getPackMatiere(data: Prisma.PackMatieresWhereInput): Promise<PackMatieres | null> {
        return this.prisma.packMatieres.findFirst({ where: data })
    }

    async GetPackMatiereByEnseignant(data: Prisma.PackMatieresWhereInput): Promise<PackMatieres | null> {
        return this.prisma.packMatieres.findFirst({ where: data })
    }

    async getPackMatiereBySalle(data: Prisma.PackMatieresWhereInput): Promise<PackMatieres | null> {
        return this.prisma.packMatieres.findFirst({ where: data })
    }

    async getPackMatiereByGroupe(data: Prisma.PackMatieresWhereInput): Promise<PackMatieres | null> {
        return this.prisma.packMatieres.findFirst({ where: data })
    }


}