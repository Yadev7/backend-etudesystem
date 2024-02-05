import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Pack, Prisma } from '@prisma/client';

@Injectable()
export class PackService {
    constructor(private prisma: PrismaService) {}

    async pack(
        packWhereUniqueInput: Prisma.PackWhereUniqueInput,
    ): Promise<Pack | null> {
        return this.prisma.pack.findUnique({
            where: packWhereUniqueInput,
        });
    }

    async packs(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.PackWhereUniqueInput;
        where?: Prisma.PackWhereInput;
        orderBy?: Prisma.PackOrderByWithRelationInput;
    }): Promise<Pack[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.pack.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createPack(data: Prisma.PackCreateInput): Promise<Pack> {
        return this.prisma.pack.create({
            data,
        })
    }

    async deletePack(data: Prisma.PackWhereUniqueInput): Promise<Pack> {
        return this.prisma.pack.delete({
            where: data,
        })
    }


    async getPack(data: Prisma.PackWhereUniqueInput): Promise<Pack> {
        return this.prisma.pack.findUnique({ where: data })
    }

    async updatePack(params: {
        where: Prisma.PackWhereUniqueInput;
        data: Prisma.PackUpdateInput;
    }): Promise<Pack> {
        const { where, data } = params
        return this.prisma.pack.update({
            where,
            data
        })
    }

    async getPackByGroupe(data: Prisma.PackWhereUniqueInput): Promise<Pack> {
        return this.prisma.pack.findUnique({ where: data })
    }
    

    async getPackBySalle(data: Prisma.PackWhereUniqueInput): Promise<Pack> {
        return this.prisma.pack.findUnique({ where: data })
    }


    async getPackByMatiere(id:number): Promise<Pack[]> {
        return this.prisma.pack.findMany({ 
        where: {
            idMatiere: id,
        } })
    }
/**
 * The function `getPackByEmploie` retrieves a list of packs based on the provided employee ID.
 * @param {number} id - The parameter `id` is a number that represents the ID of an employee.
 * @returns The function `getPackByEmploie` is returning a promise that resolves to an array of `Pack`
 * objects.
 */

    // async getPackByEmploie(id:number): Promise<Pack[]> {
    //     return this.prisma.pack.findMany({ 
    //     where: {
    //         idEmploie: id,
    //     }
    //  })
    // }


    async getPackByProf(data: Prisma.PackWhereUniqueInput): Promise<Pack> {
        return this.prisma.pack.findUnique({ where: data })
    }

    async getPackByNiveau(data: Prisma.PackWhereUniqueInput): Promise<Pack> {
        return this.prisma.pack.findUnique({ where: data })
    }

    async GetPackByEnseignant(data: Prisma.PackWhereUniqueInput): Promise<Pack> {
        return this.prisma.pack.findUnique({ where: data })
    }

}