interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomecompleto(): string;
}

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;

interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomecompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Anderson', 'Rodrigues');

const pessoaObj: TipoPessoa2 = {
  nomecompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
  nome: 'TesteNome',
  sobrenome: 'TesteSobrenome',
};

console.log(pessoa.nomecompleto());
console.log(pessoaObj.nomecompleto());
