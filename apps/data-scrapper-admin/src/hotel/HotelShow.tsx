import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const HotelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
