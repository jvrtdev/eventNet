import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ServiceBase } from 'src/common/base';
import { compare, isValidEmail } from 'src/common/utils';
import { CreateAuthDto } from 'src/domain/dtos';
import { AuthEntity } from 'src/domain/entities';
import { UserService } from 'src/modules/user/services/user.service';

@Injectable()
export class AuthService implements ServiceBase<AuthEntity, CreateAuthDto> {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  async create(dto: CreateAuthDto): Promise<AuthEntity> {
    const login = isValidEmail(dto.login)
      ? await this.userService.findByUserEmail(dto.login)
      : await this.userService.findByUserName(dto.login);

    const passwordIsEqual = compare(dto.password, login.password);

    if (!passwordIsEqual)
      throw new HttpException('Password invalid', HttpStatus.UNAUTHORIZED);

    const payload = { userId: login.id };

    const token = this.jwtService.sign(payload);

    return { token };
  }
}
