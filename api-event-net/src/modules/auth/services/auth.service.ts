import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ServiceBase } from '@bases';
import { compare, isValidEmail } from '@utils';
import { CreateAuthDto } from '@dtos';
import { AuthEntity } from '@entities';
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

    const passwordIsEqual = await compare(dto.password, login.password);

    if (!passwordIsEqual)
      throw new HttpException('Password invalid', HttpStatus.UNAUTHORIZED);

    const payload = { sub: login.id, name: login.name, userName: login.userName };

    const token = this.jwtService.sign(payload);

    return { token };
  }
}
