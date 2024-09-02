import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { CreateUserInput } from '../../domain/dtos/user/create-user.dto';
import { UpdateUserInput } from '../../domain/dtos/user/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserInput): Promise<UserModel> {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  async findAll(): Promise<UserModel[]> {
    return this.userService.users({});
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserModel | null> {
    return this.userService.user({ id });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserInput,
  ): Promise<UserModel> {
    return this.userService.updateUser({
      where: { id },
      data: updateUserDto,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<UserModel> {
    return this.userService.deleteUser({ id });
  }
}
