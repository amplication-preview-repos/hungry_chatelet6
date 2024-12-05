import { Module } from "@nestjs/common";
import { ScraperService } from "./scraper.service";
import { ScraperController } from "./scraper.controller";
import { ScraperResolver } from "./scraper.resolver";

@Module({
  controllers: [ScraperController],
  providers: [ScraperService, ScraperResolver],
  exports: [ScraperService],
})
export class ScraperModule {}
