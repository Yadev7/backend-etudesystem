import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { UserService } from '../Services/user.service';
import { Prisma, User as UserModel } from '@prisma/client';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Users
  @Get('users')
  async getUsers(): Promise<UserModel[]> {
    return this.userService.users({});
  }

  @Get('user/:id')
  async getUserById(@Param('id') id: string): Promise<UserModel | null> {
    return this.userService.user({
      id: Number(id),
    });
  }

  @Post('user')
  async createUser(@Body() data: Prisma.UserCreateInput): Promise<UserModel> {
    return this.userService.createUser(data);
  }

  @Delete('user/:id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    return this.userService.deleteUser({
      id: Number(id),
    });
  }

  @Put('user/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: Prisma.UserUpdateInput,
  ): Promise<UserModel> {
    return this.userService.updateUser({
      where: { id: Number(id) },
      data,
    });
  }
}
