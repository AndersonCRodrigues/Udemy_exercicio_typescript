enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
}

enum Cores {
  ROXO = 'ROXO', // 0
  VERDE = 201, // 1
  ROSA, // 2
}

/* console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[0]); */

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(Cores.ROXO);

/* enum Cores2 {
  VERMELHO = 10, // 0
  AZUL = 100, // 1
  AMARELO = 200, // 2
}

console.log(Cores2.VERMELHO);
console.log(Cores2[0]);
console.log(Cores2[10]); */
