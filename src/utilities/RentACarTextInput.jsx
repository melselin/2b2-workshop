import { useField } from 'formik'
import React from 'react'
import { FormField } from 'semantic-ui-react'
import Label from 'semantic-ui-react'

export default function RentACarTextInput({...props}) {
  const [field,meta] =useField(props)
    return (
        <FormField error={meta.touched && !!meta.error}>
            <input {...field}{...props}  />
        {meta.touched && !!meta.error ? (<Label pointing basic color="red" content={meta.error}/>
        ): null}
        </FormField>
  )
}
