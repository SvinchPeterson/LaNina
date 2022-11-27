'use strict'

import { Flex } from 'smbls'

import { tabs } from './tabs'

import { toursContainer } from './toursContainer'
import { articlesContainer } from './articlesContainer'

const props = {
  width: '100%',
  maxWidth: '1440px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  margin: '- auto',
  padding: 'F - 0 -',
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
    '@media only screen and (max-width: 1366px)': { backgroundAttachment: 'initial' },
    '@media only screen and (max-height: 650px)': {
      paddingTop: `${130 / 16}em`
    },
    '@media only screen and (max-height: 530px)': {
      paddingTop: `${100 / 16}em`
    }
  }
}

export const tours = {
  extend: Flex,
  props,
  attr: { id: 'tours' },

  tabs,
  toursContainer,
  articlesContainer
}
