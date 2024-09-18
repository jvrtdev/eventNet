import { Body, Controller, Post } from '@nestjs/common';
import { CreateAuthDto } from 'src/domain/dtos';
import { AuthService } from '../services/auth.service';
import { AuthEntity } from 'src/domain/entities';
import { IsPublic } from 'src/common/decorators';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @Post()
  login(@Body() createAuthDto: CreateAuthDto): Promise<AuthEntity> {
    return this.authService.create(createAuthDto);
  }
}
