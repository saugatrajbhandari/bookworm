import { ConflictException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    readonly prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(data: Prisma.UserCreateInput) {
    const isUserExist = await this.findUserWithEmail(data.email);

    if (isUserExist) {
      throw new ConflictException('User already exist');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    return this.prismaService.user.create({
      data: { ...data, password: hashedPassword },
    });
  }

  async login(data: Pick<Prisma.UserCreateInput, 'email' | 'password'>) {
    const user = await this.findUserWithEmail(data.email);

    if (!user) {
      throw new ConflictException('User doesn\`t exist');
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);

    if (!isPasswordValid) {
      throw new ConflictException('Password is not correct');
    }

    const payload = { id: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async findUserWithEmail(email: string) {
    return this.prismaService.user.findUnique({ where: { email } });
  }
}
