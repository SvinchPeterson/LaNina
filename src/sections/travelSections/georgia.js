'use strict'

import { countryText } from '../../texts/travelTexts'
import { Paragraph } from '../../components'

const props = {
  alignSelf: 'center',
  margin: 'F1 - - -',
  align: 'flex-start flex-start',
  maxWidth: 'H1',
  gap: 'A'
}

export const georgia = {
  tag: 'section',
  extend: Paragraph,
  props,

  title: { text: 'georgia' },
  p: { extend: countryText }
}
