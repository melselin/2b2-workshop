import React from "react";
import { Formik, Form,Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormField, Button, Label } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };

  const schema = Yup.object({
    productName: Yup.string().required("Product name must exist"),
    unitPrice: Yup.number().required("Product price must exist"),
  });

  return (
      <Formik 
      initialValues={initialValues} 
      validationSchema={schema}
      onSubmit = {(values)=>{
          console.log(values)
      }}
      >
        <Form className="ui form">
          <KodlamaIoTextInput name="productName" placeholder="Product Name"/>
          <KodlamaIoTextInput name="unitPrice" placeholder="Product Price"/>
          <Button color="green" type="submit">Add</Button>
        </Form>
      </Formik>
  );
}