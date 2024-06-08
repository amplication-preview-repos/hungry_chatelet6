import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TouristLocationService } from "./touristLocation.service";
import { TouristLocationControllerBase } from "./base/touristLocation.controller.base";

@swagger.ApiTags("touristLocations")
@common.Controller("touristLocations")
export class TouristLocationController extends TouristLocationControllerBase {
  constructor(protected readonly service: TouristLocationService) {
    super(service);
  }
}
