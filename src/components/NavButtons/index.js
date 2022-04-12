'use strict'

import { Box, Button, Img } from '@symbo.ls/symbols'

import UP_ARROW_PNG from '../../assets/icons/up-arrow.png'
import DOWN_ARROW_PNG from '../../assets/icons/down-arrow.png'

export const navButtons = {
  proto: Box,
  props: {
    position: 'absolute',
    top: '50%',
    right: `${80 / 16}em`,
    flexFlow: 'column',
    gap: 'Y'
  },
  style: {
    transform: 'translate(50%, -50%)',
    '> button': { cursor: 'pointer' }
  },

  childProto: {
    proto: Box,
    tag: 'button',
    props: {
      padding: 'Z2 Z'
    },
    style: {
      // background: 'radial-gradient(rgba(244, 233, 217, .55), rgba(168, 98, 63, .45))',
      background: 'radial-gradient(rgba(244, 233, 217, .15), rgba(168, 98, 63, .45))',
      backdropFilter: 'blur(10px)',
      border: '1.5px solid rgba(168, 98, 63, 1)',
      '&:hover': { background: 'radial-gradient(rgba(244, 233, 217, .35), rgba(168, 98, 63, .45))' },
      '> img': { opacity: '.55' }
    }
  },
  ...[
    {
      style: {
        borderTopLeftRadius: '30px',
        borderTopRightRadius: '30px'
      },
      image: {
        proto: [Img, Box],
        props: {
          src: UP_ARROW_PNG,
          boxSize: 'C '
        }
      }
    },

    {
      style: {
        borderBottomLeftRadius: '30px',
        borderBottomRightRadius: '30px'
      },
      image: {
        proto: [Img, Box],
        props: {
          src: DOWN_ARROW_PNG,
          boxSize: 'C '
        }
      }
    }
  ]
}
