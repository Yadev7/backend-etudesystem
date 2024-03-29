// import {
//   Body,
//   Controller,
//   Get,
//   Post,
//   Param,
//   Put,
//   Delete,
// } from '@nestjs/common';

// import { AbsenceService } from '../Services/absence.service';
// import { Prisma, Absence as AbsenceModel } from '@prisma/client';

// @Controller()
// export class AbsenceController {
//   constructor(private readonly absenceService: AbsenceService) {}

//   // Get all absences
//   @Get('absences')
//   async getAbsences(): Promise<AbsenceModel[]> {
//     return this.absenceService.absences({});
//   }

//   // Get absence by ID
//   @Get('absence/:id')
//   async getAbsenceById(@Param('id') id: string): Promise<AbsenceModel | null> {
//     return this.absenceService.absence({
//       id: Number(id),
//     });
//   }

//   // Create new absence
//   @Post('absence')
//   async createAbsence(
//     @Body() data: Prisma.AbsenceCreateInput,
//   ): Promise<AbsenceModel> {
//     return this.absenceService.createAbsence(data);
//   }

//   // Update absence
//   @Put('absence/:id')
//   async updateAbsence(
//     @Param('id') id: string,
//     @Body() data: Prisma.AbsenceUpdateInput,
//   ): Promise<AbsenceModel> {
//     return this.absenceService.updateAbsence({
//       where: { id: Number(id) },
//       data,
//     });
//   }

//   // Delete absence
//   @Delete('absence/:id')
//   async deleteAbsence(@Param('id') id: string): Promise<AbsenceModel> {
//     return this.absenceService.deleteAbsence({
//       id: Number(id),
//     });
//   }
// }
