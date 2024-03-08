import { helpers, required, email, maxLength, minLength } from '@vuelidate/validators';

export const CRequired = helpers.withMessage('Filed is required', required);

export const CFemail = helpers.withMessage('E-mail must be valid', email);

export const CMaxLength = (numberCharacters) =>
  helpers.withMessage(
    `Field must be more than ${numberCharacters} characters`,
    maxLength(numberCharacters),
  );

export const CMinLength = (numberCharacters) =>
  helpers.withMessage(
    `Field must be less than ${numberCharacters} characters`,
    minLength(numberCharacters),
  );
