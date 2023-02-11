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
    fontSize: 'A',
    textTransform: 'uppercase',
    fontWeight: '700',
    display: 'flex',
    position: 'absolute',
    top: 'H2',
    left: 'D1',
    gap: 'A1',
    alignItems: 'center',
    letterSpacing: `1em`,
    transform: 'rotate(180deg)',
    '&:before': {
      content: '""',
      boxSize: 'D1 U',
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
