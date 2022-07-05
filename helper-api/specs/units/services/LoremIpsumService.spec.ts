import { LoremIpsumService } from "../../../src/services/LoremIpsumService"

describe('Testando classe LoremIpsumService', () => {
  let _service: LoremIpsumService

  it('Deveria iniciar corretamente a classe LoremIpsumService', () => {
    _service = new LoremIpsumService()
  })

  it('Deveria me retornar 45 palavras', () => {
    // Arrange
    const quantidadePalavras = 45

    // Act
    const result = _service.gerar(quantidadePalavras)

    // Assert
    expect(result.split(' ').length).toBe(quantidadePalavras)
    expect(result.split(' ')).toHaveLength(quantidadePalavras)
  })

  it('Não deveria estourar um erro, quando passado um valor valido', () => {
    expect(() => _service.gerar(20)).not.toThrow()
  })

  it('Deveria estourar um erro, quando passado um tipo incorreto', () => {
    expect(() => _service.gerar("uma palavra" as any)).toThrow('Apenas números são permitidos.')
  })

  it('Deveria estourar um erro, quando passado um tipo incorreto NaN', () => {
    expect(() => _service.gerar(Number.NaN)).toThrow()
  })

  it('Deveria estourar um erro ao passar um número negativo', () => {
    expect(() => _service.gerar(-2)).toThrow()
  })
})