import { 
  Container, 
  Paper,
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
  Stack,
  CircularProgress,
} from '@mui/material'
import React, { useState } from 'react'
import { Formik, Form } from 'formik';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import formInitialValues from './FormModel/formInitialValues';
import shopFormModel from './FormModel/shopFormModel';
import validationSchema from './FormModel/validationSchema';

import ShopDetails from './FormSteps/ShopDetails'
import BranchDetails from './FormSteps/BranchDetails'
import AdminDetails from './FormSteps/AdminDetails'
import ConfirmDetails from './FormSteps/ConfirmDetails'

const {formId, formField} = shopFormModel;

const steps = [
  'Shop Details',
  'Branch Details',
  'Admin Details',
  'Confirm',
]

// render step content
const _renderStepContent = ({ activeStep }) => {
  switch (activeStep) {
    case 0:
      return <ShopDetails formField={formField} />
    case 1:
      return <BranchDetails formField={formField} />
    case 2:
      return <AdminDetails formField={formField} />
    case 3:
      return <ConfirmDetails formField={formField} />
    default:
      return null
  }
}

const ShopForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const currentValidationSchema = validationSchema[activeStep];

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (activeStep === steps.length - 1) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }
  
  return (
    <Container>
      <Paper>
        <Box sx={{ width: '100%' }} my={2}>
          <Stepper activeStep={activeStep}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Stack alignItems="center">
                <Typography sx={{ mt: 2, mb: 1 }}>
                  {isLoading === true ? (
                    <>
                      <CircularProgress />
                    </>) : (
                    <>
                      <CheckCircleIcon color='success' /> Shop created successfully!
                    </>)}
                </Typography>
              </Stack>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                {isLoading === false && (
                  <Button onClick={handleReset}>Create New</Button>
                )}
                {isLoading && (
                  <Button disabled>
                    <CircularProgress size={24} />
                  </Button>
                )}
              </Box>
            </React.Fragment>) : (
            <Formik
              initialValues={formInitialValues}
              validationSchema={currentValidationSchema}
              onSubmit={_handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form id={formId}>
                  {_renderStepContent({ activeStep })}
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button type='submit'>
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          )}
        </Box>
      </Paper>
    </Container>
  )
}

export default ShopForm
