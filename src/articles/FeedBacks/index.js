'use strict'

import { Box, Img } from '@symbo.ls/symbols'

// import RIGHT_ARROW_PNG from '../../assets/icons/arrow-right.png'
import LEFT_ARROW_PNG from '../../assets/icons/leftBlack.png'
import RIGHT_ARROW_PNG from '../../assets/icons/rightBlack.png'

const feedBackParagraph = {
  proto: Box,
  props: {
    padding: 'C2 C C C',
    flexFlow: 'column',
    flexAlign: 'flex-start flex-start',
    background: 'black .05',
    maxHeight: 'G',
    position: 'relative',
    round: 'Y2'
  },
  style: {
    minWidth: `${550 / 16}em`,
    boxSizing: 'border-box',
    background: 'linear-gradient(rgba(0, 0, 0, .03), rgba(0, 0, 0, .035))',
    height: '500px',
    maxWidth: 'fit-content'
    // border: '5px solid red'
  },
  name: {
    tag: 'caption',
    proto: Box,
    text: 'Ashitha',
    props: {
      margin: '0',
      fontWeight: '900',
      padding: '0 0 B B',
      color: 'black .85'
    },
    style: {
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      fontSize: `${12.5 / 16}em`
    }
  },

  p: {
    proto: Box,
    text: `This a must stay n worth every penny. The host was great, the place was great, great ambience, a quiet place but just few minutes walk to all the central points. The hospitality was great and the host was very helpful and accessible for all my needs. Special thanks to Gaia and Tato who actually received me like family and came in person while i was saying my bye too. I would really want to come back for a longer stay. Love the place and love u guys.`,
    props: {
      color: 'black .6',
      fontWeight: '400',
      padding: '0 B'
    },
    style: {
      textAlign: 'justify',
      fontSize: `${14.3 / 16}em`,
      letterSpacing: '.8px',
      wordSpacing: '-1.45px',
      lineHeight: `${22 / 14.3}em`
    }
  },

  date: {
    tag: 'h5',
    proto: Box,
    text: 'January | 2022',
    props: {
      // margin: '0 0 0 auto',
      padding: '0 Y2 0 0',
      position: 'absolute',
      right: 'D2',
      bottom: 'C',
      color: 'black .55'
    },
    style: {
      fontWeight: '500',
      alignSelf: 'flex-end',
      wordSpacing: '3px',
      fontSize: `${14 / 16}em`
    }
  }
}

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
      // boxSize: ' A',
      boxSize: 'B1 B1'
    },
    style: {
      cursor: 'pointer',
      background: 'none',
      outline: 'none',
      border: 'none',
      opacity: '.8',
      '&:hover': { opacity: '1' }
    },
    arrow: {
      proto: [Img, Box],
      props: {
        boxSize: '100%',
        padding: 'W'
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
            left: -feedbacks.node.clientWidth - 30
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
            left: feedbacks.node.clientWidth + (-80)
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
    padding: '0 D2 0 D2',
    margin: '0 0 C 0',
    flexAlign: 'center space-between',
    '@tabletL': {
      padding: '0 B 0 B'
    }
  },
  title: {
    proto: Box,
    tag: 'caption',
    text: 'feedbacks',
    props: {
      fontWeight: '700'
    },
    style: {
      whiteSpace: 'nowrap',
      letterSpacing: '.3px',
      zIndex: '100',
      opacity: '.8'
    }
  },
  arrows: { proto: navArrows }
}

export const feedBacks = {
  proto: Box,
  props: {
    maxWidth: '1440px',
    minHeight: 'H',
    padding: '0 E',
    '@tabletL': {
      padding: '0 D1'
    }
  },

  style: {
    overflowX: 'hidden',
    margin: '0 auto',
    marginTop: `${300 / 16}em`,
    marginBottom: `${300 / 16}em`,
    '@media only screen and (max-width: 1366px)': {
      marginLeft: '0',
      marginRight: '0'
    }
  },

  heading: { proto: heading },
  content: {
    proto: Box,
    props: {
      position: 'relative'
    },
    style: {
      '&:after': {
        content: '""',
        width: '0px',
        height: '100%',
        position: 'absolute',
        right: '0px',
        top: 0,
        background: 'rgba(248, 241, 227, .5)',
        boxShadow: '0px 0px 80px 60px rgba(248, 241, 227, 1)'
        // border: '1px solid black'
      },
      '&:before': {
        content: '""',
        width: '0px',
        // border: '1px solid red',
        height: '100%',
        position: 'absolute',
        left: '0',
        top: 0,
        boxShadow: '0px 0px 80px 60px rgba(248, 241, 227, 1)',
        background: 'rgba(248, 241, 227, .5)',
        zIndex: 3
      }
    },

    feedbacks: {
      proto: Box,
      props: {
        flexAlign: 'flex-start flex-start',
        gap: 'B'
      },
      style: {
        scrollBehavior: 'smooth',
        overflowX: 'auto',
        maxWidth: '100%',
        alignSelf: 'center',
        '&::-webkit-scrollbar': { display: 'none' }
      },
      childProto: {
        proto: feedBackParagraph
      },
      ...[
        {
          name: { text: 'Dilfusa' },
          p: {
            text: `
          Fue una estancia muy agradable! Hospitalidad, atención excelente! Ubicación y facilidades son perfectas. Muchas gracias a los dueños, me ayudaron en todo, presentaron mucho más de lo prometido)))
              `
          },
          date: { text: 'December | 2021' }
        },

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
        }
      ]
    }
  }
}
