import { SortOrder } from "../../util/SortOrder";

export type TouristLocationOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  latitude?: SortOrder;
  location?: SortOrder;
  longitude?: SortOrder;
  mapsUrl?: SortOrder;
  name?: SortOrder;
  pictures?: SortOrder;
  updatedAt?: SortOrder;
};
