'use strict'

import { Flex } from 'smbls'

import { tabs } from './tabs'

import { toursContainer } from './toursContainer'

const props = {
  width: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: 'E 0 F 0',
  align: 'center center',
  position: 'relative',
  ':before': {
    content: '""',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0'
  },
  style: {
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    '@media only screen and (max-width: 1366px)': { backgroundAttachment: 'initial' }
  }
}

export const tours = {
  extend: Flex,
  props,
  attr: { id: 'tours' },

  tabs,
  toursContainer
}
