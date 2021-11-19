import React from 'react'

import {
  Container,
  Typography,
  Grid,
} from '@mui/material'

import InputField from '../FormFields/InputField'
import MapComponent from '../MapComponent/MapComponent'

const defaultMapProps = {
  lat: 23.594263,
  lng: 72.963251
};

const BranchDetails = (props) => {
  const {
    formField: {
      branchName,
      address,
      latitude,
      longitude, 
    },
    setFieldValue,
    formInitialValues,
  } = props;

  formInitialValues.latitude = formInitialValues.latitude || defaultMapProps.lat;
  formInitialValues.longitude = formInitialValues.longitude || defaultMapProps.lng;

  const mapLatLng = {
    latitude: formInitialValues.latitude,
    longitude: formInitialValues.longitude,
  };

  return (
    <Container sx={{my: 3}}>
      <Typography variant='h6' gutterBottom>
        Shop Details
      </Typography>
      <Grid container spacing={2}>
        <Grid container item xs={12} sm={6} px={2}>
          <Grid item xs={12} mb={2}>
            <InputField name={branchName.name} label={branchName.label} fullWidth />
          </Grid>
          <Grid item xs={12} mb={2}>
            <InputField name={address.name} label={address.label} fullWidth />
          </Grid>
          <Grid container>
            <Grid item xs={6} pr={1}>
              <InputField name={latitude.name} label={latitude.label} fullWidth />
            </Grid>
            <Grid item xs={6} pl={1}>
              <InputField name={longitude.name} label={longitude.label} fullWidth />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} px={2}>
          <MapComponent setLatLng={setFieldValue} mapProps={mapLatLng}></MapComponent>
        </Grid>
      </Grid>
    </Container>
  )
}

export default BranchDetails
