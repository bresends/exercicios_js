import { Variable } from '../pages/Ex3';

describe('Class Variable', () => {
  const stringVariableCapitalized = new Variable('Bruno');
  const stringVariableUpperCase = new Variable('BRUNO');
  const stringVariableLowerCase = new Variable('bruno');
  const stringNumbersVariable = new Variable('Bruno10');
  const numberVariable = new Variable('10');
  const onlySpacesVariabel = new Variable(' ');
  const emptyVariable = new Variable('');

  test('should return proper type', () => {
    expect(stringVariableCapitalized.type).toBe('string');
    expect(stringNumbersVariable.type).toBe('string');
    expect(numberVariable.type).toBe('number');
    expect(onlySpacesVariabel.type).toBe('null');
  });

  test('should tell if empty', () => {
    expect(stringVariableCapitalized.empty).toBe(false);
    expect(stringNumbersVariable.empty).toBe(false);
    expect(numberVariable.empty).toBe(false);
    expect(onlySpacesVariabel.empty).toBe(false);
    expect(emptyVariable.empty).toBe(true);
  });

  test('should tell if onlySpaces', () => {
    expect(stringVariableCapitalized.onlySpaces).toBe(false);
    expect(stringNumbersVariable.onlySpaces).toBe(false);
    expect(numberVariable.onlySpaces).toBe(false);
    expect(onlySpacesVariabel.onlySpaces).toBe(true);
  });

  test('should tell if input is a number', () => {
    expect(stringVariableCapitalized.isNumber).toBe(false);
    expect(stringNumbersVariable.isNumber).toBe(false);
    expect(numberVariable.isNumber).toBe(true);
    expect(onlySpacesVariabel.isNumber).toBe(false);
  });

  test('should tell if Pure Alfabetical', () => {
    expect(stringVariableCapitalized.isAlfabetical).toBe(true);
    expect(stringNumbersVariable.isAlfabetical).toBe(false);
    expect(numberVariable.isAlfabetical).toBe(false);
    expect(onlySpacesVariabel.isAlfabetical).toBe(false);
  });

  test('should tell if alfanumeric', () => {
    expect(stringVariableCapitalized.isAlfanumeric).toBe(false);
    expect(stringNumbersVariable.isAlfanumeric).toBe(true);
    expect(numberVariable.isAlfanumeric).toBe(false);
    expect(onlySpacesVariabel.isAlfanumeric).toBe(false);
  });

  test('should tell if string is Uppercase', () => {
    expect(stringVariableCapitalized.isUpperCase).toBe(false);
    expect(stringVariableUpperCase.isUpperCase).toBe(true);
    expect(stringVariableLowerCase.isUpperCase).toBe(false);
    expect(stringNumbersVariable.isUpperCase).toBe(false);
    expect(numberVariable.isUpperCase).toBe(false);
    expect(onlySpacesVariabel.isUpperCase).toBe(false);
  });

  test('should tell if string is LowerCase', () => {
    expect(stringVariableCapitalized.isLowerCase).toBe(false);
    expect(stringVariableUpperCase.isLowerCase).toBe(false);
    expect(stringVariableLowerCase.isLowerCase).toBe(true);
    expect(stringNumbersVariable.isLowerCase).toBe(false);
    expect(numberVariable.isLowerCase).toBe(false);
    expect(onlySpacesVariabel.isLowerCase).toBe(false);
  });

  test('should tell if string is Capitalized', () => {
    expect(stringVariableCapitalized.isCapitalized).toBe(true);
    expect(stringVariableUpperCase.isCapitalized).toBe(false);
    expect(stringVariableLowerCase.isCapitalized).toBe(false);
    expect(stringNumbersVariable.isCapitalized).toBe(true);
    expect(numberVariable.isCapitalized).toBe(false);
    expect(onlySpacesVariabel.isCapitalized).toBe(false);
  });
});
