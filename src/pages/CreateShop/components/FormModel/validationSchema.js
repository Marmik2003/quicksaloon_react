import * as Yup from 'yup';
import shopFormModel from './shopFormModel';
const {
  formField: {
    shopName,
    subscription,
    branchName,
    address,
    latitude,
    longitude,
    userPhone,
    userEmail,
    userPassword,
    userConfirmPassword,
  }
} = shopFormModel;

const validationSchema = [
  // Shop Details
  Yup.object().shape({
    [shopName.name]: Yup.string()
      .required(shopName.requiredErrorMsg),
    [subscription.name]: Yup.string()
      .required(subscription.requiredErrorMsg),
  }),

  // Main Branch Details
  Yup.object().shape({
    [branchName.name]: Yup.string()
      .required(branchName.requiredErrorMsg),
    [address.name]: Yup.string()
      .required(address.requiredErrorMsg),
    [latitude.name]: Yup.number(),
    [longitude.name]: Yup.number(),
  }),

  // ShopAdmin Details
  Yup.object().shape({
    [userPhone.name]: Yup.string()
      .required(userPhone.requiredErrorMsg),
    [userEmail.name]: Yup.string()
      .required(userEmail.requiredErrorMsg),
    [userPassword.name]: Yup.string()
      .required(userPassword.requiredErrorMsg),
    [userConfirmPassword.name]: Yup.string()
      .required(userConfirmPassword.requiredErrorMsg)
      .oneOf([Yup.ref(userPassword.name)], userConfirmPassword.confirmPasswordErrorMsg),
  }),
];

export default validationSchema;
