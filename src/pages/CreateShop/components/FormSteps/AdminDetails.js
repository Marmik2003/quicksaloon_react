import React from 'react'

import { Container, Grid, Typography } from '@mui/material'
import InputField from '../FormFields/InputField';

const AdminDetails = (props) => {
  const {
    formField: {
      firstName,
      lastName,
      userEmail,
      userPhone,
      userPassword,
      userConfirmPassword
    }
  } = props;

  return (
    <Container sx={{my: 3}}>
      <Typography variant='h6' gutterBottom>
        Shop Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={userEmail.name} label={userEmail.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={userPhone.name} label={userPhone.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField type='password' name={userPassword.name} label={userPassword.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField type='password' name={userConfirmPassword.name} label={userConfirmPassword.label} fullWidth />
        </Grid>  
      </Grid>
    </Container>
  )
}

export default AdminDetails
