import { ConflictException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import * as jwt from '';

@Injectable()
export class AuthService {
  constructor(readonly prismaService: PrismaService) {}

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

  async findUserWithEmail(email: string) {
    return this.prismaService.user.findUnique({ where: { email } });
  }
}
