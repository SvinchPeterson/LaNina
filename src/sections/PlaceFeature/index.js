'use strict'
import { Grid, Img } from 'smbls'

import { Feature, SectionTitle } from '../../components'
import SHELF_JPG from '../../assets/images/sololaki/shelf.jpg'
import SCROLL_PNG from '../../assets/icons/scroll.png'

const title = {
  extend: SectionTitle,
  props: {
    text: 'Services & Facilities',
    padding: '0 0 Z D',
    '@tabletL': {
      width: `${690 / 23}em`,
      padding: '0 0 A 0'
    },
    '@mobileL': {
      padding: '0 0 A C',
      width: `${400 / 23}em`
    },
    '@mobileS': {
      fontSize: 'B',
      width: `${270 / 23}em`,
      padding: '0 0 Y 0'
    },

    style: {
      alignSelf: 'flex-start',
      zIndex: '30',
      '@media only screen and (max-width: 1366px)': {
        alignSelf: 'center'
      }
    }
  }
}

const scroll = {
  props: {
    position: 'absolute',
    left: `${60 / 12}em`,
    fontWeight: '900',
    fontSize: `${12 / 16}em`,
    top: '45%',
    flexFlow: 'column',
    flexAlign: 'center center',
    style: {
      writingMode: 'vertical-rl',
      textOrientation: 'upright',
      textTransform: 'uppercase',
      display: 'none',
      '@media only screen and (max-height: 600px)': { display: 'block' }
    },
    '@mobileL': { style: { display: 'block' } },
    '@mobileM': { left: `${30 / 12}em` },
    '@mobileXS': {
      left: `${13 / 12}em`
    },

    caption: { text: 'scroll' }
  },

  caption: {},
  icon: {
    extend: Img,
    props: {
      src: SCROLL_PNG,
      boxSize: 'A A',
      display: 'block',
      position: 'absolute',
      bottom: '-30px',
      left: '50%',
      style: {
        transform: 'translate(-50%, -50%)'
      }
    }
  }
}

const props = {
  flexAlign: 'center center',
  flexFlow: 'column',
  position: 'relative',
  '@tabletL': { flexAlign: 'center center' },
  style: {
    width: '100%',
    minHeight: '100%',
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0',
      zIndex: '10',
      '@media only screen and (max-width: 1366px)': { background: 'rgba(0, 0, 0, .05)' }
    }
  },

  content: {
    width: '100%',
    position: 'relative',
    '@mobileL': {
      width: 'fit-content'
    },
    style: {
      '&:before': {
        content: '""',
        position: 'absolute',
        width: '100%',
        top: `${-45 / 16}em`,
        zIndex: '20',
        '@media only screen and (max-width: 768px)': {
          boxShadow: '-30px 0px 70px 40px rgba(248, 241, 227, .8)'
        }
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        bottom: `${-20 / 16}em`,
        zIndex: '10',
        '@media only screen and (max-width: 768px)': {
          boxShadow: '30px 0px 70px 50px rgba(248, 241, 227, .8)'
        }
      },

      '@media only screen and (max-width: 1366px) and (max-height: 600px)': {
        maxHeight: `${250 / 16}em`,
        overflowY: 'auto',
        padding: `${20 / 16}em 0`
      }
    },

    grid: {
      columns: `repeat(4, ${270 / 16}em)`,
      gap: 'A2',
      padding: 'D2 0',
      width: '100%',
      position: 'relative',
      '@tabletL': {
        columns: `repeat(2, ${340 / 16}em)`,
        height: 'fit-content',
        padding: '0 0'
      },
      '@mobileL': {
        flexFlow: 'column',
        maxHeight: `${370 / 16}em`,
        flexAlign: 'center flex-start',
        padding: 'Z2 0'
      },

      style: {
        boxSizing: 'border-box',
        width: '100%',
        backgroundAttachment: 'fixed',
        backgroundImage: 'url(' + SHELF_JPG + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        justifyContent: 'center',
        '@media only screen and (max-width: 1366px)': {
          backgroundAttachment: 'initial',
          backgroundImage: 'none',
          alignContent: 'start'
        },
        '@media only screen and (max-width: 768px)': {
          overflowY: 'auto',
          justifyContent: 'flex-start'
        },
        '&:before': {
          content: '""',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          background: 'radial-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .6))',
          '@media only screen and (max-width: 1366px)': {
            display: 'none'
          }

        }
      }
    }
  }
}

export const placeFeature = {
  tag: 'section',
  props,
  attr: { id: 'features' },

  title,
  scroll,
  content: {
    grid: {
      extend: Grid,
      childExtend: {
        extend: Feature
      },

      ...[
        {
          paragraph: {
            title: { text: 'City center' },
            p: { text: '7 min from Liberty square' }
          }
        },

        {
          paragraph: {
            title: { text: 'Personal service' },
            p: { text: 'Feel yourself at home' }
          }
        },

        {
          paragraph: {
            title: { text: 'We work round the clock' },
            p: { text: 'Check-in possible 24 hours' }
          }
        },

        {
          paragraph: {
            title: { text: 'Housekeeping' },
            p: { text: 'Weekly housekeeping' }
          }
        },

        {
          paragraph: {
            title: { text: 'Kitchen inside' },
            p: { text: 'Cook at home' }
          }
        },

        {
          paragraph: {
            title: { text: 'Accounting documents' },
            p: { text: 'Complete kit of accounting' }
          }
        },

        {
          paragraph: {
            title: { text: 'Mutimediea' },
            p: { text: 'Vinyl player, Streaming' }
          }
        },

        {
          paragraph: {
            title: { text: 'with compliments' },
            p: { text: 'Georgian wine, Coffee & Tea' }
          }
        }
      ]
    }

  }
}
