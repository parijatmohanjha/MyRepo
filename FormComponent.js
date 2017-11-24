import React from 'react';
import TextField from 'material-ui/TextField';

const FormComponent = () => (
  <div>
    <TextField
      hintText="Hint Text"
      floatingLabelText="Please enter username."
    /><br />
    <TextField
      hintText="Hint Text"
      password="true"
      floatingLabelText="Please enter password."
    /><br />
</div>
);

export default FormComponent;
