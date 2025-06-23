import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(readonly prismaService: PrismaService) {}

  async register(data: Prisma.UserCreateInput) {
    return this.prismaService.user.create({
      data,
    });
  }
}
