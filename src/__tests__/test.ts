import {
  capitalize,
  capitalizeWords,
  getDayNameByDate,
  getDayNameByNumber,
  toCamelCase,
  toIpStyle,
  toKebabCase,
  toPascalCase,
  toSnakeCase,
  toCurrency
} from '../index';

test('capitalize', () => {
  expect(capitalize('hello')).toBe('Hello');
})

test('capitalizeWords', () => {
  expect(capitalizeWords('hello world')).toBe('Hello World');
})

test('toIpStyle', () => {
  // console.log(toIpStyle('0669074259'));

  expect(toIpStyle('0669074259')).toBe('06.69.07.42.59');
})

test('toCamelCase', () => {
  expect(toCamelCase('hello world')).toBe('helloWorld');
})

test('toPascalCase', () => {
  expect(toPascalCase('hello world')).toBe('HelloWorld');
})

test('toSnakeCase', () => {
  expect(toSnakeCase('hello world')).toBe('hello_world');
})

test('toKebabCase', () => {
  expect(toKebabCase('hello world')).toBe('hello-world');
})

test('getDayNameByDate', () => {
  expect(getDayNameByDate(new Date('2022-11-09'), 'fr-FR')).toBe('Mercredi');
  expect(getDayNameByDate(new Date('2022-11-09'), 'en-US')).toBe('Wednesday');
})

test('getDayNameByNumber', () => {
  expect(getDayNameByNumber(0, 'fr-FR')).toBe('Dimanche');
  expect(getDayNameByNumber(0, 'en-US')).toBe('Sunday');
  expect(getDayNameByNumber(7, 'fr-FR')).toBe('Invalid day number');
})

test('toCurrency', () => {
  expect(toCurrency(1000, 'EUR', 'fr-FR')).toBe('1 000,00 €');
  expect(toCurrency(1000, 'USD', 'en-US')).toBe('$1,000.00');
})