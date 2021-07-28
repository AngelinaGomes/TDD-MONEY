import { Dollar } from './dollar'

describe('Dollar', () => {
  it('should return 10 when 5 dollars are multiplied by 2', () => {
    const five: Dollar = new Dollar(5)
    var product: Dollar = five.times(2)
    expect(product.amount).toEqual(10)
    product = five.times(3)
    expect(product.amount).toEqual(15)
  })
})
