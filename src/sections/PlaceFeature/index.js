'use strict'
import { Grid, Img, Flex } from 'smbls'

import { Feature, SectionTitle } from '../../components'
import SHELF_JPG from '../../assets/images/sololaki/shelf.jpg'
import SCROLL_PNG from '../../assets/icons/scroll.png'

const title = {
  extend: SectionTitle,
  props: {
    text: 'Services & Facilities',
    padding: '0 0 Z D',
    '@tabletL': {
      width: 'H',
      padding: '0 0 A 0'
    },
    '@mobileL': {
      padding: '0 0 A C',
      width: 'G'
    },
    '@mobileS': {
      fontSize: 'B',
      width: 'F',
      padding: '0 0 Y 0'
    }
  }
}

const scroll = {
  extend: Flex,
  props: {
    position: 'absolute',
    left: 'D1',
    fontWeight: '700',
    fontSize: 'Y',
    top: '45%',
    flow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    style: {
      writingMode: 'vertical-rl',
      textOrientation: 'upright',
      textTransform: 'uppercase',
      display: 'none',
      '@media only screen and (max-height: 600px)': { display: 'block' }
    },
    '@mobileL': { style: { display: 'block' } },
    '@mobileM': { left: 'C' },
    '@mobileXS': { left: 'A1' },
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
      bottom: '-B1',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  }
}

const props = {
  justifyContent: 'center',
  flow: 'column',
  position: 'relative',
  minHeight: '100%',
  '@tabletL': {
    flexAlign: 'center center',
    background: 'black .05'
  },

  content: {
    width: '100%',
    position: 'relative',
    '@mobileL': { width: 'fit-content' },
    style: {
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
      backgroundImage: 'url(' + SHELF_JPG + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      justifyContent: 'center',
      ':before': {
        content: '""',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        background: 'radial-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .6))',
        '@tabletL': { display: 'none' }
      },
      style: {
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        '@media only screen and (max-width: 1366px)': {
          backgroundAttachment: 'initial',
          backgroundImage: 'none'
        }
      },
      '@tabletL': {
        columns: `repeat(2, ${340 / 16}em)`,
        height: 'fit-content',
        padding: '0 0'
      },
      '@mobileL': {
        flexFlow: 'column',
        maxHeight: `${370 / 16}em`,
        flexAlign: 'center flex-start',
        padding: 'Z2 0',
        style: { overflowY: 'auto' }
      }
    }
  }
}

export const placeFeature = {
  tag: 'section',
  extend: Flex,
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
