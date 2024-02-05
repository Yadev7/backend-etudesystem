// import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../../prisma.service';
// import { Absence, Prisma } from '@prisma/client';

// @Injectable()
// export class AbsenceService {
//   constructor(private prisma: PrismaService) {}

//   async absence(
//     absenceWhereUniqueInput: Prisma.AbsenceWhereUniqueInput,
//   ): Promise<Absence | null> {
//     return this.prisma.absence.findUnique({
//       where: absenceWhereUniqueInput,
//     });
//   }

//   async absences(params: {
//     skip?: number;
//     take?: number;
//     cursor?: Prisma.AbsenceWhereUniqueInput;
//     where?: Prisma.AbsenceWhereInput;
//     orderBy?: Prisma.AbsenceOrderByWithRelationInput;
//   }): Promise<Absence[]> {
//     const { skip, take, cursor, where, orderBy } = params;
//     return this.prisma.absence.findMany({
//       skip,
//       take,
//       cursor,
//       where,
//       orderBy,
//     });
//   }

//   async createAbsence(data: Prisma.AbsenceCreateInput): Promise<Absence> {
//     return this.prisma.absence.create({
//       data,
//     });
//   }

//   async deleteAbsence(data: Prisma.AbsenceWhereUniqueInput): Promise<Absence> {
//     return this.prisma.absence.delete({
//       where: data,
//     });
//   }

//   async updateAbsence(params: {
//     where: Prisma.AbsenceWhereUniqueInput;
//     data: Prisma.AbsenceUpdateInput;
//   }): Promise<Absence> {
//     const { where, data } = params;
//     return this.prisma.absence.update({
//       data,
//       where,
//     });
//   }
// }
