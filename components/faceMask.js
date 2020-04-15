import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';

import ProductDetailsForm from '../components/productDetailsForm';

const useStyles = makeStyles((theme) => ({
  cardShadow: {
    marginTop: '2rem',
    padding: '.5rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  },
}));

function FaceMask(params) {
  // apply style
  const classes = useStyles();

  //declare list of product names
  const productList = {
    surgical3Ply: {
      name: 'surgical3Ply',
      label: 'Surgical 3-ply',
      checked: false,
    },
    n95: { name: 'n95', label: 'N95', checked: false },
    other: { name: 'other', label: 'Other', checked: false },
  };

  return (
    <Grid container spacing={3} className={classes.cardShadow}>
      <h2>Face Masks</h2>
      <Grid item xs={12}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel required component="legend">
            Type of Face Mask
          </FormLabel>
          <FormGroup
            aria-label="Product Name"
            name="product_name"
            value={params.values.product_name}
          >
            {Object.keys(productList).map((key) => {
              return (
                <FormControlLabel
                  key={'Form' + productList[key]['label'] + 'Label'}
                  control={
                    <Checkbox
                      key={
                        'CheckboxFaceMask' + productList[key]['label'] + 'Id'
                      }
                      checked={
                        params.values['faceMasks']['product_name'][
                          productList[key]['name']
                        ]
                      }
                      onChange={(e) =>
                        params.handleCheckboxChange(
                          e,
                          'faceMasks',
                          'product_name'
                        )
                      }
                      name={productList[key]['name']}
                    />
                  }
                  label={productList[key]['label']}
                />
              );
            })}
          </FormGroup>
        </FormControl>
      </Grid>
      <ProductDetailsForm
        values={params.values['faceMasks']}
        category="faceMasks"
        handleRadioButtonChange={params.handleRadioButtonChange}
        handleTextFieldChange={params.handleTextFieldChange}
        handleFileUploadFieldChange={params.handleFileUploadFieldChange}
      />
    </Grid>
  );
}
export default FaceMask;
