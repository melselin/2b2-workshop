import { Formik, Form, ErrorMessage } from "formik";
import React from "react";
import { Button, FormField, Label } from "semantic-ui-react";
import * as Yup from "yup";
import RentACarTextInput from "../utilities/RentACarTextInput";

export default function carAdd() {
  const initialValues = { modelName: "", kilometer: 100 };
  const schema = Yup.object({
    modelName: Yup.string().required("Araba modeli zorunludur."),
    kilometer: Yup.number().required("Km bilgisi zorunludur."),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values); //axios gelecek
      }}
    >
      <Form className="ui form">
        <RentACarTextInput name="modelName" placeholder="Toyota"/>
        <FormField>
          <field
            value="modelName"
            name="modelName"
            placeholder="Model Name"
          ></field>
          <ErrorMessage
            name="modelName"
            render={(error) => (
              <Label pointing basic color="red" content={error}></Label>
            )}
          ></ErrorMessage>
        </FormField>
        <FormField>
          <field
            value="kilometer"
            name="kilometer"
            placeholder="Kilometer"
          ></field>
         <ErrorMessage
            name="kilometer"
            render={(error) => (
              <Label pointing basic color="red" content={error}></Label>
            )}
          ></ErrorMessage>
        </FormField>
        <Button color="green" type="submit">
          Ekle
        </Button>
      </Form>
    </Formik>
  );
}
