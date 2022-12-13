const objetoA: {
  chaveA: string;
  readonly chaveB: string; // não pode alterar o valor da chave
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'valorA',
  chaveB: 'valorB',
};

objetoA.chaveA = 'Outro Valor';
objetoA.chaveC = 'Nova Chave';
objetoA.chaveD = 'Nova Chave';

console.log(objetoA);
