'use strict'

import { $georgia } from '../../texts/travel'

const props = {
  alignSelf: 'center',
  margin: 'G - - -',
  align: 'flex-start flex-start',
  maxWidth: 'H',
  '@maxTabletM': { fontSize: `${15 / 16}em` },
  '@maxMobileL': {
    margin: 'E2 - - -',
    padding: '- B1'
  },
  p: {
    childProps: {
      fontSize: `${15 / 16}em`,
      childProps: {
        fontSize: 'C',
        letterSpacing: `${-1 / 23}em`
      }
    }
  }
}

export const georgia = {
  tag: 'section',
  props,

  p: { extend: $georgia }
}
