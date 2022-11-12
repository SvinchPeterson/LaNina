'use strict'

import { Flex } from 'smbls'

import { countryText } from '../../texts'

import { Paragraph } from '../../components'

const paragraph = {
  extend: Paragraph,
  props: {
    alignItems: 'center',
    title: { text: 'about georgia' },
    p: { style: { textAlign: 'center' } }
  },

  title: {},
  p: { extend: countryText }
}

const props = {
  flow: 'column',
  align: 'center center',
  minHeight: 'H2',
  padding: '0 A2'
}

export const country = {
  extend: Flex,
  props,

  paragraph
}
