'use strict'
import { Grid, Img } from 'smbls'

import { Feature, SectionTitle } from '../../components'
import SHELF_JPG from '../../assets/images/sololaki/shelf.jpg'
import SCROLL_PNG from '../../assets/icons/scroll.png'

const title = {
  proto: SectionTitle,
  props: {
    text: 'Features',
    padding: '0 0 Z E',
    css: {
      alignSelf: 'flex-start',
      zIndex: '10',
      '@media only screen and (max-width: 1366px)': {
        alignSelf: 'center',
        marginTop: `${-550 / 19}em`
      },
      '@media only screen and (max-width: 768px)': {
        marginTop: `${-530 / 19}em`
      },

      '@media only screen and (max-width: 560px)': {
        marginTop: `${-435 / 19}em`
      }

    },

    '@tabletL': {
      position: 'absolute',
      width: `${680 / 19}em`,
      padding: '0 0 A 0'
    },
    '@mobileL': {
      width: 'fit-content',
      left: `${100 / 19}em`
    },
    '@mobileM': {
      width: 'fit-content',
      left: `${50 / 19}em`
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
    display: 'none',
    flexFlow: 'column',
    flexAlign: 'center center',
    css: {
      writingMode: 'vertical-rl',
      textOrientation: 'upright',
      textTransform: 'uppercase'
    },
    '@mobileL': { display: 'block' },
    '@mobileM': { left: `${30 / 12}em` },
    '@mobileXS': {
      left: `${13 / 12}em`
    },

    caption: { text: 'scroll' }
  },

  caption: {},
  icon: {
    proto: Img,
    props: {
      src: SCROLL_PNG,
      boxSize: 'A A',
      display: 'block',
      position: 'absolute',
      bottom: '-30px',
      left: '50%',
      css: {
        transform: 'translate(-50%, -50%)'
      }
    }
  }
}

const props = {
  flexAlign: 'center center',
  flexFlow: 'column',
  position: 'relative',
  gap: '0',
  css: {
    width: '100%',
    minHeight: '100%'
  },
  // '@tabletL': { padding: 'F 0 F 0' },

  content: {
    columns: `repeat(4, ${270 / 16}em)`,
    gap: 'A2',
    padding: 'D2 E',
    position: 'relative',
    '@tabletL': {
      columns: `repeat(2, ${340 / 16}em)`,
      height: '100%'
    },
    '@mobileL': {
      flexFlow: 'column',
      maxHeight: `${500 / 16}em`,
      flexAlign: 'center flex-start'
    },
    '@mobileM': {
      maxHeight: `${400 / 16}em`
    },

    css: {
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
        alignContent: 'center'
      },
      '@media only screen and (max-width: 768px)': {
        overflowY: 'auto',
        justifyContent: 'flex-start',
        background: 'radial-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .15))',
        borderTop: '1px solid rgba(248, 241, 227, .3)'
      },
      '&:before': {
        content: '""',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        background: 'radial-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .6))',
        zIndex: 5,
        '@media only screen and (max-width: 1366px)': {
          background: 'radial-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .15))'
        },
        '@media only screen and (max-width: 768px)': {
          background: 'radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))'
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
    proto: Grid,
    childProto: {
      proto: Feature
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
  // more

}
