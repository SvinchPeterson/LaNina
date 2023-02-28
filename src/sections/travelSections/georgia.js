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
    childProps: {
      span: {
        fontSize: 'C',
        fontWeight: '700',
        letterSpacing: '-1px'
      }
    }
  }
}

export const georgia = {
  tag: 'section',
  extend: Paragraph,
  props,

  // title: { text: 'georgia' },
  p: { extend: countryText }
}
