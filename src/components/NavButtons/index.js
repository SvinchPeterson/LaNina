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
    right: `-C1`,
    flexFlow: 'column',
    gap: '0'
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
      border: '1px solid rgba(245, 245, 245, .35)',
      background: 'none',
      '&:hover > img': { opacity: 1 },
      '> img': { opacity: '.65' }
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
          width: '60%',
          height: '1px',
          background: 'rgba(245, 245, 245, .5)',
          // background: ' rgba(168, 98, 63, 1)',
          bottom: '-0.5px',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }
      },
      image: {
        proto: [Img, Box],
        props: {
          src: UP_ARROW_PNG,
          boxSize: 'A2 '
        }
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
        }
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
    width: '100.5%',
    height: '0',
    position: 'absolute',
    left: `50%`,
    flexFlow: 'row',
    flexAlign: 'center space-between',
    gap: 'B'
  },
  style: {
    display: 'none',
    zIndex: '200',
    transform: 'translate(-50%, -50%)',
    '@media only screen and (max-width: 1366px)': { display: 'flex' }
  },

  childProto: {
    proto: Box,
    tag: 'button',
    props: {
      flexAlign: 'center center',
      background: 'green2 .8'
    },
    style: {
      // background: 'radial-gradient(rgba(42, 81, 61, .75),rgba(42, 81, 61, .85))',
      backdropFilter: 'blur(.5px)',
      cursor: 'pointer'
    },
    image: {
      proto: [Img, Box],
      props: { boxSize: 'A1' }
    }
  },
  ...[
    {
      props: { padding: 'C2 C C2 A' },
      style: {
        borderTopRightRadius: '70px',
        borderBottomRightRadius: '70px',
        border: 'none'
      },
      image: {
        proto: [Img, Box],
        props: { src: LEFT_ARROW_PNG }
      }
    },

    {
      props: { padding: 'C2 A C2 C' },
      style: {
        borderTopLeftRadius: '70px',
        borderBottomLeftRadius: '70px',
        // border: '2px solid rgba(168, 98, 63, 1)',
        // borderRight: 'none'
        border: 'none'
      },
      image: {
        proto: [Img, Box],
        props: { src: RIGHT_ARROW_PNG }
      }
    }
  ]
}
