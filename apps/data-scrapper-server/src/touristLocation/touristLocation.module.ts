import { Module } from "@nestjs/common";
import { TouristLocationModuleBase } from "./base/touristLocation.module.base";
import { TouristLocationService } from "./touristLocation.service";
import { TouristLocationController } from "./touristLocation.controller";
import { TouristLocationResolver } from "./touristLocation.resolver";

@Module({
  imports: [TouristLocationModuleBase],
  controllers: [TouristLocationController],
  providers: [TouristLocationService, TouristLocationResolver],
  exports: [TouristLocationService],
})
export class TouristLocationModule {}
