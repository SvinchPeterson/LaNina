'use strict'

import { Flex } from 'smbls'

import { tabs } from './tabs'

import ORNAMENT_JPG from '../../../assets/images/travel/ornaments2.png'

const props = {
  boxSize: '100% 100%',
  minHeight: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  align: 'center center',
  margin: 'G auto D2 auto',
  position: 'relative',
  backgroundImage: 'url(' + ORNAMENT_JPG + ')',
  style: { backgroundAttachment: 'fixed' },
  ':before': {
    content: '""',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'radial-gradient(rgba(0, 47, 57, .7),rgba(0, 47, 57, 1), rgba(0, 47, 57, 1))'
  },
  title: {
    color: 'black',
    position: 'absolute',
    textTransform: 'uppercase',
    top: '-B2',
    left: 'E',
    fontSize: 'A',
    letterSpacing: `${19 / 16}em`,
    fontWeight: '700'
  }
}

export const tours = {
  extend: Flex,
  props,
  attr: { id: 'tours' },
  title: { tag: 'h3', text: 'tours' },
  tabs
}
