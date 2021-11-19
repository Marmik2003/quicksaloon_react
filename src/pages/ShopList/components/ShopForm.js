import React from "react";
import {
  Box,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import SelectField from "src/pages/CreateShop/components/FormFields/SelectField";

// eslint-disable-next-line no-unused-vars
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const subscriptionOptions = [
  'Free',
  'Basic',
  'Gold',
  'Platinum',
  'Diamond',
  'Full Access'
]

function ShopForm(props) {
  
  const { open, handleClose, shopState } = props


  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
        <React.Fragment>
          <DialogTitle id="form-dialog-title">Shop Form</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{marginBottom: '5px'}}>Edit shop status</DialogContentText>
            <Formik
              initialValues={shopState}
              onSubmit={(values) => {
                console.log(values);
                handleClose();
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string().required("Required"),
                status: Yup.boolean()
              })}
            >
              {(props) => {
                const {
                  values,
                  touched,
                  errors,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                } = props;
                return (
                  <form onSubmit={handleSubmit}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                      <TextField
                        error={errors.name && touched.name}
                        label="Shop Name"
                        name="shopName"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.name && touched.name && errors.name}
                        margin="normal"
                      />
                    </Stack>
                    
                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                      <SelectField
                        name="subscription"
                        label="Subscription"
                        value={values.subscription}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        margin="normal"
                        helperText={errors.subscription && touched.subscription && errors.subscription}
                        data={subscriptionOptions}
                        fullWidth
                      />
                    </Stack>
                    
                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="status"
                            onChange={handleChange} 
                            onBlur={handleBlur} 
                            checked={values.status} 
                          />
                        }
                        onChange={handleChange}
                        label="Is Active?"
                      />
                    </Stack>
                    <DialogActions>
                      <Button
                        type="button"
                        className="outline"
                        onClick={handleClose}
                      >
                        Close
                      </Button>
                      <Button type="submit" disabled={isSubmitting}>
                        Submit
                      </Button>
                    </DialogActions>
                  </form>
                );
              }}
            </Formik>
          </DialogContent>
        </React.Fragment>
      )
    </Dialog>
  );
}

export default ShopForm;
