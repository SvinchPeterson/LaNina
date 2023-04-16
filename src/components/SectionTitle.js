'use strict'

import { Flex } from 'smbls'

const props = {
  width: 'fit-content',
  fontSize: `${10 / 16}em`,
  textTransform: 'uppercase',
  fontWeight: '400',
  letterSpacing: `${7 / 10}em`,
  align: 'center center',
  gap: 'Z',
  ':before': {
    content: '"|||"',
    color: 'orange',
    letterSpacing: `${3 / 10}em !important`,
  },
  ':after': {
    content: '"|||"',
    color: 'orange',
    letterSpacing: `${3 / 10}em`,
    margin: '- - - -3px'
  }

}

export const SectionTitle = {
  tag: 'h5',
  extend: Flex,
  props,
  text: 'Services & Facilities'
}