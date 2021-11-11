import shopFormModel from './shopFormModel'

const {
  formField: {
    shopName,
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
    userConfirmPassword
  }
} = shopFormModel;

const formInitialValues = {
  [shopName.name]: '',
  [subscription.name]: '',
  [branchName.name]: '',
  [address.name]: '',
  [latitude.name]: '',
  [longitude.name]: '',
  [firstName.name]: '',
  [lastName.name]: '',
  [userEmail.name]: '',
  [userPhone.name]: '',
  [userPassword.name]: '',
  [userConfirmPassword.name]: '',
};

export default formInitialValues;
