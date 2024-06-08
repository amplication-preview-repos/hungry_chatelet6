import * as graphql from "@nestjs/graphql";
import { TouristLocationResolverBase } from "./base/touristLocation.resolver.base";
import { TouristLocation } from "./base/TouristLocation";
import { TouristLocationService } from "./touristLocation.service";

@graphql.Resolver(() => TouristLocation)
export class TouristLocationResolver extends TouristLocationResolverBase {
  constructor(protected readonly service: TouristLocationService) {
    super(service);
  }
}
