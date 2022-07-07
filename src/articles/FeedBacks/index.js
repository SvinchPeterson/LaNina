'use strict'

import { Box, Text, Img } from '@symbo.ls/symbols'

import RIGHT_ARROW_PNG from '../../assets/icons/arrow-right.png'

const feedBackParagraph = {
  proto: Box,
  props: {
    padding: 'B2 C',
    flexFlow: 'column',
    flexAlign: 'flex-start flex-start',
    background: 'black .05',
    maxHeight: 'G',
    minWidth: 'H',
    position: 'relative',
    round: 'A'
  },
  style: {
    background: 'linear-gradient(rgba(0, 0, 0, .03), rgba(0, 0, 0, .08))',
    height: '500px',
    maxWidth: 'fit-content',
    border: '.1px solid rgba(0, 0, 0, .01)'
  },
  name: {
    tag: 'caption',
    proto: Box,
    text: 'Ashitha',
    props: {
      margin: '0',
      fontWeight: '900',
      padding: '0 0 B2 B',
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
      color: 'black .5',
      fontWeight: '400',
      padding: '0 B'
    },
    style: {
      textAlign: 'justify',
      fontSize: `${14 / 16}em`,
      letterSpacing: '.5px',
      wordSpacing: '-1px',
      lineHeight: `${21.7 / 14}em`
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
      right: 'D',
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

const heading = {
  proto: Box,
  props: {
    padding: '0 A A A',
    flexAlign: 'center space-between'
  },
  title: {
    proto: Box,
    tag: 'caption',
    text: 'feedback',
    props: {
      fontWeight: '700'
    },
    style: { whiteSpace: 'nowrap', letterSpacing: '.3px' }
  },
  scroll: {
    proto: Box,
    text: 'scroll',
    props: {
      fontSize: 'Z',
      flexAlign: 'center flex-start',
      gap: 'Z',
      fontWeight: '700'
    },
    style: { letterSpacing: '.7px', textTransform: 'uppercase' }
    // arrow: {
    //   proto: [Img, Box],
    //   props: {
    //     src: RIGHT_ARROW_PNG,
    //     boxSize: ' Z2'
    //   }
    // }
  }
}
export const feedBacks = {
  proto: Box,
  props: {
    minHeight: '100%',
    flexFlow: 'column',
    flexAlign: 'fle-start center',
    padding: '0 F'
  },
  style: { overflow: 'hidden' },
  heading,
  content: {
    proto: Box,
    props: {
      flexAlign: 'flex-start flex-start',
      gap: 'B2',
      padding: 'D 0 0 0'
    },
    style: {
      scrollBehavior: 'smooth',
      borderTop: '1px solid rgba(0, 0, 0, .75)',
      overflowX: 'auto',
      '&::-webkit-scrollbar': { display: 'none' }
    },
    // proto: 'Box',
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
      }
    ]
  }
}
