'use strict'

import { Flex } from 'smbls'

const props = {
  flow: 'column',
  position: 'relative',
  gap: 'Z',
  align: 'center center',

  content: {
    flow: 'column',
    gap: 'Z2',
    width: 'fit-content',
    position: 'relative',
    align: 'center flex-start',

    image: {
      boxSize: 'G G',
      background: 'purple',
      position: 'relative',
      // round: 'F2 F2 0 F1',
      round: '100%',
      ':after': {
        content: '""',
        position: 'absolute',
        boxSize: '100% 100%',
        // round: 'F2 F2 0 F1',
        round: '100%',
        top: '0',
        left: '0',
        background: 'radial-gradient(rgba(15, 49, 61, 0), rgba(15, 49, 61, 1))'
      },
      style: {
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    },

    paragraph: {
      flow: 'column',
      padding: 'V2 Y - -',
      alignItems: 'center',
      title: {
        text: 'Alex Smith',
        fontWeight: '100',
        fontSize: `${26 / 16}em`,
        letterSpacing: '.5px'
      },
      p: {
        fontSize: `${14 / 16}em`,
        maxWidth: 'G',
        padding: '- V2 - -',
        color: 'black .75',
        fontWeight: '700'
      }
    }
  }
}

export const TeamMember = {
  extend: Flex,
  props,
  content: {
    extend: Flex,
    image: {},
    paragraph: {
      extend: Flex,
      title: { tag: 'H5' },
      p: {}
    }
  }
}
