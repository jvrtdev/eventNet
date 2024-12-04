import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateUserDto, QueryParamsDto, UpdateUserDto } from '@dtos';
import { UserService } from '../services/user.service';
import { UserEntity } from '@entities';
import { IsPublic } from '@decorators';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @IsPublic()
  @Post()
  createUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  findAllUsers(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findUserById(@Param('id') id: string): Promise<UserEntity> {
    return this.userService.findById(id);
  }

  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    updateUserDto.id = id;
    return this.userService.update(updateUserDto);
  }

  @Delete(':id')
  removeUser(@Param('id') id: string): Promise<UserEntity> {
    return this.userService.remove(id);
  }
}
