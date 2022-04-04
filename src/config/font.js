'use strict'

import { getFontFace, set } from '@rackai/symbols'
import { injectGlobal } from '@emotion/css'

import DejavuBold from '../assets/fonts/DejaVuSans-Bold.woff2'
import Dejavu from '../assets/fonts/DejaVuSans.woff2'
import Geo from '../assets/fonts/BPGExtraSquareMtavruli.woff2'

const RegisterFont = set('font',
  // {
  //   name: 'Avenir Next',
  //   url: Light,
  //   fontWeight: 300
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
  // },
  {
    name: 'DejaVu Sans',
    url: DejavuBold,
    fontWeight: 700
  }, {
    name: 'DejaVu Sans',
    url: Dejavu

  }, {
    name: 'BPG ExtraSquare Mtavruli',
    url: Geo
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
