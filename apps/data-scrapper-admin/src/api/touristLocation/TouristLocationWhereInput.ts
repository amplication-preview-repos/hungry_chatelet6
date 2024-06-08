import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type TouristLocationWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  latitude?: FloatNullableFilter;
  location?: StringNullableFilter;
  longitude?: FloatNullableFilter;
  mapsUrl?: StringNullableFilter;
  name?: StringNullableFilter;
  pictures?: StringNullableFilter;
};
