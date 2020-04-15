import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';

import FaceMask from '../components/faceMask';
import Gowns from '../components/gowns';
import Goggles from '../components/goggles';
import FaceShield from '../components/faceShield';
import Gloves from '../components/gloves';
import SanitationProducts from '../components/sanitationProducts';
import Other from '../components/other';
import { Switch } from '@material-ui/core';

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
}));

function Capacity() {
  // apply style
  const classes = useStyles();

  // data structure to hold values for common product details
  const productCommonValues = {
    prod_cap_per_month: '',
    avg_unit_price_usd: '',
    product_image: [],
  };

  // state variable to hold complete capacity data
  const [capacityData, setCapacityData] = useState({
    faceMasks: { product_name: {}, ...productCommonValues },
    gowns: { ...productCommonValues },
    goggles: { ...productCommonValues },
    faceShield: { ...productCommonValues },
    gloves: { ...productCommonValues },
    sanitationProducts: { sanitation_products: {}, ...productCommonValues },
    other: { other_product_name: '', ...productCommonValues },
  });

  // set state for PPE Info checkbox to show or hide
  const [ppeInfoState, setPpeInfoState] = useState({
    faceMasks: { label: 'Face Masks', component: 'FaceMask', checked: false },
    gowns: { label: 'Gowns', component: 'Gowns', checked: false },
    goggles: { label: 'Goggles', component: 'Goggles', checked: false },
    faceShield: {
      label: 'Face Shield',
      component: 'FaceShield',
      checked: false,
    },
    gloves: { label: 'Gloves', component: 'Gloves', checked: false },
    sanitationProducts: {
      label: 'Sanitation Products',
      component: 'SanitationProducts',
      checked: false,
    },
    other: { label: 'Other', component: 'Other', checked: false },
  });

  //set state for list of PPE components to display
  //Initialize with empty array as no component details to show on load
  const [ppeComponentsToShow, setPpeComponentsToShow] = useState([]);

  const submitFormDetails = () => {};

  // handle Checkbox Field Changes
  const handleCheckboxChange = (event, category, checkboxGroup) => {
    console.log(
      '[[capacity.js Checkbox : id, event.target.name, event.target.checked -> ',
      event.target.name,
      event.target.checked,
      category,
      checkboxGroup
    );

    let tempCatObj = capacityData[category][checkboxGroup];
    tempCatObj[event.target.name] = event.target.checked;
    setCapacityData({
      ...capacityData,
      category: { checkboxGroup: tempCatObj },
    });
  };

  // handle Radio Button Field Change
  const handleRadioButtonChange = (category, key, newValue) => {
    let tempCatObj = capacityData[category];
    tempCatObj[key] = newValue;
    setCapacityData({ ...capacityData, category: tempCatObj });
  };

  // handle Text Field Change
  const handleTextFieldChange = (category, key, newValue) => {
    console.log(
      'capacity.js  handleTextFieldChange : cat key val -> ',
      category,
      key,
      newValue
    );
    let tempCatObj = capacityData[category];
    tempCatObj[key] = newValue;
    setCapacityData({ ...capacityData, category: tempCatObj });
  };

  // handle File Upload Field Change
  const handleFileUploadFieldChange = (category, key, newFileNames) => {
    console.log(
      'capacity.js  handleFileUploadFieldChange : cat key val -> ',
      category,
      key,
      newFileNames
    );
    // create temp ds to hold state value
    let tempCatObj = capacityData[category];
    // if files selected, convert FileList to Array for UI and saving purposes
    if (newFileNames.length) {
      const arrFiles = Array.from(newFileNames);
      const files = arrFiles.map((file, index) => {
        const src = window.URL.createObjectURL(file);
        return { file, id: index, src };
      });
      tempCatObj[key] = files;
    } else {
      tempCatObj[key] = [];
    }
    setCapacityData({
      ...capacityData,
      category: tempCatObj,
    });
  };

  // handle change on PPE Info checkbox
  const handlePpeInfoChange = (key, label, isChecked) => {
    console.log('154 - ', key, label, isChecked);
    let tempComp = ppeInfoState;
    tempComp[key]['checked'] = isChecked;
    setPpeInfoState({ ...tempComp });
    // Now set ppeComponentsToShow
    tempComp = [];
    Object.keys(ppeInfoState).forEach(function (key) {
      if (ppeInfoState[key]['checked'] === true) {
        tempComp.push(key);
      }
    });
    setPpeComponentsToShow([...tempComp]);
  };

  // useEffect for change in capacityData
  useEffect(() => {
    let tempComp = [];
    Object.keys(ppeInfoState).forEach(function (key) {
      if (ppeInfoState[key]['checked'] === true) {
        tempComp.push(key);
      }
    });
    setPpeComponentsToShow([...tempComp]);
  }, [capacityData]);

  // useEffect for change in ppeInfoState
  useEffect(() => {
    let tempComp = [];
    Object.keys(ppeInfoState).forEach(function (key) {
      if (ppeInfoState[key]['checked'] === true) {
        tempComp.push(key);
      }
    });
    setPpeComponentsToShow([...tempComp]);
  }, [ppeInfoState]);

  return (
    <Container className={classes.root}>
      <Card className={classes.root}>
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
        <form noValidate autoComplete="off" onSubmit={submitFormDetails}>
          <Grid>
            <Grid container spacing={3}>
              <h1 className={classes.formHeading}>PPE Information</h1>
              <Grid item xs={12}>
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel required component="legend">
                    Product Name
                  </FormLabel>
                  <FormGroup aria-label="Product Name" name="product-name">
                    {Object.keys(ppeInfoState).map((key) => {
                      return (
                        <FormControlLabel
                          key={'Form' + ppeInfoState[key]['label'] + 'Label'}
                          control={
                            <Checkbox
                              checked={ppeInfoState[key]['checked']}
                              onChange={() =>
                                handlePpeInfoChange(
                                  key,
                                  event.target.name,
                                  event.target.checked
                                )
                              }
                              name={ppeInfoState[key]['label']}
                            />
                          }
                          label={ppeInfoState[key]['label']}
                        />
                      );
                    })}
                  </FormGroup>
                </FormControl>
              </Grid>

              <Grid>
                {ppeComponentsToShow.length > 0
                  ? ppeComponentsToShow.map((key, index) => {
                      switch (key) {
                        case 'faceMasks':
                          return (
                            <FaceMask
                              key="faceMasksComp"
                              values={capacityData}
                              handleCheckboxChange={handleCheckboxChange}
                              handleRadioButtonChange={handleRadioButtonChange}
                              handleTextFieldChange={handleTextFieldChange}
                              handleFileUploadFieldChange={
                                handleFileUploadFieldChange
                              }
                            />
                          );
                          break;
                        case 'gowns':
                          return (
                            <Gowns
                              key="gownsComp"
                              values={capacityData}
                              handleCheckboxChange={handleCheckboxChange}
                              handleRadioButtonChange={handleRadioButtonChange}
                              handleTextFieldChange={handleTextFieldChange}
                              handleFileUploadFieldChange={
                                handleFileUploadFieldChange
                              }
                            />
                          );
                          break;
                        case 'goggles':
                          return (
                            <Goggles
                              key="gogglesComp"
                              values={capacityData}
                              handleCheckboxChange={handleCheckboxChange}
                              handleRadioButtonChange={handleRadioButtonChange}
                              handleTextFieldChange={handleTextFieldChange}
                              handleFileUploadFieldChange={
                                handleFileUploadFieldChange
                              }
                            />
                          );
                          break;
                        case 'faceShield':
                          return (
                            <FaceShield
                              key="faceShieldComp"
                              values={capacityData}
                              handleCheckboxChange={handleCheckboxChange}
                              handleRadioButtonChange={handleRadioButtonChange}
                              handleTextFieldChange={handleTextFieldChange}
                              handleFileUploadFieldChange={
                                handleFileUploadFieldChange
                              }
                            />
                          );
                          break;
                        case 'gloves':
                          return (
                            <Gloves
                              key="glovesComp"
                              values={capacityData}
                              handleCheckboxChange={handleCheckboxChange}
                              handleRadioButtonChange={handleRadioButtonChange}
                              handleTextFieldChange={handleTextFieldChange}
                              handleFileUploadFieldChange={
                                handleFileUploadFieldChange
                              }
                            />
                          );
                          break;
                        case 'sanitationProducts':
                          return (
                            <SanitationProducts
                              key="sanitationProductsComp"
                              values={capacityData}
                              handleCheckboxChange={handleCheckboxChange}
                              handleRadioButtonChange={handleRadioButtonChange}
                              handleTextFieldChange={handleTextFieldChange}
                              handleFileUploadFieldChange={
                                handleFileUploadFieldChange
                              }
                            />
                          );
                          break;
                        case 'other':
                          return (
                            <Other
                              key="otherComp"
                              values={capacityData}
                              handleCheckboxChange={handleCheckboxChange}
                              handleRadioButtonChange={handleRadioButtonChange}
                              handleTextFieldChange={handleTextFieldChange}
                              handleFileUploadFieldChange={
                                handleFileUploadFieldChange
                              }
                            />
                          );
                          break;
                        default:
                          return <div>Default Switch</div>;
                          break;
                      }
                    })
                  : null}
              </Grid>
            </Grid>
            <div className={classes.btnStyle}>
              <Button variant="contained" color="primary" type="submit">
                Save Details
              </Button>
            </div>
          </Grid>
        </form>
      </Card>
    </Container>
  );
}
export default Capacity;
