'use strict'

import { Box, Text, Img } from '@symbo.ls/symbols'

// import RIGHT_ARROW_PNG from '../../assets/icons/arrow-right.png'
import LEFT_ARROW_PNG from '../../assets/icons/leftBlack.png'
import RIGHT_ARROW_PNG from '../../assets/icons/rightBlack.png'

const feedBackParagraph = {
  proto: Box,
  props: {
    padding: 'C2 D C D',
    flexFlow: 'column',
    flexAlign: 'flex-start flex-start',
    background: 'black .05',
    maxHeight: 'G',
    minWidth: '100%',
    maxWidth: '100%',
    position: 'relative',
    round: 'Y2'
  },
  style: {
    boxSizing: 'border-box',
    background: 'linear-gradient(rgba(0, 0, 0, .03), rgba(0, 0, 0, .08))',
    height: '500px',
    maxWidth: 'fit-content',
    border: '.1px solid rgba(0, 0, 0, .01)'
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
      border: 'none'
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
          const { content } = element.parent.parent.parent
          content.node.scrollBy({
            top: 0,
            left: -content.node.clientWidth - 16.5 * 1.618
          })
        }
      },

      arrow: { props: { src: LEFT_ARROW_PNG } }
    },

    {
      on: {
        click: (event, element, state) => {
          const { content } = element.parent.parent.parent
          content.node.scrollBy({
            top: 0,
            left: content.node.clientWidth + 16.5 * 1.618
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
    padding: 'A A 0 A',
    flexAlign: 'center space-between'
  },
  title: {
    proto: Box,
    tag: 'caption',
    text: 'feedbacks',
    props: {
      fontWeight: '700'
    },
    style: { whiteSpace: 'nowrap', letterSpacing: '.3px' }
  },
  arrows: { proto: navArrows }
}

export const feedBacks = {
  proto: Box,
  props: {
    minHeight: 'H',
    overflowX: 'hidden',
    // flexFlow: 'column',
    // flexAlign: 'flex-start flex-start',
    minWidth: '500px',
    maxWidth: '600px'
    // borderTop: '1px solid rgba(0, 0, 0, .75)'
  },

  style: {
    overflowX: 'hidden',
    margin: '0 auto',
    marginTop: `${300 / 16}em`,
    marginBottom: `${300 / 16}em`
    // border: '5px solid red'
  },

  heading: { proto: heading },
  content: {
    proto: Box,
    props: {
      flexAlign: 'flex-start flex-start',
      gap: 'B',
      padding: 'A1 0 0 0'
    },
    style: {
      scrollBehavior: 'smooth',
      // borderTop: '1px solid rgba(0, 0, 0, .75)',
      overflowX: 'auto',
      // border: '4px solid orange',
      // minWidth: '100%',
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
      }
    ]
  }
}
