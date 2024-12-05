import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const HotelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Hotels"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="availableOffers" source="availableOffers" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="latitude" source="latitude" />
        <TextField label="location" source="location" />
        <TextField label="longitude" source="longitude" />
        <TextField label="mapsUrl" source="mapsUrl" />
        <TextField label="name" source="name" />
        <TextField label="pictures" source="pictures" />
        <TextField label="pricing" source="pricing" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
