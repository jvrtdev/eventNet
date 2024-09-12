import { HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ServiceBase } from 'src/common/base';
import { compare } from 'src/common/utils';
import { CreateAuthDto } from 'src/domain/dtos';
import { AuthEntity } from 'src/domain/entities';
import { UserService } from 'src/modules/user/services/user.service';

export class AuthService implements ServiceBase<AuthEntity, CreateAuthDto> {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async create(dto: CreateAuthDto): Promise<AuthEntity> {
    const user = await this.userService.findByUserName(dto.login);

    const passwordIsEqual = compare(dto.password, user.password);

    if (!passwordIsEqual)
      throw new HttpException('Password invalid', HttpStatus.UNAUTHORIZED);

    const token = this.jwtService.sign(user.id);

    return { token };
  }
}
