import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import InputField from '../FormFields/InputField';
import SelectField from '../FormFields/SelectField';

const subscriptionOptions = [
  'Free',
  'Basic',
  'Gold',
  'Platinum',
  'Diamond',
  'Full Access'
]

const ShopDetails = (props) => {
  const {
    formField: {
      shopName,
      subscription, 
    }
  } = props;

  return (
    <Container sx={{my: 3}}>
      <Typography variant='h6' gutterBottom>
        Shop Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={shopName.name} label={shopName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={subscription.name}
            label={subscription.label}
            data={subscriptionOptions}
            fullWidth
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default ShopDetails
