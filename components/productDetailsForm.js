import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';

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
  thumbnailWrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '6px 4px',
  },
  thumbnail: {
    flexBasis: '100px',
    height: '100%',
    maxWidth: '50px',
    maxHeight: '50px',
    objectFit: 'cover',
  },
  thumbnailCaption: {
    flexGrow: '1',
    fontSize: '14px',
    color: '#2b8fba',
    marginBottom: '5px',
    padding: '0 12px',
  },
}));

function ProductDetailsForm(params) {
  console.log('productDetailsForm.js params ->', params);
  // apply style
  const classes = useStyles();

  // Initialize state variable
  const [values, setValues] = useState({ ...params.values });

  // useEffect to rerender component on props change
  useEffect(() => {
    console.log('prodDetForm : useEffect on params change', params.values);
    setValues({ ...params.values });
  }, [params]);

  return (
    <Grid container spacing={3}>
      <Grid item>
        <FormControl component="fieldset" className={classes.radioGrp}>
          <FormLabel required component="legend">
            Production capacity per month
          </FormLabel>
          <RadioGroup
            aria-label="Production capacity per month"
            name="prod_cap_per_month"
            value={values.prod_cap_per_month || ''}
            onChange={() =>
              params.handleRadioButtonChange(
                params.category,
                'prod_cap_per_month',
                event.target.value
              )
            }
          >
            <FormControlLabel value="lt5k" control={<Radio />} label="<5000" />
            <FormControlLabel
              value="5000 to 10,000"
              control={<Radio />}
              label="5000 to 10,000"
            />
            <FormControlLabel
              value="10,000 to 15,000"
              control={<Radio />}
              label="10,000 to 15,000"
            />
            <FormControlLabel
              value="15,000 to 20,000"
              control={<Radio />}
              label="15,000 to 20,000"
            />
            <FormControlLabel
              value="> 20,000"
              control={<Radio />}
              label="> 20,000"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12} lg={12}>
        <TextField
          required
          id="avg_unit_price_usd"
          label="Average Unit Price in USD"
          placeholder="Price.."
          className={classes.input}
          value={values.avg_unit_price_usd || ''}
          onChange={() =>
            params.handleTextFieldChange(
              params.category,
              'avg_unit_price_usd',
              event.target.value
            )
          }
        />
      </Grid>
      <Grid item xs={12} sm={12} lg={12}>
        <input
          accept="image/*"
          className={classes.input}
          style={{ display: 'none' }}
          id={params.category + 'product_image'}
          onChange={(event) =>
            params.handleFileUploadFieldChange(
              params.category,
              'product_image',
              event.target.files
            )
          }
          multiple
          type="file"
        />
        <label htmlFor={params.category + 'product_image'}>
          <Button
            id={params.category + 'product_image'}
            variant="contained"
            color="primary"
            component="span"
          >
            Upload Image
          </Button>
        </label>
        <div>
          {values.product_image
            ? values.product_image.map(({ file, src, id }, index) => (
                <div key={`thumb${index}`} className={classes.thumbnailWrapper}>
                  <img className={classes.thumbnail} src={src} alt="" />
                  <div className={classes.thumbnailCaption}>{file.name}</div>
                </div>
              ))
            : null}
        </div>
      </Grid>
    </Grid>
  );
}
export default ProductDetailsForm;
