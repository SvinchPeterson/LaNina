'use strict'

import { countryText } from '../../texts/travelTexts'
import { Paragraph } from '../../components'

const props = {
  alignSelf: 'center',
  margin: 'G - - -',
  align: 'flex-start flex-start',
  maxWidth: 'H1',
  gap: 'A',
  title: { color: 'naviBlue' },
  p: {
    color: 'naviBlue .85',
    span: { border: '1px solid red' }
  }
}

export const georgia = {
  tag: 'section',
  extend: Paragraph,
  props,

  // title: { text: 'georgia' },
  p: { extend: countryText }
}
