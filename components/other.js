import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import ProductDetailsForm from '../components/productDetailsForm';

const useStyles = makeStyles((theme) => ({
  cardShadow: {
    marginTop: '2rem',
    padding: '.5rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  },
}));
function Other(params) {
  // style class
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.cardShadow}>
      <h2>Other</h2>
      <Grid item xs={12} sm={12} lg={12}>
        <TextField
          required
          id="other_product_name"
          label="Product Name"
          placeholder="Name.."
          className={classes.input}
          value={params.values['other']['other_product_name']}
          onChange={() =>
            params.handleTextFieldChange(
              'other',
              'other_product_name',
              event.target.value
            )
          }
        />
      </Grid>
      <ProductDetailsForm
        values={params.values['other']}
        category="other"
        handleRadioButtonChange={params.handleRadioButtonChange}
        handleTextFieldChange={params.handleTextFieldChange}
        handleFileUploadFieldChange={params.handleFileUploadFieldChange}
      />
    </Grid>
  );
}
export default Other;
