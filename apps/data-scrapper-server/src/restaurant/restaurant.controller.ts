import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RestaurantService } from "./restaurant.service";
import { RestaurantControllerBase } from "./base/restaurant.controller.base";

@swagger.ApiTags("restaurants")
@common.Controller("restaurants")
export class RestaurantController extends RestaurantControllerBase {
  constructor(protected readonly service: RestaurantService) {
    super(service);
  }
}
