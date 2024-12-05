import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const HotelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="availableOffers" multiline source="availableOffers" />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="latitude" source="latitude" />
        <TextInput label="location" source="location" />
        <NumberInput label="longitude" source="longitude" />
        <TextInput label="mapsUrl" source="mapsUrl" />
        <TextInput label="name" source="name" />
        <TextInput label="pictures" multiline source="pictures" />
        <NumberInput label="pricing" source="pricing" />
      </SimpleForm>
    </Edit>
  );
};
