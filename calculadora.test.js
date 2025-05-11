const Calculadora = require('./calculadora')

describe('Calculadora', () => {
  it('Deverá retornar a soma de dois números', () => {
    const calculadora = new Calculadora()

    expect(calculadora.soma(2,7)).toBe(7)
    
  })

  it('Deverá retornar a subtração de dois números', () => {
    const calculadora = new Calculadora()

    expect(calculadora.subtracao(2,1)).toBe(1)
    
  })

  it('Deverá retornar a multiplicação entre dois números', () => {
    const calculadora = new Calculadora()

    expect(calculadora.multiplicacao(5,5)).toBe(25)
  })

  it('Deverá retornar a divisao entre dois números', () => {
    const calculadora = new Calculadora()

    expect(calculadora.divisao(10,2)).toBe(5)
  })
})