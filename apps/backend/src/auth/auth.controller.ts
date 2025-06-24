import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginUserDto, registerUserDto } from 'src/dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: registerUserDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  async login(@Body() dto: loginUserDto) {
    return this.authService.login(dto);
  }
}
