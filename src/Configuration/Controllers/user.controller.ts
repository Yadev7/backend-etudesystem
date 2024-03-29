import {
  Body,
  Controller,
  Delete,
  Get,

  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';

import { UserService } from '../Services/user.service';
import { Prisma, User as UserModel, UserRole } from '@prisma/client';
import { Response } from 'express'; // Import 'Response' from 'express'
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Get all users
  @Get('users')
  async getUsers(): Promise<UserModel[]> {
    return this.userService.users({});
  }

  // Get user by ID
  @Get('user/:id')
  async getUserById(
    @Param('id') id: string,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const user = await this.userService.user({
        id: Number(id),
      });

      if (!user) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'User not found' });
      }
      return res.json(user);
    } catch (error) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'User not found' });
    }
  }

  // Get user by role
  @Get('user/role/:role')
  async GetUserByRole(@Param('role') role: UserRole,@Res() res: Response,): Promise<any> {
    try {
      if (role === UserRole.ADMIN) {
        console.log('Admin');
        return await this.userService.findUserByRole(UserRole.ADMIN);
      } else if (role === UserRole.USER) {
        console.log('User');
        return await this.userService.findUserByRole(UserRole.USER);
      }
    } catch (error) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'User not found' });
    }
  }

  // Create user
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

  // Delete user
  @Delete('user/:id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    return this.userService.deleteUser({
      id: Number(id),
    });
  }

  // Update user
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

  // Get user by etablissement
  @Get('user/etab/:id')
  async GetUserByEtab(@Param('id') id: string): Promise<UserModel[]> {
    return this.userService.GetUserByEtab(Number(id));
  }
}
