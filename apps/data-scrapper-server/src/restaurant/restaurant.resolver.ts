import * as graphql from "@nestjs/graphql";
import { RestaurantResolverBase } from "./base/restaurant.resolver.base";
import { Restaurant } from "./base/Restaurant";
import { RestaurantService } from "./restaurant.service";

@graphql.Resolver(() => Restaurant)
export class RestaurantResolver extends RestaurantResolverBase {
  constructor(protected readonly service: RestaurantService) {
    super(service);
  }
}
