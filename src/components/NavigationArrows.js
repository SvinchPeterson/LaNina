'use strict'
import { Box, Img } from 'smbls'
import LEFT_ARROW_PNG from '../assets/icons/leftBlack.png'
import RIGHT_ARROW_PNG from '../assets/icons/rightBlack.png'
import DOWN_ARROW_PNG from '../assets/icons/down-arrowCream.png'
import UP_ARROW_PNG from '../assets/icons/up-arrowCream.png'

export const NavigationArrows = {
  props: {
    flexAlign: 'center space-between',
    gap: 'Z',
    position: 'relative',
    css: {
      '&:before': {
        content: '""',
        position: 'absolute',
        width: '2px',
        height: '60%',
        background: 'black',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '100%'
      }
    }
  },
  childProto: {
    proto: Box,
    tag: 'button',
    props: {
      width: '45px',
      height: '45px',
      // background: 'black .05',
      // boxSize: 'fit-content',
      css: {
        borderRadius: '100%',
        cursor: 'pointer',
        outline: 'none',
        border: 'none',
        opacity: '.8',
        zIndex: '20',
        background: 'transparent',
        // minWidth: '50px',
        heigt: '45px',
        '&:hover': { opacity: '1' }
      },
      arrow: {
        boxSize: 'A1 ',
        alignSelf: 'center'
      }
    },
    arrow: {
      proto: [Img, Box],
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
  proto: NavigationArrows,
  props: {
    flexFlow: 'column',
    css: {
      '&:before': {
        content: '""',
        position: 'absolute',
        width: '50%',
        height: '2px',
        background: 'radial-gradient(rgba(248, 241, 227, 1), rgba(248, 241, 227, .35))',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '100%'
      }
    }
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
