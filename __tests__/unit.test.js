// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//isPhoneNumber
test('isPhoneNumber - valid US format with dashes', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test('isPhoneNumber - valid format with parentheses and space', () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});

test('isPhoneNumber - missing dash', () => {
  expect(isPhoneNumber("4567890")).toBe(false);
});

test('isPhoneNumber - contains letters', () => {
  expect(isPhoneNumber("abc-def-ghij")).toBe(false);
});

//isEmail
test("isEmail - valid simple email", () => {
  expect(isEmail("test@gmail.com")).toBe(true);
});

test("isEmail - valid edu email", () => {
  expect(isEmail("user_name@ucsd.edu")).toBe(true);
});

test("isEmail - invalid: dot in username", () => {
  expect(isEmail("my.email@gmail.com")).toBe(false);
});

test("isEmail - invalid: missing @", () => {
  expect(isEmail("abc123.ucsd.edu")).toBe(false);
});

//isStrongPassword
test('isStrongPassword - valid all char', () => {
  expect(isStrongPassword('Abcd')).toBe(true);
});

test('isStrongPassword - valid includes dash', () => {
  expect(isStrongPassword('a123_456')).toBe(true);
});

test('isStrongPassword - invalid starts with number', () => {
  expect(isStrongPassword('1abc')).toBe(false);
});

test('isStrongPassword - contains invalid character', () => {
  expect(isStrongPassword('abcd!123')).toBe(false);
});

//isDate
test("isDate - single-digit valid", () => {
  expect(isDate("1/1/2024")).toBe(true);
});

test("isDate - double-digit valid", () => {
  expect(isDate("12/25/2023")).toBe(true);
});

test("isDate - invalid separator", () => {
  expect(isDate("01-01-2024")).toBe(false);
});

test("isDate - invalid year", () => {
  expect(isDate("12/25/23")).toBe(false);
});

//isHex
test('isHexColor - valid short hex with #', () => {
  expect(isHexColor('#abc')).toBe(true);
});

test('isHexColor - valid full hex without #', () => {
  expect(isHexColor('A1B2C3')).toBe(true);
});

test('isHexColor - invalid length', () => {
  expect(isHexColor('#abcd')).toBe(false);
});

test('isHexColor - invalid character', () => {
  expect(isHexColor('12345g')).toBe(false);
});


