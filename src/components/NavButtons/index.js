'use strict'

import { Box, Img } from '@symbo.ls/symbols'

import UP_ARROW_PNG from '../../assets/icons/up-arrow.png'
import DOWN_ARROW_PNG from '../../assets/icons/down-arrow.png'
import LEFT_ARROW_PNG from '../../assets/icons/left-arrowCream.png'
import RIGHT_ARROW_PNG from '../../assets/icons/right-arrowCream.png'

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
      background: 'radial-gradient(rgba(244, 233, 217, .45), rgba(168, 98, 63, .45))',
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
      },
      on: {
        click: (event, element, state) => {
          const { activeImage } = state
          state.update({
            activeImage: activeImage > (element.parent.parent.gallery.length - 2) ? 0 : activeImage + 1

          })
        }
      }
      // on: {
      //   click: (event, element, state) => {
      //     const { activeImage } = state
      //     state.update({
      //       activeImage: activeImage > (element.parent.gallery.length - 2) ? 0 : activeImage + 1
      //     })
      //     // if (activeImage === element.parent.gallery.length) {
      //     //   state.update({
      //     //     activeImage: activeImage === element.parent.gallery.length - 2
      //     //   })
      //     // }
      //   }
      // }
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

export const navButtons2 = {
  proto: Box,
  props: {
    position: 'absolute',
    top: '150px',
    left: `50%`,
    flexFlow: 'row',
    gap: 'B'
  },
  style: {
    transform: 'translate(-50%, -50%)',
    zIndex: '200',
    display: 'none',

    '> button': { cursor: 'pointer' },
    '@media only screen and (max-width: 1225px)': {
      display: 'flex'

    }
  },

  childProto: {
    proto: Box,
    tag: 'button',
    props: {
      padding: 'Z B'
    },
    style: {
      background: 'radial-gradient(rgba(244, 233, 217, .45), rgba(168, 98, 63, .45))',
      backdropFilter: 'blur(10px)',
      border: '1.5px solid rgba(168, 98, 63, 1)',
      '&:hover': { background: 'radial-gradient(rgba(244, 233, 217, .35), rgba(168, 98, 63, .45))' },
      '> img': { opacity: '.55' }
    }
  },
  ...[
    {
      style: {
        borderTopLeftRadius: '50px',
        borderBottomLeftRadius: '50px'
      },
      image: {
        proto: [Img, Box],
        props: {
          src: LEFT_ARROW_PNG,
          boxSize: 'C '
        }
      }
    },

    {
      style: {
        borderTopRightRadius: '50px',
        borderBottomRightRadius: '50px'
      },
      image: {
        proto: [Img, Box],
        props: {
          src: RIGHT_ARROW_PNG,
          boxSize: 'C '
        }
      }
    }
  ]
}
