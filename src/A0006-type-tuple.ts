const dadosCliente1: [number, string] = [1, 'olá'];
const dadosCliente2: readonly [number, string, string?] = [1, 'olá'];
const dadosCliente3: [number, string, ...string[]] = [1, 'olá'];

dadosCliente1[0] = 2;
dadosCliente1[1] = 'oi';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
