import { priceFormat, priceValidate, titleValidate } from '../utils';

const PRICE_FORMAT_TEST_DATA = [
  {
    value: '1000',
    expected: Intl.NumberFormat('ru-RU').format(1000),
  },
  {
    value: '1 000',
    expected: Intl.NumberFormat('ru-RU').format(1000),
  },
  {
    value: '10',
    expected: '10',
  },
];

const priceFormatHandler = test.each(PRICE_FORMAT_TEST_DATA);

priceFormatHandler('test price format %s', ({ value, expected }) => {
  const actual = priceFormat(value);
});

const TITLE_VALIDATE_TEST_DATA = [
  {
    value: '',
    expected: {
      isValid: false,
      errorMessage: 'Не заполнено поле Название',
    },
  },
  {
    value: ' ',
    expected: {
      isValid: false,
      errorMessage: 'Не заполнено поле Название',
    },
  },
  {
    value: 'good',
    expected: {
      isValid: true,
      errorMessage: '',
    },
  },
];

const titleValidateHandler = test.each(TITLE_VALIDATE_TEST_DATA);

titleValidateHandler('test title validate %s', ({ value, expected }) => {
  const actual = titleValidate(value);
});

const PRICE_VALIDATE_TEST_DATA = [
  {
    value: '1000',
    expected: {
      isValid: true,
      errorMessage: '',
    },
  },
  {
    value: '1 000',
    expected: {
      isValid: true,
      errorMessage: '',
    },
  },
  {
    value: '1,000',
    expected: {
      isValid: true,
      errorMessage: '',
    },
  },
  {
    value: '1cgfsd23',
    expected: {
      isValid: false,
      errorMessage: 'Поле заполнено не корректно',
    },
  },
  {
    value: '0',
    expected: {
      isValid: false,
      errorMessage: 'Стоимость должна быть выше 0',
    },
  },
  {
    value: '',
    expected: {
      isValid: false,
      errorMessage: 'Стоимость должна быть выше 0',
    },
  },
];

const priceValidateHandler = test.each(PRICE_VALIDATE_TEST_DATA);

priceValidateHandler('test price validate %s', ({ value, expected }) => {
  const actual = priceValidate(value);
});
