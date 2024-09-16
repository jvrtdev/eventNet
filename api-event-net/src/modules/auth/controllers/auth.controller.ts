import { Body, Controller, Post } from '@nestjs/common';
import { CreateAuthDto } from 'src/domain/dtos';
import { AuthService } from '../services/auth.service';
import { AuthEntity } from 'src/domain/entities';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  Login(@Body() createAuthDto: CreateAuthDto): Promise<AuthEntity> {
    return this.authService.create(createAuthDto);
  }
}
