/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { RestaurantService } from "../restaurant.service";
import { RestaurantCreateInput } from "./RestaurantCreateInput";
import { Restaurant } from "./Restaurant";
import { RestaurantFindManyArgs } from "./RestaurantFindManyArgs";
import { RestaurantWhereUniqueInput } from "./RestaurantWhereUniqueInput";
import { RestaurantUpdateInput } from "./RestaurantUpdateInput";

export class RestaurantControllerBase {
  constructor(protected readonly service: RestaurantService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Restaurant })
  async createRestaurant(
    @common.Body() data: RestaurantCreateInput
  ): Promise<Restaurant> {
    return await this.service.createRestaurant({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        latitude: true,
        location: true,
        longitude: true,
        mapsUrl: true,
        name: true,
        pictures: true,
        pricing: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Restaurant] })
  @ApiNestedQuery(RestaurantFindManyArgs)
  async restaurants(@common.Req() request: Request): Promise<Restaurant[]> {
    const args = plainToClass(RestaurantFindManyArgs, request.query);
    return this.service.restaurants({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        latitude: true,
        location: true,
        longitude: true,
        mapsUrl: true,
        name: true,
        pictures: true,
        pricing: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Restaurant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async restaurant(
    @common.Param() params: RestaurantWhereUniqueInput
  ): Promise<Restaurant | null> {
    const result = await this.service.restaurant({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        latitude: true,
        location: true,
        longitude: true,
        mapsUrl: true,
        name: true,
        pictures: true,
        pricing: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Restaurant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRestaurant(
    @common.Param() params: RestaurantWhereUniqueInput,
    @common.Body() data: RestaurantUpdateInput
  ): Promise<Restaurant | null> {
    try {
      return await this.service.updateRestaurant({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          latitude: true,
          location: true,
          longitude: true,
          mapsUrl: true,
          name: true,
          pictures: true,
          pricing: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Restaurant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRestaurant(
    @common.Param() params: RestaurantWhereUniqueInput
  ): Promise<Restaurant | null> {
    try {
      return await this.service.deleteRestaurant({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          latitude: true,
          location: true,
          longitude: true,
          mapsUrl: true,
          name: true,
          pictures: true,
          pricing: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
