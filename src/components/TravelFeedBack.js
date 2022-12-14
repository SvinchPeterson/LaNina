'use strict'

import { Flex, Img } from 'smbls'

const props = {
  boxSizing: 'border-box',
  width: 'fit-content',
  flow: 'column',
  justifyContent: 'flex-start',
  gap: '',
  background: 'rgba(213, 241, 255, 1)',
  padding: 'B B A1 B',
  round: 'B',
  position: 'relative',
  '@mobileL': { padding: 'A' },

  person: {
    align: 'center flex-start',
    gap: 'Z',
    img: {
      boxSize: 'C2 C2',
      round: '100%',
      '@mobileL': { boxSize: 'C C' }
    },
    name: {
      fontSize: 'B',
      fontWeight: '700',
      color: 'black .85',
      '@mobileL': { fontSize: '1em' }
    }
  },

  pContainer: {
    overflow: 'hidden',
    position: 'relative',
    padding: 'Z A',
    height: 'fit-content',
    '@mobileL': { padding: 'Z Y2' },
    ':before': {
      content: '""',
      position: 'absolute',
      boxSize: 'C 100%',
      top: '0',
      background: ' linear-gradient(to bottom, rgba(213, 241, 255,1) 0%,rgba(213, 241, 255,0) 100%)'
    },
    ':after': {
      content: '""',
      position: 'absolute',
      boxSize: 'C 100%',
      background: ' linear-gradient(to top, rgba(213, 241, 255,1) 0%,rgba(213, 241, 255,0) 100%)',
      bottom: '0'
    },

    alignSelf: 'flex-start',
    p: {
      margin: '0',
      padding: 'A - B1 -',
      letterSpacing: '.4px',
      maxHeight: 'F3',
      style: {
        fontStyle: 'italic',
        overflowY: 'auto'
      },
      '@mobileL': {
        fontSize: `${14.5 / 16}em`,
        maxHeight: 'F',
        padding: 'Y2 - A -'
      },
      '@mobileS': {
        maxHeight: 'E2'
      }
    }
  },

  date: {
    fontWeight: '700',
    alignSelf: 'flex-end',
    textTransform: 'capitalize',
    opacity: '.75',
    minWidth: '95%',
    margin: 'auto auto 0 auto',
    textAlign: 'right',
    position: 'relative',
    padding: 'Z - - -',
    ':before': {
      content: '""',
      position: 'absolute',
      boxSize: '1px 100%',
      background: 'radial-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
      top: '-Z',
      right: '0',
      '@mobileL': { top: '0' },
      '@mobileS': { fontSize: `${14 / 16}em` }
    }
  }
}

export const TravelFeedBack = {
  props,

  extend: Flex,
  person: {
    extend: Flex,
    img: { extend: Img },
    name: { tag: 'h5' }
  },
  pContainer: {
    p: {}
  },
  date: {}
}
