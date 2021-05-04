import { helloNome } from '../pages/Ex1';

test('should return Name', () => {
  expect(helloNome('Bruno')).toBe('Olá Bruno!');
  expect(helloNome('Bruno ')).toBe('Olá Bruno!');
  expect(helloNome(' Bruno ')).toBe('Olá Bruno!');
});

test('should show you typed a number', () => {
  expect(helloNome('0')).toBe('Você digitou um número. Digite um nome');
  expect(helloNome('Bruno    0')).toBe('Você digitou um número. Digite um nome');
});

test('should show you typed nothing', () => {
  expect(helloNome('')).toBe('Por favor, digite algo');
});
