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
    align: 'flex-start flex-start',

    image: {
      boxSize: 'G G',
      position: 'relative',
      round: 'F F 0 0',
      backgroundSize: 'cover',

      backgroundPosition: 'center',
      style: {
        backgroundRepeat:'no-repeat !important',

      },
      ':after': {
        content: '""',
        position: 'absolute',
        boxSize: '100% 100%',
        round: 'F F 0 0',
        top: '0',
        left: '0',
        background: 'radial-gradient(rgba(0, 47, 57, 0), rgba(0, 47, 57, 1))'
      }
    },

    paragraph: {
      flow: 'column',
      padding: 'V2 - - Y2',
      title: {
        text: 'Alex Smith',
        fontWeight: '100',
        fontSize: `${24 / 16}em`,
        letterSpacing: '.5px'
      },
      p: {
        fontSize: `${14 / 16}em`,
        maxWidth: 'G',
        padding: '- V2 - -',
        color: 'black .75',
        style: {fontStyle: 'italic'}
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
