'use strict'
import { Box, Img } from 'smbls'
import LEFT_ARROW_PNG from '../assets/icons/leftBlack.png'
import RIGHT_ARROW_PNG from '../assets/icons/rightBlack.png'
import DOWN_ARROW_PNG from '../assets/icons/down-arrowCream.png'
import UP_ARROW_PNG from '../assets/icons/up-arrowCream.png'

export const NavigationArrows = {
  props: {
    flexAlign: 'center space-between',
    position: 'relative',
    gap: 'C',
    ':before': {
      content: '""',
      position: 'absolute',
      opacity: '.8',
      width: '3px',
      height: '80%',
      background: 'black',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '100%'
    }
  },

  childExtend: {
    tag: 'button',
    props: {
      style: {
        borderRadius: '100%',
        cursor: 'pointer',
        outline: 'none',
        border: 'none',
        opacity: '.8',
        zIndex: '20',
        background: 'transparent',
        '&:hover': { opacity: '1' }
      },
      arrow: {
        alignSelf: 'center',
        boxSize: 'B A'
      }
    },
    arrow: {
      extend: [Img, Box],
      props: 'match'
    }
  },

  ...[
    {
      props: {
        left: '0',
        arrow: { src: LEFT_ARROW_PNG }
      }
    },

    {
      props: {
        right: '0',
        arrow: { src: RIGHT_ARROW_PNG }
      }
    }
  ]
}

export const NavigationVerticalArrows = {
  extend: NavigationArrows,
  props: {
    flexFlow: 'column',
    gap: 'C',
    style: {
      '&:before': {
        content: '""',
        position: 'absolute',
        width: '50%',
        height: '3px',
        background: 'radial-gradient(rgba(248, 241, 227, 1), rgba(248, 241, 227, .35))',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '100%'
      }
    }
  },
  childExtend: {
    props: { style: { '> img': { width: `${30 / 16}em`, height: `${20 / 16}em` } } }
  },
  ...[
    {
      props: { arrow: { src: UP_ARROW_PNG } }
    },
    {
      props: { arrow: { src: DOWN_ARROW_PNG } }
    }
  ]
}
