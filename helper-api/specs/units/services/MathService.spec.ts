import { MathService } from '../../../src/services/MathService'

describe('MathService', () => {
  let _service: MathService

  it ('deveria instanciar corretamente a classe', () => {
    _service = new MathService()

    expect(_service).toBeTruthy()
  })

  it('deveria resultar 2, se somado 1 + 1', () => {
    const resultado = _service.getSum(1, 1)
    
    expect(resultado).toBe(2)
  })

  it('deveria resultar 4, se somado 3 + 1', () => {
    const resultado = _service.getSum(3, 1)
    
    expect(resultado).toBe(4)
  })

  it ('O metodo getSubtract deveria me retornar 1, quando lhe fosse passado x=2 e y=1', () => {
    const result = _service.getSubtract(2, 1)

    expect(result).toBe(1)
  })
})