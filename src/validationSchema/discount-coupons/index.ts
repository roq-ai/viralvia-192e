import * as yup from 'yup';

export const discountCouponValidationSchema = yup.object().shape({
  code: yup.string().required(),
  value: yup.number().integer().required(),
  expiry_date: yup.date().required(),
  company_id: yup.string().nullable().required(),
});
