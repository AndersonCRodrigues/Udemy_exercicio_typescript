function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Anderson',
  sobrenome: 'Rodrigues',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Anderson', 'Rodrigues');
pessoa.exibirNome();

export { pessoa };
