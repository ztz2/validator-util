import isEmail from './lib/is-email';
import isID from './lib/is-id';
import isIMEI from './lib/is-imei';
import isTrainNumber from './lib/is-train-number';
import isUSCI from './lib/is-usci';

const validatorUtil = {
  isEmail,
  isID,
  isUSCI,
  isIMEI,
  isTrainNumber
};

export default validatorUtil;
