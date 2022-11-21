'use strict'

import { countryText } from '../../texts'
import { Paragraph } from '../../components'

const props = {
  flow: 'column',
  align: 'center center',
  minHeight: '',
  padding: 'F2 A C A',
  margin: 'auto',
  maxWidth: 'H3',
  '@mobileL': { padding: 'F2 B C B' },
  title: {
    text: 'georgia',
    fontSize: 'A',
    minWidth: '90%',
    borderBottom: '1px solid black',
    padding: '- - Y -',
    alignSelf: 'flex-start',
    textAlign: 'left'
  },
  p: {
    fontSize: `${17.5 / 16}em`,
    '@mobileL': { fontSize: 'A' },
    '@mobileS': { fontSize: `${15 / 16}em` },
    style: { letterSpacing: '.5px' }
  }
}

export const country = {
  extend: Paragraph,
  props,

  title: { },
  p: { extend: countryText }
}
