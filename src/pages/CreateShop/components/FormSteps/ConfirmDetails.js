import React from 'react'
import { useFormikContext } from 'formik';
import { Typography, Grid } from '@material-ui/core';

import useStyles from './styles';

const ConfirmDetails = () => {
  const { values: formValues } = useFormikContext();
  const { shopName,
    subscription,
    branchName,
    address,
    latitude,
    longitude,
    firstName,
    lastName,
    userEmail,
    userPhone,
    userPassword,
    userConfirmPassword } = formValues;

  const classes = useStyles();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Confirm shop details
      </Typography>
      <Grid container spacing={3}>
        <Grid item container direction="column" xs={12} sm={4}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Main details
          </Typography>
          <Grid container>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Shop name</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{shopName}</Typography>
              </Grid>
            </>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Shop subscription</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{subscription}</Typography>
              </Grid>
            </>
          </Grid>
        </Grid>
        <Grid item container direction="column" xs={12} sm={4}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Branch Details
          </Typography>
          <Grid container>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Branch name</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{branchName}</Typography>
              </Grid>
            </>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Address</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{address}</Typography>
              </Grid>
            </>
          </Grid>
        </Grid>
        <Grid item container direction="column" xs={12} sm={4}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Admin details
          </Typography>
          <Grid container>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Full Name</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{firstName} {lastName}</Typography>
              </Grid>
            </>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Phone</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{userPhone}</Typography>
              </Grid>
            </>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>E-mail</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{userEmail}</Typography>
              </Grid>
            </>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default ConfirmDetails
