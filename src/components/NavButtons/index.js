'use strict'

import { Box, Img } from '@symbo.ls/symbols'

// import UP_ARROW_PNG from '../../assets/icons/up-arrowCream.png'
import UP_ARROW_PNG from '../../assets/icons/up-arrows2.png'
import DOWN_ARROW_PNG from '../../assets/icons/down-arrow2.png'
import LEFT_ARROW_PNG from '../../assets/icons/left-arrows2.png'
import RIGHT_ARROW_PNG from '../../assets/icons/right-arrows.png'

export const navButtons = {
  proto: Box,
  props: {
    position: 'absolute',
    top: '63%',
    right: `-B2`,
    flexFlow: 'column',
    gap: 'Z2'
  },
  style: {
    transform: 'translate(50%, -50%)',
    '> button': { cursor: 'pointer' }
  },

  childProto: {
    proto: Box,
    tag: 'button',
    props: { padding: 'A Z' },
    style: {
      border: 'none',
      background: 'none',
      '> img': { opacity: '.7' },
      '&:hover > img': { opacity: '1' }
    }
  },
  ...[
    {
      style: {
        borderTopLeftRadius: `${25 / 16}em`,
        borderTopRightRadius: `${25 / 16}em`,
        borderBottom: 'none !important',
        position: 'relative',
        '&:before': {
          content: '""',
          position: 'absolute',
          width: '40%',
          height: '1px',
          background: 'rgba(245, 245, 245, .5)',
          bottom: `${-7 / 16}em`,
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }
      },
      image: {
        proto: [Img, Box],
        props: {
          src: UP_ARROW_PNG,
          boxSize: 'A2 '
        },
        style: { transition: 'opacity .15s ease-in-out' }
      },
      on: {
        click: (event, element, state) => {
          const { activeImage } = state
          state.update({
            activeImage: activeImage + 1
          })
          if (activeImage >= 8) {
            state.update({ activeImage: 0 })
          }
        }
      }
    },

    {
      style: {
        borderBottomLeftRadius: `${25 / 16}em`,
        borderBottomRightRadius: `${25 / 16}em`,
        borderTop: 'none !important'
      },
      image: {
        proto: [Img, Box],
        props: {
          src: DOWN_ARROW_PNG,
          boxSize: 'A2 '
        },
        style: { transition: 'opacity .15s ease-in-out' }
      },
      on: {
        click: (event, element, state) => {
          const { activeImage } = state
          state.update({
            activeImage: activeImage - 1
          })
          if (activeImage <= 0) {
            state.update({ activeImage: 8 })
          }
        }
      }
    }
  ]
}

export const navButtons2 = {
  proto: Box,
  props: {
    height: '0',
    position: 'absolute',
    left: `50%`,
    flexFlow: 'row',
    flexAlign: 'center space-between',
    gap: 'B'
  },
  style: {
    width: '100%',
    // display: 'none',
    zIndex: '200',
    transform: 'translate(-50%, -50%)'
  },

  childProto: {
    proto: Box,
    tag: 'button',
    props: {
      flexAlign: 'center center',
      background: 'green2 0'
    },
    style: {
      // background: 'radial-gradient(rgba(42, 81, 61, .75),rgba(42, 81, 61, .85))',
      backdropFilter: 'blur(.5px)',
      cursor: 'pointer'
    },
    image: {
      proto: [Img, Box],
      props: { boxSize: 'A ' }
    }
  },
  ...[
    {
      props: { padding: 'B1 B B1 Z1' },
      style: {
        borderTopRightRadius: `${80 / 16}em`,
        borderBottomRightRadius: `${80 / 16}em`,
        border: 'none'
        // borderRight: '1px solid rgba(245, 245, 245, .25)'
      },
      image: {
        proto: [Img, Box],
        props: { src: LEFT_ARROW_PNG }
      }
    },

    {
      props: { padding: 'B1 Z1 B1 B' },
      style: {
        borderTopLeftRadius: `${80 / 16}em`,
        borderBottomLeftRadius: `${80 / 16}em`,
        border: 'none'
        // borderLeft: '1px solid rgba(245, 245, 245, .25)'
      },
      image: {
        proto: [Img, Box],
        props: { src: RIGHT_ARROW_PNG }
      }
    }
  ]
}
