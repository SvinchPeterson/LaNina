'use strict'

import { Box, Img } from 'smbls'

import { FeedBack } from '../../components'

// import RIGHT_ARROW_PNG from '../../assets/icons/arrow-right.png'
import LEFT_ARROW_PNG from '../../assets/icons/leftBlack.png'
import RIGHT_ARROW_PNG from '../../assets/icons/rightBlack.png'

const navArrows = {
  proto: Box,
  props: {
    flexAlign: 'center flex-start',
    gap: 'B'
  },
  childProto: {
    proto: Box,
    tag: 'button',
    props: {
      padding: 'Y1',
      css: {
        cursor: 'pointer',
        background: 'none',
        outline: 'none',
        border: 'none',
        opacity: '.8',
        '&:hover': { opacity: '1' }
      }
    },
    arrow: {
      proto: [Img, Box],
      props: {
        boxSize: ' A1'
        // padding: 'W'
      }
    }
  },

  ...[
    {
      on: {
        click: (event, element, state) => {
          const { feedbacks } = element.parent.parent.parent.content
          feedbacks.node.scrollBy({
            top: 0,
            left: -feedbacks.node.clientWidth - 16.5 * 1.618
          })
        }
      },

      arrow: { props: { src: LEFT_ARROW_PNG } }
    },

    {
      on: {
        click: (event, element, state) => {
          const { feedbacks } = element.parent.parent.parent.content
          feedbacks.node.scrollBy({
            top: 0,
            left: feedbacks.node.clientWidth + 16.5 * 1.618
          })
        }
      },

      arrow: { props: { src: RIGHT_ARROW_PNG } }
    }
  ]

}

const heading = {
  proto: Box,
  props: {
    flexAlign: 'center space-between',
    width: '70%',
    '@mobileL': { width: '85%' }
  },
  style: {
    zIndex: '20',
    boxSizing: 'border-box',
    margin: '0 auto'
  },
  title: {
    proto: Box,
    tag: 'caption',
    text: 'feedbacks',
    props: {
      fontWeight: '700',
      css: {
        whiteSpace: 'nowrap',
        letterSpacing: '.3px',
        zIndex: '100',
        opacity: '.8'
      }
    }
  },
  arrows: {
    proto: navArrows
  }
}

const props = {
  maxWidth: '1440px',
  minHeight: 'H',
  '@tabletL': {
    maxWidth: '75%',
    padding: '0 D'
  },
  '@tabletM': { maxWidth: '100%' },
  '@mobileL': { padding: '0 C' },
  '@mobileM': { padding: '0 A' },
  css: {
    overflowX: 'hidden',
    margin: '0 auto',
    boxSizing: 'border-box',
    marginTop: `${300 / 16}em`,
    marginBottom: `${300 / 16}em`,
    '@media only screen and (max-width: 560px)': { marginTop: `${150 / 16}em` }
  },

  content: {
    position: 'relative',
    width: '85%',
    '@mobileM': {
      width: '100%'
    },
    css: {
      margin: '0 auto',
      marginTop: `${50 / 16}em`,
      '@media only screen and (max-width: 560px)': { marginTop: `${30 / 16}em` },
      '&:after': {
        content: '""',
        width: '0px',
        height: '100%',
        position: 'absolute',
        right: '0px',
        top: 0,
        background: 'rgba(248, 241, 227, .5)',
        boxShadow: '0px 0px 40px 40px rgba(248, 241, 227, .87)',
        '@media only screen and (max-width: 560px)': {
          boxShadow: '0px 0px 20px 15px rgba(248, 241, 227, 1)'
        }
      },
      '&:before': {
        content: '""',
        width: '0px',
        height: '100%',
        position: 'absolute',
        left: '0',
        top: 0,
        boxShadow: '0px 0px 40px 40px rgba(248, 241, 227, .87)',
        '@media only screen and (max-width: 560px)': {
          boxShadow: '0px 0px 20px 15px rgba(248, 241, 227, 1)'
        },
        background: 'rgba(248, 241, 227, .5)',
        zIndex: 3
      }
    },
    feedbacks: {
      flexAlign: 'flex-start flex-start',
      gap: 'B',
      css: {
        scrollBehavior: 'smooth',
        overflowX: 'auto',
        minWidth: '100%',
        alignSelf: 'center',
        '&::-webkit-scrollbar': { display: 'none' }
      }
    }
  }

}

export const feedBacks = {
  props,

  heading: { proto: heading },
  content: {
    feedbacks: {
      childProto: {
        proto: FeedBack
      },
      ...[
        {
          name: { text: 'Katie' },
          p: {
            text: `
              Highly recommend to stay here! We really enjoyed La Niña Residence- Red Brick (also the other rooms look really cool too! )
    It’s in a great area, shops and bars nearby and also walking distance to lots of attractions and less than 10min walk to Freedom Square.
              `
          },
          date: { text: 'Febryary | 2022' }
        },

        {
          name: { text: 'Cameron' },
          p: {
            text: `
              A lovely apartment in excellent location, perfect walking distance to sights, comfortable and cosy. Great hosts, they even brought me a cake and bottle of wine on my birthday! Would recommend
              `
          },
          date: { text: 'April | 2022' }
        },

        {
          name: { text: 'Alexsandr' },
          p: {
            text: `
              BB Residence is a great cozy apartments near Liberty Square. It’s good to stay there and discover Tbilisi for yourself. Hope we will stay there again.
              `
          },
          date: { text: 'March | 2022' }
        },

        {
          name: { text: 'Cameron' },
          p: {
            text: `
          A lovely apartment in excellent location, perfect walking distance to sights, comfortable and cosy. Great hosts, they even brought me a cake and bottle of wine on my birthday! Would recommend
              `
          },
          date: { text: 'April | 2022' }
        },

        {
          name: { text: 'Cameron' },
          p: {
            text: `
          A lovely apartment in excellent location, perfect walking distance to sights, comfortable and cosy. Great hosts, they even brought me a cake and bottle of wine on my birthday! Would recommend
              `
          },
          date: { text: 'April | 2022' }
        },

        {
          name: { text: 'Dilfusa' },
          p: {
            text: `
          Fue una estancia muy agradable! Hospitalidad, atención excelente! Ubicación y facilidades son perfectas. Muchas gracias a los dueños, me ayudaron en todo, presentaron mucho más de lo prometido)))
              `
          },
          date: { text: 'December | 2021' }
        }
      ]
    }
  }
}
