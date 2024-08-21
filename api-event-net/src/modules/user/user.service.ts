import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';
import { UpdateUserDto } from './dtos/user-dto/update-user.dto';
import { CreateUserDto } from './dtos/user-dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: CreateUserDto): Promise<User> {
    const { name, email, password, phone } = data;

    return this.prisma.user.create({
      data: {
        name,
        email,
        password,
        phone,
        Profile: {
          create: {},
        },
        Address: {
          create: {},
        },
      },
      include: {
        Profile: true,
        Address: true,
      },
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        Profile: true,
        Address: true,
      },
    });
  }

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
      include: {
        Profile: true,
        Address: true,
      },
    });
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: UpdateUserDto;
  }) {
    const { where, data } = params;
    const { profile, address, ...userData } = data;

    return this.prisma.user.update({
      where,
      data: {
        ...userData,
        Profile: {
          update: {
            data: profile,
            where: {
              userId: where.id,
            },
          },
        },
        Address: {
          update: {
            data: address,
            where: {
              userId: where.id,
            },
          },
        },
      },
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
