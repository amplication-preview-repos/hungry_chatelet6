import { SortOrder } from "../../util/SortOrder";

export type HotelOrderByInput = {
  availableOffers?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  latitude?: SortOrder;
  location?: SortOrder;
  longitude?: SortOrder;
  mapsUrl?: SortOrder;
  name?: SortOrder;
  pictures?: SortOrder;
  pricing?: SortOrder;
  updatedAt?: SortOrder;
};
