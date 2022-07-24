'use strict'
import { Box } from 'smbls'
import WINE_JPG from '../../assets/images/sololaki/wine.jpg'

const image = {
  proto: Box,

  props: {
    boxSize: `H H3`,
    padding: 'D 0 0 0',
    '@tabletL': { boxSize: '100% H' }
  },
  style: {
    backgroundImage: 'linear-gradient(rgba(60,84, 72, .35), rgba(60,84, 72, .5)), url(' + WINE_JPG + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center bottom 100px',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    zIndex: 2,
    '@media only screen and (max-width: 1366px)': {
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundAttachment: 'initial',
      position: 'relative',
      '&:before': {
        content: '""',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        background: 'rgba(0, 0, 0, .3)'
      }
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
    margin: '-E2 -G 0 0',
    '@tabletL': {
      margin: '0 0 0 0',
      background: 'cream2 0'
    },
    '@mobileM': { width: '100%' }
  },
  style: {
    borderTop: 'none',
    zIndex: '10',
    backgroundAttachment: 'fixed'
  },

  texts: {
    proto: Box,
    props: {
      maxWidth: `${500 / 14.3}em`,
      margin: '0 auto',
      color: 'black .75',
      padding: 'F1 E E2 E',
      flexFlow: 'column',
      gap: 'A',
      '@tabletL': { color: 'cream 1' },
      '@mobileM': {
        maxWidth: `100%`,
        padding: '0 D'
      }
    },
    style: {
      textAlign: 'justify',
      wordSpacing: '-1px',
      fontSize: `${14.3 / 16}em`,
      lineHeight: `${23.5 / 14.3}em`,
      letterSpacing: '.8px'
    },

    ...[
      {
        text: `Georgians are very proud of their rich and historic winemaking culture, and as traditional methods enjoy a renaissance,
      the Qvevri (an earthenware vessel used to store and age wine for thousands of years).`
      },
      {
        text: `Georgia is generally considered the ‘cradle of wine’,
        as archaeologists have traced the world’s first known wine creation back to the people of the South Caucasus in 6,000BC.`
      }
    ]
  }
}

export default {
  proto: Box,
  props: {
    position: 'relative',
    flexAlign: 'center center',
    padding: 'D2 0',
    '@tabletL': {
      flexFlow: 'column',
      flexAlign: 'flex-end center',
      padding: 'E2 0 D2 0'
    },
    '@mobileM': { padding: 'E 0 D2 0' }
  },
  attr: { id: 'wine' },

  image,
  paragraph
}
