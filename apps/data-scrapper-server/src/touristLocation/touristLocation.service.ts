import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TouristLocationServiceBase } from "./base/touristLocation.service.base";

@Injectable()
export class TouristLocationService extends TouristLocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
