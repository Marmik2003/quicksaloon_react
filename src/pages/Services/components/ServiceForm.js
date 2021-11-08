import React from "react";
import {
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
// eslint-disable-next-line no-unused-vars
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


function ServiceForm(props) {
  
  const { open, handleClose, serviceState } = props


  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
        <React.Fragment>
          <DialogTitle id="form-dialog-title">Service Form</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{marginBottom: '5px'}}>Create or Edit service</DialogContentText>
            <Formik
              initialValues={serviceState}
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
                    <TextField
                      error={errors.name && touched.name}
                      label="Service name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={errors.name && touched.name && errors.name}
                      margin="normal"
                    />
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

export default ServiceForm;
