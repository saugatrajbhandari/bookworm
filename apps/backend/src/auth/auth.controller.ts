import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { registerSchema, registerUserDTO } from 'src/dto/auth.dto';
import { ZodValidationPipe } from 'nestjs-zod';

@Controller('auth')
export class AuthController {
  constructor(readonly authService: AuthService) {}

  @Post('register')
  @UsePipes(new ZodValidationPipe(registerSchema))
  async register(@Body() dto: registerUserDTO) {
    return this.authService.register(dto);
  }
}
