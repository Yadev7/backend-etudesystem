import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Eleve, Prisma } from '@prisma/client';

@Injectable()
export class EleveService {
    constructor(private prisma: PrismaService) {}

    async eleve(
        eleveWhereUniqueInput: Prisma.EleveWhereUniqueInput,
    ): Promise<Eleve | null> {
        return this.prisma.eleve.findUnique({
            where: eleveWhereUniqueInput,
        });
    }

    async eleves(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.EleveWhereUniqueInput;
        where?: Prisma.EleveWhereInput;
        orderBy?: Prisma.EleveOrderByWithRelationInput;
    }): Promise<Eleve[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.eleve.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createEleve(data: Prisma.EleveCreateInput): Promise<Eleve> {
        return this.prisma.eleve.create({
            data,
        });
    }

    async updateEleve(params: {
        where: Prisma.EleveWhereUniqueInput;
        data: Prisma.EleveUpdateInput;
    }): Promise<Eleve> {
        const { where, data } = params;
        return this.prisma.eleve.update({
            data,
            where,
        });
    }
    

    async deleteEleve(where: Prisma.EleveWhereUniqueInput): Promise<Eleve> {
        return this.prisma.eleve.delete({
            where,
        });
    }



    
}