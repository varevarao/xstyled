import { borders } from './borders'

describe('#divideY', () => {
  it('works as expected', () => {
    expect(borders({ divideY: 1 })).toEqual({
      '& > :not([hidden]) ~ :not([hidden])': {
        '--x-divide-y-reverse': 0,
        borderTopWidth: 'calc(1px * calc(1 - var(--x-divide-y-reverse)))',
        borderBottomWidth: 'calc(1px * var(--x-divide-y-reverse))',
      },
    })
  })
})

describe('#divideX', () => {
  it('works as expected', () => {
    expect(borders({ divideX: 1 })).toEqual({
      '& > :not([hidden]) ~ :not([hidden])': {
        '--x-divide-x-reverse': 0,
        borderLeftWidth: 'calc(1px * calc(1 - var(--x-divide-x-reverse)))',
        borderRightWidth: 'calc(1px * var(--x-divide-x-reverse))',
      },
    })
  })
})

describe('#divideXReverse', () => {
  it('works as expected', () => {
    expect(borders({ divideXReverse: true })).toEqual({
      '& > :not([hidden]) ~ :not([hidden])': {
        '--x-divide-x-reverse': '1',
      },
    })
  })
})

describe('#divideYReverse', () => {
  it('works as expected', () => {
    expect(borders({ divideYReverse: true })).toEqual({
      '& > :not([hidden]) ~ :not([hidden])': {
        '--x-divide-y-reverse': '1',
      },
    })
  })
})

describe('#borderColor', () => {
  it('works as expected', () => {
    expect(borders({ borderColor: 'red' })).toEqual({
      borderColor: 'red',
    })
  })
})

describe('#ring', () => {
  it('works as expected', () => {
    expect(borders({ ring: 3 })).toEqual({
      '--x-ring-shadow':
        'var(--x-ring-inset, /*!*/ /*!*/) 0 0 0 3px var(--x-ring-color)',
      boxShadow: 'var(--x-ring-shadow, 0 0 #0000), var(--x-shadow, 0 0 #0000)',
    })
  })
})
