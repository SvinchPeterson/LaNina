'use strict'

import { Paragraph } from '../../components'
import { $georgia } from '../../texts/travel'

const props = {
  alignSelf: 'center',
  margin: 'G - E -',
  maxWidth: 'H1',
  padding: '- D1 E2 D1',
  round: '0 0 G G',
  '@maxMobileL': {
    margin: 'F - 0 -',
  },
  '@maxMobileS': {
    padding: '- C F C',
  },
  style: {
    boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'
  },
  '@maxTabletL': {
    fontSize: `${15 / 16}em`
  },
  p: {
    childProps: {
      childProps: {
        fontSize: 'H',
        color: 'orange',
        letterSpacing: `${-4 / 57}em`,
        lineHeight: `${70 / 57}em`
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
