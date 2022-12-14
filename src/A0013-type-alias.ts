type Idade = number;

type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type CorRGB = 'vermelho' | 'verde' | 'azul';
type CorCMYK = 'ciano' | 'magenda' | 'amarelo' | 'preto';
type CorPreferia = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  idade: 39,
  salario: 200_000, // 200000
  nome: 'anderson',
};

export function setCorPrefeida(pessoa: Pessoa, cor: CorPreferia): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPrefeida(pessoa, 'preto'));

export default 1;
