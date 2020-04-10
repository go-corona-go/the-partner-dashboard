import React from 'react';
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

const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: '80%',
      padding: '5%'
    },
    input: {
        minWidth: '100%'
    },
    btnStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: theme.spacing(4)
    },
    radioGrp: {
        marginTop: theme.spacing(3)
    }
  }));

function SellerDetailsForm(){
    const classes = useStyles();
    const [value, setValue] = React.useState('WFTO');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return(
        <Card className={classes.root}>
            <h1>Partner Contact Details</h1>
            <p>* Required</p>
            <form noValidate autoComplete="off">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} lg={12}>
                        <TextField 
                            required 
                            id="name" 
                            label="Name of the member/partner" 
                            placeholder="Name"
                            className={classes.input} 
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12}>
                        <TextField 
                            required 
                            id="address" 
                            label="Address" 
                            placeholder="Address.." 
                            className={classes.input}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                            required 
                            id="country" 
                            label="Country" 
                            placeholder="Country.." 
                            className={classes.input}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                            required 
                            id="principal-contact" 
                            label="Principal Contact Person" 
                            placeholder="Principal Contact Person Name.." 
                            className={classes.input}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                            required 
                            id="phone-number" 
                            label="Phone Number with Country Code" 
                            placeholder="Phone Number with Country Code.." 
                            className={classes.input}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                            required 
                            id="email-address" 
                            label="Email Address" 
                            placeholder="Email Address.." 
                            className={classes.input}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField  
                            id="whatsapp" 
                            label="WhatsApp" 
                            placeholder="Whatsapp number.." 
                            className={classes.input}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField  
                            id="skype" 
                            label="Skype" 
                            placeholder="Skype.." 
                            className={classes.input}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField  
                            id="viber" 
                            label="Viber" 
                            placeholder="Viber.." 
                            className={classes.input}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField  
                            id="fb-messenger" 
                            label="FB Messenger" 
                            placeholder="FB Messenger.." 
                            className={classes.input}
                        />
                    </Grid>
                    <Grid item>
                    <FormControl component="fieldset" className={classes.radioGrp}>
                        <FormLabel required component="legend">Member of Fair Trade</FormLabel>
                        <RadioGroup aria-label="Member of Fair Trade" name="member-of-fair-trade" value={value} onChange={handleChange}>
                            <FormControlLabel value="WFTO" control={<Radio />} label="WFTO" />
                            <FormControlLabel value="Country Fair Trade Network" control={<Radio />} label="Country Fair Trade Network" />
                            <FormControlLabel value="Fair Trade Enterprise but not a member of WFTO nor Country Network" control={<Radio />} label="Fair Trade Enterprise but not a member of WFTO nor Country Network" />
                            <FormControlLabel value="Other" control={<Radio />} label="Other" />
                        </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
                <div className={classes.btnStyle}>
                    <Button variant="contained" color="primary">
                        Save Details
                    </Button>
                </div>
            </form>
        </Card>
    )
}
export default SellerDetailsForm;