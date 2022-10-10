'use strict'

import { Flex } from 'smbls'

import ORNAMENTS_PNG from '../../../assets/images/travel/ornaments.png'

import { tabs } from './tabs'
import { toursContainer } from './toursContainer'

import { SectionTitle } from '../../../components'

const title = {
  extend: SectionTitle
}

const props = {
  width: '100%',
  minHeight: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(' + ORNAMENTS_PNG + ')',
  position: 'relative',
  margin: 'G2 0 F 0',
  ':before': {
    content: '""',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'radial-gradient(rgba(30, 40, 49, .95), rgba(30, 40, 49, .96), rgba(30, 40, 49, .97), rgba(30, 40, 49, .98), rgba(30, 40, 49, 1), rgba(30, 40, 49, 1), rgba(30, 40, 49, 1))'
  },
  style: {
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    '@media only screen and (max-width: 1366px)': { backgroundAttachment: 'initial' }
  },

  title: {
    position: 'absolute',
    text: 'tours',
    top: '-B',
    left: '5%'
  }
}

export const tours = {
  extend: Flex,
  props,
  attr: { id: 'tours' },

  title,
  tabs,
  toursContainer
}
