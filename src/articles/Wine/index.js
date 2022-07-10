'use strict'
import { Box } from '@symbo.ls/symbols'
import { wineText } from '../../texts'
import WINE_JPG from '../../assets/images/sololaki/wine.jpg'

const image = {
  proto: Box,

  props: {
    boxSize: `H H3`,
    padding: 'D 0 0 0',
    '@tabletL': {
      boxSize: '70% H'
    },
    '@mobileM': {
      boxSize: '100% G3',
      margin: '-A 0 0 0'
    }
  },
  style: {
    backgroundImage: 'linear-gradient(rgba(60,84, 72, .25), rgba(60,84, 72, .5)), url(' + WINE_JPG + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center bottom 100px',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    zIndex: 2,
    '@media only screen and (max-width: 1366px)': {
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundAttachment: 'initial'
    }
  }
}

const paragraph = {
  proto: Box,
  props: {
    position: 'absolute',
    background: 'cream2',
    flexAlign: 'center flex-start',
    width: 'fit-content',
    color: 'black .75',
    margin: '-D -G 0 0'
  },
  style: {
    borderTop: 'none',
    zIndex: '10',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'bottom 200px center'
  },

  texts: {
    proto: Box,
    ...[
      {
        text: `Georgians are very proud of their rich and historic winemaking culture, and as traditional methods enjoy a renaissance,
      the Qvevri (an earthenware vessel used to store and age wine for thousands of years).`
      },
      {
        text: `Georgia is generally considered the ‘cradle of wine’,
        as archaeologists have traced the world’s first known wine creation back to the people of the South Caucasus in 6,000BC.`
      }
    ],
    props: {
      maxWidth: `${500 / 14.3}em`,
      margin: '0 auto',
      color: 'black .75',
      padding: 'F1 E E2 E',
      flexFlow: 'column',
      gap: 'A'
    },
    style: {
      textAlign: 'justify',
      wordSpacing: '-1px',
      fontSize: `${14.3 / 16}em`,
      lineHeight: `${23.5 / 14.3}em`,
      letterSpacing: '.8px'
    }
  }
}

export default {
  proto: Box,
  props: {
    position: 'relative',
    flexAlign: 'center center',
    padding: 'D2 0'
    // padding: 'G2 0'
  },
  style: {
    // border: '3px solid black'
  },
  attr: { id: 'wine' },

  image,
  paragraph
}
