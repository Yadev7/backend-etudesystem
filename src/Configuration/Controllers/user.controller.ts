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
    try {
      // Check if the content already exists based on a specific property (for example, 'name')
      const existingUser = await this.userService.findUserByEmail(
        data.loginUser,
      );

      if (existingUser) {
        // If the content exists, you can choose to handle it, log it, or throw an error
        throw new Error('Enseignant with the same name already exists.');
      }

      // If it doesn't exist, proceed with creating the content
      return await this.userService.createUser(data);
    } catch (error) {
      // Handle the error here, you can log it or customize the response
      console.error('Error creating enseignant:', error);
      throw new Error('Error creating enseignant: ' + error.message); // You can customize the error message if needed
    }
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
