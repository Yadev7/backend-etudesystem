// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Post,
//   Put,
// } from '@nestjs/common';
// import { PaiementInscriService } from '../Services/paiementinscri.service';
// import {
//   Prisma,
//   // PaiementInscription as PaiementInscriptionModel,
// } from '@prisma/client';

// @Controller()
// export class PaiementInscriController {
//   constructor(private readonly paiementInscriService: PaiementInscriService) {}

//   // Get all paiementinscriptions
//   @Get('paiementinscriptions')
//   async getPaiementInscriptions(): Promise<PaiementInscriptionModel[]> {
//     return this.paiementInscriService.paiementInscriptions({});
//   }

//   // Get paiementinscription by ID
//   @Get('paiementinscription/:id')
//   async getPaiementInscriptionById(
//     @Param('id') id: string,
//   ): Promise<PaiementInscriptionModel | null> {
//     return this.paiementInscriService.paiementInscription({
//       id: Number(id),
//     });
//   }

//   // Create new paiementinscription
//   @Post('paiementinscription')
//   async createPaiementInscription(
//     @Body() data: Prisma.PaiementInscriptionCreateInput,
//   ): Promise<PaiementInscriptionModel> {
//     return this.paiementInscriService.createPaiement(data);
//   }

//   // Update paiementinscription
//   @Put('paiementinscription/:id')
//   async updatePaiementInscription(
//     @Param('id') id: string,
//     @Body() data: Prisma.PaiementInscriptionUpdateInput,
//   ): Promise<PaiementInscriptionModel> {
//     return this.paiementInscriService.updatePaiement({
//       where: { id: Number(id) },
//       data,
//     });
//   }

//   // Delete paiementinscription
//   @Delete('paiementinscription/:id')
//   async deletePaiementInscription(
//     @Param('id') id: string,
//   ): Promise<PaiementInscriptionModel> {
//     return this.paiementInscriService.deletePaiement({
//       id: Number(id),
//     });
//   }
// }
