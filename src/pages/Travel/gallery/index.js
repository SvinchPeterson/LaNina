'use strict'

import { Flex } from 'smbls'

import { gridGallery } from './gridGallery'

const props = {
  width: '100%',
  maxWidth: '1440px',
  padding: 'F1 E1',
  margin: 'E auto',
  flow: 'column',
  style: { ':hover': { '> div > h3 > div': { width: '100px' } } },
  position: 'relative',
  '@tabletM': { padding: 'F D1' },
  '@mobileM': { padding: 'F C2' },
  '@mobileS': { padding: 'F C' },
  '@mobileXS': { padding: 'F B1' },
  title: {
    text: 'gallery',
    fontSize: 'D',
    textTransform: 'capitalize',
    fontWeight: '500',
    display: 'flex',
    position: 'absolute',
    left: 'B2',
    top: 'G',
    gap: 'Y2',
    '&:before': {
      content: '""',
      boxSize: 'C U',
      background: 'black',
      display: 'block',
      round: 'A'
    },
    '@tabletM': {
      position: 'initial'
    },
    style: {
      alignItems: 'center',
      letterSpacing: '.5px',
      writingMode: 'vertical-rl',
      textOrientation: 'mixed',
      transform: 'rotate(180deg)',
      '@media only screen and (max-width: 1280px)': {
        writingMode: 'initial',
        textOrientation: 'initial',
        transform: 'rotate(0)'
      },
      '@media only screen and (min-width: 1280px) and (max-height: 800px)': {
        top: `${150 / 28}em`,
        writingMode: 'initial',
        textOrientation: 'initial',
        transform: 'rotate(0)'
      }
    },
    ':before': {
      content: '""',
      boxSize: `${2 / 16}em ${50 / 16}em`,
      background: 'black',
      display: 'none'
    }
  }
}

export const gallery = {
  extend: Flex,
  props,
  attr: { id: 'gallery' },
  title: {},

  gridGallery
}
