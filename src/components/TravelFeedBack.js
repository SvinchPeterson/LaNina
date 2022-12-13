'use strict'

import { Flex, Img } from 'smbls'

const props = {
  width: 'fit-content',
  flow: 'column',
  height: 'G',
  justifyContent: 'space-between',
  gap: 'A',
  background: 'rgba(213, 241, 255, 1)',
  padding: 'B',
  round: 'B',
  position: 'relative',

  person: {
    align: 'center flex-start',
    gap: 'Z',
    img: {
      boxSize: 'C2 C2',
      round: '100%'
    },
    name: {
      fontSize: 'A',
      fontWeight: '700',
      color: 'black .85'
    }
  },
  pContainer: {
    overflow: 'hidden',
    position: 'relative',
    padding: 'Z -',
    ':before': {
      content: '""',
      position: 'absolute',
      boxSize: 'B 100%',
      top: '0',
      background: 'linear-gradient(to bottom, rgba((213, 241, 255, 1) 0%, rgba((213, 241, 255, 0) 100%)'
    },
    ':after': {
      content: '""',
      position: 'absolute',
      boxSize: 'B 100%',
      background: 'linear-gradient(to top, rgba((213, 241, 255, 1) 0%,rgba((213, 241, 255, 100',
      bottom: '0'
    },

    alignSelf: 'flex-start',
    p: {
      margin: '0',
      maxWidth: 'H',
      minWidth: 'H',
      maxHeight: 'E1',
      padding: '- - A -',
      letterSpacing: '.4px',
      fontSize: `${15 / 16}em`,
      style: {
        fontStyle: 'italic',
        overflowY: 'auto'
      }
    }
  },

  date: {
    fontWeight: '700',
    alignSelf: 'flex-end',
    fontSize: `${14 / 16}em`,
    textTransform: 'capitalize',
    opacity: '.75'
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
