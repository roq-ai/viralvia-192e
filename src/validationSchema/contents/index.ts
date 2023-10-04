import * as yup from 'yup';

export const contentValidationSchema = yup.object().shape({
  title: yup.string().required(),
  body: yup.string().required(),
  status: yup.string().required(),
  creator_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
