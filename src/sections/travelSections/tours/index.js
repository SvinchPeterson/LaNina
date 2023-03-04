'use strict'

import { Flex } from 'smbls'

import { tabs } from './tabs'

import ORNAMENT_JPG from '../../../assets/images/travel/ornament2.png'

const props = {
  boxSize: '100% 100%',
  minHeight: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  align: 'center center',
  margin: 'G auto D2 auto',
  position: 'relative',
  backgroundImage: 'url(' + ORNAMENT_JPG + ')',
  // overflow: 'hidden',
  style: { backgroundAttachment: 'fixed' },
  ':before': {
    content: '""',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'radial-gradient(rgba(15, 49, 61, .7), rgba(15, 49, 61, 1), rgba(15, 49, 61, 1))'
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
