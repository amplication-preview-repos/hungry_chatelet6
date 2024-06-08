import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const TouristLocationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <NumberInput label="latitude" source="latitude" />
        <TextInput label="location" source="location" />
        <NumberInput label="longitude" source="longitude" />
        <TextInput label="mapsUrl" source="mapsUrl" />
        <TextInput label="name" source="name" />
        <TextInput label="pictures" multiline source="pictures" />
      </SimpleForm>
    </Create>
  );
};
