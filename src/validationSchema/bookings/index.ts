import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  status: yup.string().required(),
  car_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
