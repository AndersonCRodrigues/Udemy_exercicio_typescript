/* eslint-disable */

// Tipos básicos
const nome: string = 'anderson';
const idade: number = 30;
const adulto: boolean = true;
const sibolo: symbol = Symbol('qualquer-symbol');
// const big: BigInt = 10n;

// Array
const arrayDeNumeros1: Array<number> = [1, 2, 3];
const arrayDeNumeros2: number[] = [1, 2, 3];
const arrayDeStrings1: Array<string> = ['a', 'b', 'c'];
const arrayDeStrings2: string[] = ['a', 'b', 'c'];

// Objetos
const pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'anderson',
  idade: 39
};

// Funções
function soma1(x: number, y: number): number {
  return x + y;
};

const soma2: (x: number, y: number) => number = (x, y) => x + y;