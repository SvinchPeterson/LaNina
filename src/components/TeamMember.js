'use strict'

import { Flex } from 'smbls'

const props = {
  flow: 'column',
  position: 'relative',
  gap: 'Z',
  // border: '2px solid red',
  image: {
    boxSize: 'F2 220px',
    background: 'purple',
    position: 'relative',
    round: 'E1 E1 0 0',
    ':after': {
      content: '""',
      position: 'absolute',
      boxSize: '100% 100%',
      round: 'E1 E1 0 0',
      top: '0',
      left: '0',
      background: 'radial-gradient(rgba(30, 98, 123, 0), rgba(30, 98, 123, .9))'
    },
    style: {
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  },

  caption: {
    text: 'creative leader',
    position: 'absolute',
    right: '-A1',
    top: 'X',
    style: {
      writingMode: 'vertical-lr',
      letterSpacing: '1px',
      display: 'none'
    }
  },

  paragraph: {
    flow: 'column',
    padding: '- X1 - -',
    alignItems: 'flex-end',
    title: {
      text: 'Alex Smith',
      fontWeight: '700',
      fontSize: `${15 / 16}em`,

      style: { letterSpacing: '.5px' }
    },
    p: {
      fontSize: `${14 / 16}em`,
      maxWidth: 'G',
      padding: '0 0 0 V',
      color: 'black .65',
      text: 'Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin.'
      // style: { fontStyle: 'italic' }
    }
  }
}

export const TeamMember = {
  extend: Flex,
  props,

  image: {},
  caption: {},
  paragraph: {
    extend: Flex,
    title: { tag: 'H5' },
    p: {}
  }
}
