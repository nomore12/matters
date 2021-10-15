
import React from 'react'
import { Create, Edit, SimpleForm, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton, required, List } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export function ImageList(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="title" />
        <TextField source="desc" />
        <DateField source="date" />
      </Datagrid>
    </List>
  )
}

export function ImageCreate(props) {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="description" options={{multiLine: true}}/>
        <RichTextInput source="body" />
        <DateInput label="create date" source="published_at" defaultValue={new Date()} />
      </SimpleForm>
    </Create>
  )
}

export function ImageEdit(props) {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <TextInput source="title" validate={required()} />
        <TextInput multiline source="description" validate={required()} />
        <RichTextInput source="body" validate={required()} />
        <DateInput label="create date" source="published_at" />
      </SimpleForm>
    </Edit>
  )
}