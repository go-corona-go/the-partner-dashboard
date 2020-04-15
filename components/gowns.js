import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ProductDetailsForm from './productDetailsForm';

const useStyles = makeStyles((theme) => ({
  cardShadow: {
    marginTop: '2rem',
    padding: '.5rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  },
}));

function Gowns(params) {
  // style class
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.cardShadow}>
      <h2>Gowns</h2>
      <ProductDetailsForm
        values={params.values['gowns']}
        category="gowns"
        handleRadioButtonChange={params.handleRadioButtonChange}
        handleTextFieldChange={params.handleTextFieldChange}
        handleFileUploadFieldChange={params.handleFileUploadFieldChange}
      />
    </Grid>
  );
}
export default Gowns;
