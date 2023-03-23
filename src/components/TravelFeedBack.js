'use strict'

import { Flex, Img } from 'smbls'

const props = {
  boxSizing: 'border-box',
  width: 'fit-content',
  flow: 'column',
  aling: 'center flex-start',
  gap: '0',
  overflow: 'hidden',
  padding: 'A1 Z2 0 Z2',
  round: 'B2',
  position: 'relative',
  style: { boxShadow: 'inset 0 0 1px .25px rgba(0, 0, 0, .35)' },

  person: {
    flow: 'column',
    align: 'center space-between',
    position: 'relative',
    gap: 'Z',
    img: {
      boxSize: 'C2 C2',
      round: '100%',
      borderWidth: '.5px',
      style: { boxShadow: '0 0 2.5px .2px rgba(0, 0, 0, .15)' }
    },
    name: {
      fontSize: `${30 / 16}em`,
      fontWeight: '100',
      color: 'black',
      margin: '0'
    }
  },

  pContainer: {
    overflow: 'hidden',
    position: 'relative',
    padding: 'Z B - B',
    alignSelf: 'flex-start',
    flow: 'column',
    align: 'center flex-start',
    ':before': {
      content: '""',
      position: 'absolute',
      boxSize: 'C 100%',
      top: '0',
      zIndex: '2',
      background: 'linear-gradient(to bottom, rgba(229, 249, 252, 1) 0%,rgba(229, 249, 252, 0) 100%)'
    },
    ':after': {
      content: '""',
      position: 'absolute',
      boxSize: 'E2 100%',
      background: 'linear-gradient(to top, rgba(229, 249, 252, 1) 0%,rgba(229, 249, 252, 0) 100%)',
      bottom: '0',
      pointerEvents: 'none'
    },
    line: {
      boxSize: '1px 85%',
      round: 'B',
      background: 'radial-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, 0))',
      zIndex: '3'
    },
    p: {
      fontSize: `${15 / 16}em`,
      margin: '0',
      padding: 'A - D -',
      position: 'relative',
      letterSpacing: '.1px',
      maxHeight: 'G',
      textAlign: 'center',
      style: {
        fontStyle: 'italic',
        overflowY: 'auto'
      }
    }
  },

  date: {
    fontWeight: '700',
    alignSelf: 'center',
    textTransform: 'uppercase',
    width: 'fit-content',
    margin: 'auto auto 0 auto',
    textAlign: 'center',
    position: 'absolute',
    bottom: 'A2',
    zIndex: '3',
    fontSize: 'Z'
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
    extend: Flex,
    line: {},
    p: {}
  },
  date: {}
}
