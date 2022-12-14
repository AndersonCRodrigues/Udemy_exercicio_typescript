let x: unknown;

x = 100;
x = 'Ola';
x = 900;
x = '10';

const y = 800;

if (typeof x === 'number') console.log(x + y);

x = 10;

if (typeof x === 'number') console.log(x + y);
