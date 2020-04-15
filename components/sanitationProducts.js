import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';

import ProductDetailsForm from '../components/productDetailsForm';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.between('xs', 'sm')]: {
      maxWidth: '90%',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      maxWidth: '700px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      maxWidth: '800px',
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      maxWidth: '900px',
    },
    padding: '5%',
  },
  formHeading: {
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '24px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '32px',
    },
  },
  input: {
    minWidth: '100%',
  },
  btnStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(4),
  },
  radioGrp: {
    marginTop: theme.spacing(3),
  },
  cardShadow: {
    marginTop: '2rem',
    padding: '.5rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  },
}));

function SanitationProducts(params) {
  // style class
  const classes = useStyles();

  //declare list of product names
  const productList = {
    handSoap: {
      name: 'handSoap',
      label: 'Hand Soap - Liquid and Bar',
      checked: false,
    },
    handSanitizer: {
      name: 'handSanitizer',
      label: 'Hand Sanitizer',
      checked: false,
    },
    rubbingAlcohol: {
      name: 'rubbingAlcohol',
      label: 'Rubbing Alcohol',
      checked: false,
    },
    disinfectants: {
      name: 'disinfectants',
      label: 'Disinfectants and Cleaning Solutions',
      checked: false,
    },
    otherSanitation: {
      name: 'otherSanitation',
      label: 'Other:',
      checked: false,
    },
  };

  return (
    <Grid container spacing={3} className={classes.cardShadow}>
      <h2>Sanitation Products</h2>
      <Grid item xs={12}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel required component="legend">
            Type of Sanitation Products
          </FormLabel>
          <FormGroup
            aria-label="Sanitation Products"
            name="sanitation_products"
            id="sanitation_products"
          >
            {Object.keys(productList).map((key) => {
              return (
                <FormControlLabel
                  key={'Form' + productList[key]['label'] + 'Label'}
                  control={
                    <Checkbox
                      key={
                        'CheckboxSanitation' + productList[key]['label'] + 'Id'
                      }
                      checked={
                        params.values['sanitationProducts'][
                          'sanitation_products'
                        ][productList[key]['name']]
                      }
                      onChange={(e) =>
                        params.handleCheckboxChange(
                          e,
                          'sanitationProducts',
                          'sanitation_products'
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
        values={params.values['sanitationProducts']}
        category="sanitationProducts"
        handleRadioButtonChange={params.handleRadioButtonChange}
        handleTextFieldChange={params.handleTextFieldChange}
        handleFileUploadFieldChange={params.handleFileUploadFieldChange}
      />
    </Grid>
  );
}
export default SanitationProducts;
