import { TouristLocationWhereInput } from "./TouristLocationWhereInput";
import { TouristLocationOrderByInput } from "./TouristLocationOrderByInput";

export type TouristLocationFindManyArgs = {
  where?: TouristLocationWhereInput;
  orderBy?: Array<TouristLocationOrderByInput>;
  skip?: number;
  take?: number;
};
