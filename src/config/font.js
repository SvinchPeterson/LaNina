'use strict'

import { getFontFace, set } from '@rackai/symbols'
import { injectGlobal } from '@emotion/css'

import extraLightDejaVuSans from '../assets/fonts/DejaVuSans-ExtraLight.ttf'
import regularDejaVuSans from '../assets/fonts/DejaVuSans.ttf'
import boldDejaVuSans from '../assets/fonts/DejaVuSansBold.ttf'
const RegisterFont = set('font',
  {
    fontFamily: 'DejaVu Sans',
    url: extraLightDejaVuSans,
    fontWeight: 300
  },
  {
    fontFamily: 'DejaVu Sans',
    url: regularDejaVuSans,
    fontWeight: 500
  },
  {
    fontFamily: 'DejaVu Sans',
    url: boldDejaVuSans,
    fontWeight: 700
  }
)

// const RegisterFont = set('font', {
//   name: 'Helvetica Neue LT GEO 45 Light Caps',
//   url: HelveticaBold
// }, {
//   name: 'Avenir Next',
//   url: Regular,
//   fontWeight: 400
// }, {
//   name: 'Avenir Next',
//   url: Medium,
//   fontWeight: 500
// }, {
//   name: 'Avenir Next',
//   url: DemiBold,
//   fontWeight: 600
// }, {
//   name: 'Avenir Next',
//   url: Bold,
//   fontWeight: 700
// }, {
//   name: 'Avenir Next',
//   url: Heavy,
//   fontWeight: 900
// }, {
//   name: 'Times',
//   url: Times
// }, {
//   name: 'Gilda Display',
//   url: gilda
// }, {
//   name: 'Alice',
//   url: Alice
// }, {
//   name: 'Hina Mincho',
//   url: HinaMincho
// }, {
//   name: 'Cormorant Garamond',
//   url: CormorantGaramond
// }, {
//   name: 'Marcellus',
//   url: Marcellus
// }, {
//   name: 'Bellefair',
//   url: Bellefair
// })

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
