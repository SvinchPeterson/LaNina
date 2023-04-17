'use strict'

import { Flex } from 'smbls'

import { gridGalleries } from './gridGallery'

const props = {
  width: '100%',
  maxWidth: '1440px',
  padding: 'F1 E1 0 E1',
  margin: 'C auto',
  flow: 'column',
  position: 'relative',
  '@maxTabletM': {
    // padding: 'F1 D2 0 D2'
  },

  title: {
    text: 'gallery',
    fontSize: `${12 / 16}em`,
    textTransform: 'uppercase',
    fontWeight: '400',
    display: 'flex',
    position: 'absolute',
    top: 'I',
    left: 'E',
    gap: 'A',
    alignItems: 'center',
    letterSpacing: `${20 / 12}em`,
    transform: 'rotate(180deg)',
    '&:before': {
      content: '""',
      boxSize: 'D2 U',
      background: 'orange',
      display: 'block',
      round: 'A'
    },
    style: {
      writingMode: 'vertical-rl',
      textOrientation: 'mixed'
    }
  }
}

export const gallery = {
  tag: 'section',
  extend: Flex,
  props,
  attr: { id: 'gallery' },

  title: { text: 'gallery' },
  gridGalleries
}
