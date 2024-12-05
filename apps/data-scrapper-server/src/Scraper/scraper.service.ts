import { Injectable } from "@nestjs/common";
import { ScrapedDataDto } from "../scraper/ScrapedDataDto";

@Injectable()
export class ScraperService {
  constructor() {}
  async ExportToCsv(args: ScrapedDataDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async FetchScrapedData(args: string): Promise<ScrapedDataDto> {
    throw new Error("Not implemented");
  }
  async InitiateScraping(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async StartScraping(args: boolean): Promise<string> {
    throw new Error("Not implemented");
  }
}
