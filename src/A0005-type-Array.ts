// Type Array<T> - T[]

function multiplecaArgs(...args: Array<number>): number {
  return args.reduce((acc, cur) => acc * cur, 1);
}

function concatenaString(...args: string[]): string {
  return args.reduce((acc, cur) => acc + cur);
}

const result = multiplecaArgs(1, 2, 3);
const result2 = concatenaString('a', 'b', 'c');

console.log(result);
console.log(result2);
