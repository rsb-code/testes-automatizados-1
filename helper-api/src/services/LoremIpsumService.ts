export class LoremIpsumService {
  constructor() {}

  gerar(quantidade: number): string {
    if (!Number.isInteger(quantidade)) {
      throw Error('Apenas números são permitidos.')
    }

    if (Number.isNaN(quantidade)) {
      throw Error('Apenas números validos são permitidos.')
    }

    if (quantidade < 0) {
      throw Error('Apenas números positivos são permitidos.')
    }

    let result = []
    const palavras = ['p1', 'p2', 'p3', 'p4']

    while (result.length < quantidade) {
      const palavra = palavras[Math.floor(Math.random() * palavras.length)]

      result.push(palavra)
    }

    return result.join(' ');
  }
}