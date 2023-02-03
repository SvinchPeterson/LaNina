'use strict'

import { Flex } from 'smbls'

import { gridGallery } from './gridGallery'

const props = {
  width: '100%',
  maxWidth: '1440px',
  padding: 'F1 E1 0 E1',
  margin: 'E auto',
  flow: 'column',
  position: 'relative',
  '@tabletM': {
    padding: 'F D1 0 D1',
    gap: 'C'
  },
  '@mobileM': { padding: 'E2 C2 0 C2' },
  '@mobileS': { padding: 'E2 C 0 C' },
  style: {
    ':hover': { '> div > h3 > div': { width: '100px' } },
    '@media only screen and (max-height: 550px)': {
      paddingTop: `${100 / 16}em !important`
    }
  },
  title: {
    text: 'gallery',
    fontSize: 'E',
    textTransform: 'capitalize',
    fontWeight: '500',
    display: 'flex',
    position: 'absolute',
    left: 'A1',
    top: 'G',
    gap: 'Y2',
    '&:before': {
      content: '""',
      boxSize: 'C U',
      background: 'black',
      display: 'block',
      round: 'A',
      '@tabletM': { display: 'none' }
    },
    '@tabletM': {
      position: 'initial',
      alignSelf: 'center'
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
