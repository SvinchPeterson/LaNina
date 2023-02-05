'use strict'

import { countryText } from '../../texts/travelTexts'
import { Paragraph } from '../../components'

const props = {
  alignSelf: 'center',
  margin: 'F - - -',
  align: 'center flex-start',
  maxWidth: 'I1',
  gap: 'C',
  p: {
    textAlign: 'center',
    fontSize: 'B'
  }
}

export const georgia = {
  tag: 'section',
  extend: Paragraph,
  props,

  title: { text: 'georgia' },
  p: { extend: countryText }
}
