import { Controller, Get, Param, Res } from '@nestjs/common';
// import { JwtAuthGuard } from 'src/sys/auth.guard';

 //@UseGuards(JwtAuthGuard)
@Controller('files')
export class FilesController {
  @Get(':files/:file')
  seeUploadedFile(@Res() res,@Param('files') files, @Param('file') file,) {
    const racine = 'files/' ;
    return res.sendFile(file, { root: racine });
  }
}