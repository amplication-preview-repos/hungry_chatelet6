import { TouristLocation as TTouristLocation } from "../api/touristLocation/TouristLocation";

export const TOURISTLOCATION_TITLE_FIELD = "name";

export const TouristLocationTitle = (record: TTouristLocation): string => {
  return record.name?.toString() || String(record.id);
};
