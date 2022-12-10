'use strict'
import WINE_JPG from '../assets/images/residence/sololaki/wine.jpg'

const props = {
  position: 'relative',
  flexAlign: 'center center',
  minHeight: '100%',
  margin: 'F 0 0 0',
  '@tabletL': {
    flexFlow: 'column',
    flexAlign: 'flex-end center'
    // margin: '0 0 0 0'
  },

  image: {
    boxSize: `H1 H`,
    padding: '0',
    backgroundSize: 'contain',
    backgroundPosition: `center bottom ${100 / 16}em`,
    style: {
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundImage: 'radial-gradient(rgba(60,84, 72, .35), rgba(60,84, 72, .5)), url(' + WINE_JPG + ')',
      zIndex: 2,
      '@media only screen and (max-width: 1366px)': { backgroundAttachment: 'initial' }
    },
    '@tabletL': {
      boxSize: '100% 100%',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      position: 'relative',
      ':before': {
        content: '""',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        background: 'rgba(0, 0, 0, .3)'
      }
    }
  },

  paragraph: {
    position: 'absolute',
    background: 'cream2',
    flexAlign: 'center center',
    flexFlow: 'column',
    width: 'fit-content',
    margin: '-F2 -H 0 0',
    padding: 'E1 0 0 0',
    '@tabletL': {
      margin: '0 0 0 0',
      background: 'cream2 0'
    },
    '@mobileM': {
      width: '100%',
      padding: '0 A2'
    },
    '@mobileS': { padding: '0 Z' },
    style: { zIndex: '2' },

    title: {
      text: 'Wine',
      fontSize: 'B',
      fontWeight: '500',
      '@tabletL': { color: 'cream2' },
      '@mobileM': { padding: '0 0 A 0' }
    },

    p: {
      fontSize: 'A',
      maxWidth: 'H3',
      margin: '0 auto',
      color: 'black .75',
      padding: 'A2 E E2 E',
      flexFlow: 'column',
      gap: 'Z',
      '@tabletL': { color: 'cream 1' },
      '@mobileM': {
        maxWidth: `100%`,
        padding: '0 A1'
      }
    }
  }
}

export const Wine = {
  tag: 'section',
  props,
  attr: { id: 'wine' },

  image: {},
  paragraph: {
    title: { tag: 'h5' },
    p: {
      ...[
        {
          text: `Georgians are very proud of their rich and historic winemaking culture, and as traditional methods enjoy a renaissance,
        the Qvevri (an earthenware vessel used to store and age wine for thousands of years).`
        },
        {
          text: `Georgia is generally considered the 'cradle of wine',
          as archaeologists have traced the world's first known wine creation back to the people of the South Caucasus in 6,000BC.`
        }
      ]
    }
  }
}
