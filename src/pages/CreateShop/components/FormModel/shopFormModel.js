const shopFormModel = {
  formId: 'shopForm',
  formField: {
    shopName: {
      name: 'shopName',
      label: 'Shop Name*',
      requiredErrorMsg: 'Shop name is required'
    },
    subscription: {
      name: 'subscription',
      label: 'Subscription*',
      requiredErrorMsg: 'Subscription is required'
    },
    branchName: {
      name: 'branchName',
      label: 'Branch Name*',
      requiredErrorMsg: 'Branch name is required'
    },
    address: {
      name: 'address',
      label: 'Address*',
      requiredErrorMsg: 'Address is required'
    },
    latitude: {
      name: 'latitude',
      label: 'Latitude',
    },
    longitude: {
      name: 'longitude',
      label: 'Longitude',
    },
    firstName: {
      name: 'firstName',
      label: 'First Name*',
      requiredErrorMsg: 'First name is required'
    },
    lastName: {
      name: 'lastName',
      label: 'Last Name*',
    },
    userEmail: {
      name: 'userEmail',
      label: 'Email*',
      requiredErrorMsg: 'Email address is required!'
    },
    userPhone: {
      name: 'userPhone',
      label: 'Phone*',
      requiredErrorMsg: 'Phone number is required!'
    },
    userPassword: {
      name: 'userPassword',
      label: 'Password*',
      requiredErrorMsg: 'Password is required!'
    },
    userConfirmPassword: {
      name: 'userConfirmPassword',
      label: 'Confirm Password*',
      requiredErrorMsg: 'Confirm password is required!',
      confirmPasswordErrorMsg: 'Password and confirm password does not match!'
    },
  }
};

export default shopFormModel;