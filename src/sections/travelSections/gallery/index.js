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

  title: {
    text: 'gallery',
    fontSize: 'E',
    textTransform: 'capitalize',
    fontWeight: '700',
    display: 'flex',
    position: 'absolute',
    top: 'G',
    left: 'B1',
    gap: 'Y',
    alignItems: 'center',
    letterSpacing: `${-1.5 / 33}em`,
    transform: 'rotate(180deg)',
    '&:before': {
      content: '""',
      boxSize: 'B2 U',
      background: 'black',
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
