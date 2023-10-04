import * as yup from 'yup';

export const contractValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  terms: yup.string().required(),
  creator_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
