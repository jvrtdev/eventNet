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
import { CreateUserDto, QueryParamsDto, UpdateUserDto } from 'src/domain/dtos';
import { UserService } from '../services/user.service';
import { UserEntity } from 'src/domain/entities';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  findAllUsers(@Query() queryParams: QueryParamsDto): Promise<UserEntity[]> {
    return this.userService.findAll(queryParams);
  }

  @Get(':id')
  findUserById(@Param('id') id: string): Promise<UserEntity | null> {
    return this.userService.findById(id);
  }

  @Put()
  updateUser(@Body() updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return this.userService.update(updateUserDto);
  }

  @Delete(':id')
  removeUser(@Param('id') id: string): Promise<UserEntity> {
    return this.userService.remove(id);
  }
}
