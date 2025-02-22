import { space, getSpace } from './space'

const screens = {
  _: 0,
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

describe('#getSpace', () => {
  it('gets a value and transforms it according to spec.', () => {
    const props = {}
    expect(getSpace(1)(props)).toEqual('1px')
    expect(getSpace(2)(props)).toEqual('2px')
    expect(getSpace(-2)(props)).toEqual('-2px')
    expect(getSpace(10)(props)).toEqual('10px')
    expect(getSpace(-10)(props)).toEqual('-10px')
    expect(getSpace('50%')(props)).toEqual('50%')
  })

  it('gets value from the theme', () => {
    const props = { theme: { space: [0, 10, 20, 30, 40] } }
    expect(getSpace(1)(props)).toEqual('10px')
    expect(getSpace(2)(props)).toEqual('20px')
    expect(getSpace(-2)(props)).toEqual('-20px')
    expect(getSpace(10)(props)).toEqual('10px')
    expect(getSpace(-10)(props)).toEqual('-10px')
    expect(getSpace('50%')(props)).toEqual('50%')
  })

  it('gets objects value from the theme', () => {
    const props = { theme: { space: { md: 10 } } }
    expect(getSpace('md')(props)).toEqual('10px')
    expect(getSpace('-md')(props)).toEqual('-10px')
    expect(getSpace('-10')(props)).toEqual('-10px')
    expect(getSpace('-10px')(props)).toEqual('-10px')
  })
})

describe('#space', () => {
  it('should support m', () => {
    expect(space({ m: 1 })).toEqual({ margin: '1px' })
    expect(space({ m: 2 })).toEqual({ margin: '2px' })
    expect(space({ m: -2 })).toEqual({ margin: '-2px' })
    expect(space({ m: 10 })).toEqual({ margin: '10px' })
    expect(space({ m: -10 })).toEqual({ margin: '-10px' })
    expect(space({ m: '50%' })).toEqual({ margin: '50%' })
    expect(space({ m: { md: '50%' }, theme: { screens } })).toEqual({
      '@media (min-width: 768px)': { margin: '50%' },
    })
  })

  it('should support mx', () => {
    expect(space({ mx: 10 })).toEqual({
      marginLeft: '10px',
      marginRight: '10px',
    })
    expect(space({ mx: '50%' })).toEqual({
      marginLeft: '50%',
      marginRight: '50%',
    })
    expect(space({ mx: { md: '50%' }, theme: { screens } })).toEqual({
      '@media (min-width: 768px)': { marginLeft: '50%', marginRight: '50%' },
    })
  })

  it('should support mb, mt, ml, mr', () => {
    expect(space({ mb: 10 })).toEqual({ marginBottom: '10px' })
    expect(space({ mt: 10 })).toEqual({ marginTop: '10px' })
    expect(space({ ml: 10 })).toEqual({ marginLeft: '10px' })
    expect(space({ mr: 10 })).toEqual({ marginRight: '10px' })
  })

  it('should support p', () => {
    expect(space({ p: 10 })).toEqual({ padding: '10px' })
    expect(space({ p: '50%' })).toEqual({ padding: '50%' })
    expect(space({ p: { md: '50%' }, theme: { screens } })).toEqual({
      '@media (min-width: 768px)': { padding: '50%' },
    })
  })

  it('should support px, py', () => {
    expect(space({ px: 10 })).toEqual({
      paddingLeft: '10px',
      paddingRight: '10px',
    })
    expect(space({ px: '50%' })).toEqual({
      paddingLeft: '50%',
      paddingRight: '50%',
    })
    expect(space({ px: { md: '50%' }, theme: { screens } })).toEqual({
      '@media (min-width: 768px)': { paddingLeft: '50%', paddingRight: '50%' },
    })
  })

  it('should support pb, pt, pl, pr', () => {
    expect(space({ pb: 10 })).toEqual({ paddingBottom: '10px' })
    expect(space({ pt: 10 })).toEqual({ paddingTop: '10px' })
    expect(space({ pl: 10 })).toEqual({ paddingLeft: '10px' })
    expect(space({ pr: 10 })).toEqual({ paddingRight: '10px' })
  })

  it('should merge everything', () => {
    expect(
      space({ theme: { screens }, px: { md: '50%' }, mx: { md: 10 } }),
    ).toEqual({
      '@media (min-width: 768px)': {
        paddingLeft: '50%',
        paddingRight: '50%',
        marginLeft: '10px',
        marginRight: '10px',
      },
    })
  })

  it('should support variants spaces', () => {
    expect(
      space({
        m: 1,
        p: 0,
        theme: { space: [0, 8, 16] },
      }),
    ).toEqual({
      margin: '8px',
      padding: 0,
    })
  })

  it('should expose meta', () => {
    expect(space.meta.props).toMatchInlineSnapshot(`
      Array [
        "motionSafeMargin",
        "motionReduceMargin",
        "firstMargin",
        "lastMargin",
        "oddMargin",
        "evenMargin",
        "visitedMargin",
        "checkedMargin",
        "focusWithinMargin",
        "hoverMargin",
        "focusMargin",
        "focusVisibleMargin",
        "activeMargin",
        "disabledMargin",
        "placeholderMargin",
        "margin",
        "motionSafeM",
        "motionReduceM",
        "firstM",
        "lastM",
        "oddM",
        "evenM",
        "visitedM",
        "checkedM",
        "focusWithinM",
        "hoverM",
        "focusM",
        "focusVisibleM",
        "activeM",
        "disabledM",
        "placeholderM",
        "m",
        "motionSafeMarginTop",
        "motionReduceMarginTop",
        "firstMarginTop",
        "lastMarginTop",
        "oddMarginTop",
        "evenMarginTop",
        "visitedMarginTop",
        "checkedMarginTop",
        "focusWithinMarginTop",
        "hoverMarginTop",
        "focusMarginTop",
        "focusVisibleMarginTop",
        "activeMarginTop",
        "disabledMarginTop",
        "placeholderMarginTop",
        "marginTop",
        "motionSafeMt",
        "motionReduceMt",
        "firstMt",
        "lastMt",
        "oddMt",
        "evenMt",
        "visitedMt",
        "checkedMt",
        "focusWithinMt",
        "hoverMt",
        "focusMt",
        "focusVisibleMt",
        "activeMt",
        "disabledMt",
        "placeholderMt",
        "mt",
        "motionSafeMarginRight",
        "motionReduceMarginRight",
        "firstMarginRight",
        "lastMarginRight",
        "oddMarginRight",
        "evenMarginRight",
        "visitedMarginRight",
        "checkedMarginRight",
        "focusWithinMarginRight",
        "hoverMarginRight",
        "focusMarginRight",
        "focusVisibleMarginRight",
        "activeMarginRight",
        "disabledMarginRight",
        "placeholderMarginRight",
        "marginRight",
        "motionSafeMr",
        "motionReduceMr",
        "firstMr",
        "lastMr",
        "oddMr",
        "evenMr",
        "visitedMr",
        "checkedMr",
        "focusWithinMr",
        "hoverMr",
        "focusMr",
        "focusVisibleMr",
        "activeMr",
        "disabledMr",
        "placeholderMr",
        "mr",
        "motionSafeMarginBottom",
        "motionReduceMarginBottom",
        "firstMarginBottom",
        "lastMarginBottom",
        "oddMarginBottom",
        "evenMarginBottom",
        "visitedMarginBottom",
        "checkedMarginBottom",
        "focusWithinMarginBottom",
        "hoverMarginBottom",
        "focusMarginBottom",
        "focusVisibleMarginBottom",
        "activeMarginBottom",
        "disabledMarginBottom",
        "placeholderMarginBottom",
        "marginBottom",
        "motionSafeMb",
        "motionReduceMb",
        "firstMb",
        "lastMb",
        "oddMb",
        "evenMb",
        "visitedMb",
        "checkedMb",
        "focusWithinMb",
        "hoverMb",
        "focusMb",
        "focusVisibleMb",
        "activeMb",
        "disabledMb",
        "placeholderMb",
        "mb",
        "motionSafeMarginLeft",
        "motionReduceMarginLeft",
        "firstMarginLeft",
        "lastMarginLeft",
        "oddMarginLeft",
        "evenMarginLeft",
        "visitedMarginLeft",
        "checkedMarginLeft",
        "focusWithinMarginLeft",
        "hoverMarginLeft",
        "focusMarginLeft",
        "focusVisibleMarginLeft",
        "activeMarginLeft",
        "disabledMarginLeft",
        "placeholderMarginLeft",
        "marginLeft",
        "motionSafeMl",
        "motionReduceMl",
        "firstMl",
        "lastMl",
        "oddMl",
        "evenMl",
        "visitedMl",
        "checkedMl",
        "focusWithinMl",
        "hoverMl",
        "focusMl",
        "focusVisibleMl",
        "activeMl",
        "disabledMl",
        "placeholderMl",
        "ml",
        "motionSafeMx",
        "motionReduceMx",
        "firstMx",
        "lastMx",
        "oddMx",
        "evenMx",
        "visitedMx",
        "checkedMx",
        "focusWithinMx",
        "hoverMx",
        "focusMx",
        "focusVisibleMx",
        "activeMx",
        "disabledMx",
        "placeholderMx",
        "mx",
        "motionSafeMy",
        "motionReduceMy",
        "firstMy",
        "lastMy",
        "oddMy",
        "evenMy",
        "visitedMy",
        "checkedMy",
        "focusWithinMy",
        "hoverMy",
        "focusMy",
        "focusVisibleMy",
        "activeMy",
        "disabledMy",
        "placeholderMy",
        "my",
        "motionSafePadding",
        "motionReducePadding",
        "firstPadding",
        "lastPadding",
        "oddPadding",
        "evenPadding",
        "visitedPadding",
        "checkedPadding",
        "focusWithinPadding",
        "hoverPadding",
        "focusPadding",
        "focusVisiblePadding",
        "activePadding",
        "disabledPadding",
        "placeholderPadding",
        "padding",
        "motionSafeP",
        "motionReduceP",
        "firstP",
        "lastP",
        "oddP",
        "evenP",
        "visitedP",
        "checkedP",
        "focusWithinP",
        "hoverP",
        "focusP",
        "focusVisibleP",
        "activeP",
        "disabledP",
        "placeholderP",
        "p",
        "motionSafePaddingTop",
        "motionReducePaddingTop",
        "firstPaddingTop",
        "lastPaddingTop",
        "oddPaddingTop",
        "evenPaddingTop",
        "visitedPaddingTop",
        "checkedPaddingTop",
        "focusWithinPaddingTop",
        "hoverPaddingTop",
        "focusPaddingTop",
        "focusVisiblePaddingTop",
        "activePaddingTop",
        "disabledPaddingTop",
        "placeholderPaddingTop",
        "paddingTop",
        "motionSafePt",
        "motionReducePt",
        "firstPt",
        "lastPt",
        "oddPt",
        "evenPt",
        "visitedPt",
        "checkedPt",
        "focusWithinPt",
        "hoverPt",
        "focusPt",
        "focusVisiblePt",
        "activePt",
        "disabledPt",
        "placeholderPt",
        "pt",
        "motionSafePaddingRight",
        "motionReducePaddingRight",
        "firstPaddingRight",
        "lastPaddingRight",
        "oddPaddingRight",
        "evenPaddingRight",
        "visitedPaddingRight",
        "checkedPaddingRight",
        "focusWithinPaddingRight",
        "hoverPaddingRight",
        "focusPaddingRight",
        "focusVisiblePaddingRight",
        "activePaddingRight",
        "disabledPaddingRight",
        "placeholderPaddingRight",
        "paddingRight",
        "motionSafePr",
        "motionReducePr",
        "firstPr",
        "lastPr",
        "oddPr",
        "evenPr",
        "visitedPr",
        "checkedPr",
        "focusWithinPr",
        "hoverPr",
        "focusPr",
        "focusVisiblePr",
        "activePr",
        "disabledPr",
        "placeholderPr",
        "pr",
        "motionSafePaddingBottom",
        "motionReducePaddingBottom",
        "firstPaddingBottom",
        "lastPaddingBottom",
        "oddPaddingBottom",
        "evenPaddingBottom",
        "visitedPaddingBottom",
        "checkedPaddingBottom",
        "focusWithinPaddingBottom",
        "hoverPaddingBottom",
        "focusPaddingBottom",
        "focusVisiblePaddingBottom",
        "activePaddingBottom",
        "disabledPaddingBottom",
        "placeholderPaddingBottom",
        "paddingBottom",
        "motionSafePb",
        "motionReducePb",
        "firstPb",
        "lastPb",
        "oddPb",
        "evenPb",
        "visitedPb",
        "checkedPb",
        "focusWithinPb",
        "hoverPb",
        "focusPb",
        "focusVisiblePb",
        "activePb",
        "disabledPb",
        "placeholderPb",
        "pb",
        "motionSafePaddingLeft",
        "motionReducePaddingLeft",
        "firstPaddingLeft",
        "lastPaddingLeft",
        "oddPaddingLeft",
        "evenPaddingLeft",
        "visitedPaddingLeft",
        "checkedPaddingLeft",
        "focusWithinPaddingLeft",
        "hoverPaddingLeft",
        "focusPaddingLeft",
        "focusVisiblePaddingLeft",
        "activePaddingLeft",
        "disabledPaddingLeft",
        "placeholderPaddingLeft",
        "paddingLeft",
        "motionSafePl",
        "motionReducePl",
        "firstPl",
        "lastPl",
        "oddPl",
        "evenPl",
        "visitedPl",
        "checkedPl",
        "focusWithinPl",
        "hoverPl",
        "focusPl",
        "focusVisiblePl",
        "activePl",
        "disabledPl",
        "placeholderPl",
        "pl",
        "motionSafePx",
        "motionReducePx",
        "firstPx",
        "lastPx",
        "oddPx",
        "evenPx",
        "visitedPx",
        "checkedPx",
        "focusWithinPx",
        "hoverPx",
        "focusPx",
        "focusVisiblePx",
        "activePx",
        "disabledPx",
        "placeholderPx",
        "px",
        "motionSafePy",
        "motionReducePy",
        "firstPy",
        "lastPy",
        "oddPy",
        "evenPy",
        "visitedPy",
        "checkedPy",
        "focusWithinPy",
        "hoverPy",
        "focusPy",
        "focusVisiblePy",
        "activePy",
        "disabledPy",
        "placeholderPy",
        "py",
        "motionSafeSpaceX",
        "motionReduceSpaceX",
        "firstSpaceX",
        "lastSpaceX",
        "oddSpaceX",
        "evenSpaceX",
        "visitedSpaceX",
        "checkedSpaceX",
        "focusWithinSpaceX",
        "hoverSpaceX",
        "focusSpaceX",
        "focusVisibleSpaceX",
        "activeSpaceX",
        "disabledSpaceX",
        "placeholderSpaceX",
        "spaceX",
        "motionSafeSpaceY",
        "motionReduceSpaceY",
        "firstSpaceY",
        "lastSpaceY",
        "oddSpaceY",
        "evenSpaceY",
        "visitedSpaceY",
        "checkedSpaceY",
        "focusWithinSpaceY",
        "hoverSpaceY",
        "focusSpaceY",
        "focusVisibleSpaceY",
        "activeSpaceY",
        "disabledSpaceY",
        "placeholderSpaceY",
        "spaceY",
        "motionSafeSpaceXReverse",
        "motionReduceSpaceXReverse",
        "firstSpaceXReverse",
        "lastSpaceXReverse",
        "oddSpaceXReverse",
        "evenSpaceXReverse",
        "visitedSpaceXReverse",
        "checkedSpaceXReverse",
        "focusWithinSpaceXReverse",
        "hoverSpaceXReverse",
        "focusSpaceXReverse",
        "focusVisibleSpaceXReverse",
        "activeSpaceXReverse",
        "disabledSpaceXReverse",
        "placeholderSpaceXReverse",
        "spaceXReverse",
        "motionSafeSpaceYReverse",
        "motionReduceSpaceYReverse",
        "firstSpaceYReverse",
        "lastSpaceYReverse",
        "oddSpaceYReverse",
        "evenSpaceYReverse",
        "visitedSpaceYReverse",
        "checkedSpaceYReverse",
        "focusWithinSpaceYReverse",
        "hoverSpaceYReverse",
        "focusSpaceYReverse",
        "focusVisibleSpaceYReverse",
        "activeSpaceYReverse",
        "disabledSpaceYReverse",
        "placeholderSpaceYReverse",
        "spaceYReverse",
      ]
    `)
  })
})

describe('#spaceY', () => {
  it('works as expected', () => {
    expect(space({ spaceY: 1 })).toEqual({
      '& > :not([hidden]) ~ :not([hidden])': {
        '--x-space-y-reverse': 0,
        marginTop: 'calc(1px * calc(1 - var(--x-space-y-reverse)))',
        marginBottom: 'calc(1px * var(--x-space-y-reverse))',
      },
    })
  })
})
