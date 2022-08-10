'use strict'

import { Box, Img } from 'smbls'

import { FeedBack } from '../../components'

// import RIGHT_ARROW_PNG from '../../assets/icons/arrow-right.png'
import LEFT_ARROW_PNG from '../../assets/icons/leftBlack.png'
import RIGHT_ARROW_PNG from '../../assets/icons/rightBlack.png'

const navArrows = {
  proto: Box,
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
        // css: { border: '2px solid yellow' }
      }
    },
    arrow: {
      proto: [Img, Box]
    }
  },

  ...[
    {
      props: { left: '0' },
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
      props: { right: '0' },
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
    width: '83%',
    '@mobileL': { width: '85%' }
  },
  style: {
    zIndex: '20',
    // boxSizing: 'border-box',
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
        opacity: '.85'
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
    margin: '0 auto',
    maxWidth: '75%',
    padding: 'E 0',
    minHeight: 'H1'
  },
  '@mobileL': { maxWidth: '85%' },
  '@mobileS': { maxWidth: '90%' },
  '@mobileXS': { maxWidth: '98%' },
  css: {
    overflowX: 'hidden',
    margin: '0 auto',
    // boxSizing: 'border-box',
    marginTop: `${150 / 16}em`,
    marginBottom: `${150 / 16}em`

  },

  content: {
    position: 'relative',
    width: '85%',
    '@mobileM': {
      width: '100%'
    },
    css: {
      margin: '0 auto',
      marginTop: `${25 / 16}em`,
      '@media only screen and (max-width: 768px)': { marginTop: `${10 / 16}em` },
      // '@media only screen and (max-width: 560px)': { marginTop: `${0 / 16}em` },
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
  tag: 'section',
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
              Highly recommend to stay here! We really enjoyed BB Residence - Red Brick (also the other rooms look really cool too! ) It's in a great area, shops and bars nearby and also walking distance to lots of attractions and less than 10min walk to Freedom Square.
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
              BB Residence is a great cozy apartments near Liberty Square. Its good to stay there and discover Tbilisi for yourself. Hope we will stay there again.
              `
          },
          date: { text: 'March | 2022' }
        },

        {
          name: { text: 'Daria' },
          p: {
            text: `
            The apartment is very cozy, clean, light, spacious. Very warm welcome, the location is great too, cute courtyard, in the evening it is very pleasant to spend time, plus parking in the yard, which is very convenient. We only have pleasant emotions and memories.
              `
          },
          date: { text: 'April | 2022' }
        },

        {
          name: { text: 'Stanislav' },
          p: {
            text: `
            Very nice and spacious place! An amazingly responsive and helpful host! Would definitely book again!
            Stanislav User Profile`
          },
          date: { text: 'April | 2022' }
        },

        {
          name: { text: 'Dilfusa' },
          p: {
            text: `
          Fue una estancia muy agradable! Hospitalidad, atencion excelente! Ubicacion y facilidades son perfectas. Muchas gracias a los duenos, me ayudaron en todo, presentaron mucho mas de lo prometido)))
              `
          },
          date: { text: 'December | 2021' }
        }
      ]
    }
  }
}
