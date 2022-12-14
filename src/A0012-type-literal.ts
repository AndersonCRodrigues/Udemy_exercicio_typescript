let x = 10;
x = 0b1010;

const y = 10;

const a = 100 as const;

const pessoa = {
  nome: 'anderson' as const,
  sobrenome: 'rodrigues',
};

function escolharCor(cor: 'vermelho' | 'amarelo' | 'azul'): string {
  return cor;
}

console.log(escolharCor('azul'));

// Module Mode
export default 1;
