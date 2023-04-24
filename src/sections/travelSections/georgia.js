'use strict'

import { Paragraph } from '../../components'
import { $georgia } from '../../texts/travel'

const props = {
  alignSelf: 'center',
  margin: 'G - - -',
  '@maxTabletL': {
    fontSize: `${15 / 16}em`,
    padding: '- B'
  },
  p: {
    childProps: {
      childProps: {
        fontSize: 'H',
        color: 'orange',
        letterSpacing: `${-4 / 57}em`
      }
    }
  }
}

export const georgia = {
  extend: Paragraph,
  props,
  title: null,
  p: { extend: $georgia }
}
