import React, { useState } from 'react';
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

// import GraphQL query here
import { useQuery } from '@apollo/react-hooks';
import { FETCH_SELLERS_QUERY } from '../graphql/sellers.query';

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
}));

function SellerDetailsForm() {
  const classes = useStyles();
  const [orgDetails, setValue] = React.useState('WFTO');
  const [values, setValues] = React.useState({
    name: '',
    address: '',
    country: '',
    principalContact: '',
    phoneNumber: '',
    emailAddress: '',
    whatsappNumber: '',
    skype: '',
    viber: '',
    fbMessenger: '',
  });

  const handleTextFieldChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleRadioButtonChange = (event) => {
    setValue(event.target.value);
  };

  const submitFormDetails = () => {};

  // Test GraphQL query here
  const { loading, data: sellersData } = useQuery(FETCH_SELLERS_QUERY);
  if (sellersData) {
    console.log('GraphQL Query Result - ', sellersData);
  }

  return (
    <Card className={classes.root}>
      <h1 className={classes.formHeading}>Partner Contact Details</h1>
      <p>* Required</p>
      <form noValidate autoComplete="off" onSubmit={submitFormDetails}>
        <Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} lg={12}>
              <TextField
                required
                id="name"
                label="Name of the member/partner"
                placeholder="Name"
                className={classes.input}
                value={values.name}
                onChange={handleTextFieldChange('name')}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <TextField
                required
                id="address"
                label="Address"
                placeholder="Address.."
                className={classes.input}
                value={values.address}
                onChange={handleTextFieldChange('address')}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <TextField
                required
                id="country"
                label="Country"
                placeholder="Country.."
                className={classes.input}
                value={values.country}
                onChange={handleTextFieldChange('country')}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <TextField
                required
                id="principal-contact"
                label="Principal Contact Person"
                placeholder="Principal Contact Person Name.."
                className={classes.input}
                value={values.principalContact}
                onChange={handleTextFieldChange('principalContact')}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <TextField
                required
                id="phone-number"
                label="Phone Number with Country Code"
                placeholder="Phone Number with Country Code.."
                className={classes.input}
                value={values.phoneNumber}
                onChange={handleTextFieldChange('phoneNumber')}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <TextField
                required
                id="email-address"
                label="Email Address"
                placeholder="Email Address.."
                className={classes.input}
                value={values.emailAddress}
                onChange={handleTextFieldChange('emailAddress')}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <TextField
                id="whatsapp"
                label="WhatsApp"
                placeholder="Whatsapp number.."
                className={classes.input}
                value={values.whatsappNumber}
                onChange={handleTextFieldChange('whatsappNumber')}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <TextField
                id="skype"
                label="Skype"
                placeholder="Skype.."
                className={classes.input}
                value={values.skype}
                onChange={handleTextFieldChange('skype')}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <TextField
                id="viber"
                label="Viber"
                placeholder="Viber.."
                className={classes.input}
                value={values.viber}
                onChange={handleTextFieldChange('viber')}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <TextField
                id="fb-messenger"
                label="FB Messenger"
                placeholder="FB Messenger.."
                className={classes.input}
                value={values.fbMessenger}
                onChange={handleTextFieldChange('fbMessenger')}
              />
            </Grid>
            <Grid item>
              <FormControl component="fieldset" className={classes.radioGrp}>
                <FormLabel required component="legend">
                  Member of Fair Trade
                </FormLabel>
                <RadioGroup
                  aria-label="Member of Fair Trade"
                  name="member-of-fair-trade"
                  value={orgDetails}
                  onChange={handleRadioButtonChange}
                >
                  <FormControlLabel
                    value="WFTO"
                    control={<Radio />}
                    label="WFTO"
                  />
                  <FormControlLabel
                    value="Country Fair Trade Network"
                    control={<Radio />}
                    label="Country Fair Trade Network"
                  />
                  <FormControlLabel
                    value="Fair Trade Enterprise but not a member of WFTO nor Country Network"
                    control={<Radio />}
                    label="Fair Trade Enterprise but not a member of WFTO nor Country Network"
                  />
                  <FormControlLabel
                    value="Other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
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
  );
}
export default SellerDetailsForm;
