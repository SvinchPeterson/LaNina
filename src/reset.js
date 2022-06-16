'use strict'

import CONFIG from './config'

import { RESET, applyReset, getFontFace, getFontFamily } from '@symbo.ls/scratch'
import { injectGlobal } from './emotion'

const { FONT_FAMILY, FONT } = CONFIG

const FontFace = getFontFace(FONT)
const family = getFontFamily(FONT_FAMILY)

applyReset({
  html: {
    width: '100%',
    height: '100%',
    transform: 'none'
  }
})

injectGlobal(FontFace)
injectGlobal(RESET)
injectGlobal(`
  body,
  input,
  select {
    font-family: ${family};
  }
`)

export default CONFIG
