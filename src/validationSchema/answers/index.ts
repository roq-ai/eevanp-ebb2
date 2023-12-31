import * as yup from 'yup';

export const answerValidationSchema = yup.object().shape({
  content: yup.string().required(),
  user_id: yup.string().nullable(),
  question_id: yup.string().nullable(),
});
