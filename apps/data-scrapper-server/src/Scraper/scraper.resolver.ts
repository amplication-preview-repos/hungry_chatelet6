import * as graphql from "@nestjs/graphql";
import { ScrapedDataDto } from "../scraper/ScrapedDataDto";
import { ScraperService } from "./scraper.service";

export class ScraperResolver {
  constructor(protected readonly service: ScraperService) {}

  @graphql.Mutation(() => String)
  async ExportToCsv(
    @graphql.Args()
    args: ScrapedDataDto
  ): Promise<string> {
    return this.service.ExportToCsv(args);
  }

  @graphql.Query(() => ScrapedDataDto)
  async FetchScrapedData(
    @graphql.Args()
    args: string
  ): Promise<ScrapedDataDto> {
    return this.service.FetchScrapedData(args);
  }

  @graphql.Query(() => String)
  async InitiateScraping(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.InitiateScraping(args);
  }

  @graphql.Mutation(() => String)
  async StartScraping(
    @graphql.Args()
    args: boolean
  ): Promise<string> {
    return this.service.StartScraping(args);
  }
}
