'use strict'

import { getFontFace, set } from '@rackai/symbols'
import { injectGlobal } from '@emotion/css'

import Light from '../assets/fonts/49c5f3e1-5867-4b1d-a843-2d07fa60d85d.woff2'
import Regular from '../assets/fonts/2cd55546-ec00-4af9-aeca-4a3cd186da53.woff2'
import Medium from '../assets/fonts/627fbb5a-3bae-4cd9-b617-2f923e29d55e.woff2'
import DemiBold from '../assets/fonts/6afe4676-059a-4aa8-b891-29856bbcba22.woff2'
import Bold from '../assets/fonts/14c73713-e4df-4dba-933b-057feeac8dd1.woff2'
import Heavy from '../assets/fonts/5c57b2e2-f641-421e-a95f-65fcb47e409a.woff2'

const RegisterFont = set('font', {
  name: 'Avenir Next',
  url: Light,
  fontWeight: 300
}, {
  name: 'Avenir Next',
  url: Regular,
  fontWeight: 400
}, {
  name: 'Avenir Next',
  url: Medium,
  fontWeight: 500
}, {
  name: 'Avenir Next',
  url: DemiBold,
  fontWeight: 600
}, {
  name: 'Avenir Next',
  url: Bold,
  fontWeight: 700
}, {
  name: 'Avenir Next',
  url: Heavy,
  fontWeight: 900
})

const FontFace = getFontFace(RegisterFont)

injectGlobal(FontFace)

injectGlobal`
  body {
    font-family: ${Object.keys(RegisterFont)}, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  input,
  select {
    font-family: ${Object.keys(RegisterFont)}, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`
