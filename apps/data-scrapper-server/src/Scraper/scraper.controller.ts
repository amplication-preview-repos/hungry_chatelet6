import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ScraperService } from "./scraper.service";
import { ScrapedDataDto } from "../scraper/ScrapedDataDto";

@swagger.ApiTags("scrapers")
@common.Controller("scrapers")
export class ScraperController {
  constructor(protected readonly service: ScraperService) {}

  @common.Post("/export-to-csv")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ExportToCsv(
    @common.Body()
    body: boolean
  ): Promise<string> {
        return this.service.ExportToCsv(body);
      }

  @common.Get("/fetch-scraped-data")
  @swagger.ApiOkResponse({
    type: ScrapedDataDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchScrapedData(
    @common.Body()
    body: boolean
  ): Promise<ScrapedDataDto> {
        return this.service.FetchScrapedData(body);
      }

  @common.Get("/:id/initiate-scraping")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async InitiateScraping(
    @common.Body()
    body: boolean
  ): Promise<string> {
        return this.service.InitiateScraping(body);
      }

  @common.Post("/start-scraping")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async StartScraping(
    @common.Body()
    body: boolean
  ): Promise<string> {
        return this.service.StartScraping(body);
      }
}
