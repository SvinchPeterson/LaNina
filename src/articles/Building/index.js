'use strict'
import { Box, Grid, Img } from '@symbo.ls/symbols'
import { BuildingHistory } from '../../texts'

import LOCATION_PNG from '../../assets/icons/location.png'
import DOOR_HANGER_PNG from '../../assets/icons/door-hanger.png'
import CLOCK_PNG from '../../assets/icons/clock.png'
import BUBBLE_PNG from '../../assets/icons/bubble.png'
import APRON_PNG from '../../assets/icons/frying-pan.png'
import DOCUMENT_PNG from '../../assets/icons/document.png'
import PLAY_PNG from '../../assets/icons/play.png'
import WINE_COFFEE from '../../assets/icons/wine-coffee.png'
import ORNAMENT_PNG from '../../assets/images/sololaki/ornaments.png'
import SHELF_JPG from '../../assets/images/sololaki/shelf.jpg'

const placeFeature = {
  proto: [Grid, Box],
  props: {
    columns: 'repeat(4, 270px)',
    gap: 'A2',
    rowGap: 'A2',
    padding: 'F1 0',
    position: 'relative'
  },
  style: {
    width: '100%',
    // border: '2px solid red',
    backgroundAttachment: 'fixed',
    backgroundImage: 'url(' + SHELF_JPG + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    justifyContent: 'center',

    // backgroundImage: 'radial-gradient(rgba(42, 81, 61, .4), rgba(42, 81, 61, .8))',
    '&:before': {
      content: '""',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      background: 'linear-gradient(rgba(60, 84, 72, .35), rgba(60, 84, 72, .65))',
      // background: 'radial-gradient(rgba(60, 84, 72, .85),rgba(60, 84, 72, .9),rgba(60, 84, 72, 1), rgba(60, 84, 72, 1), rgba(60, 84, 72, .5))',
      zIndex: 5
      // backgroundAttachment: 'fixed'
    }
  },
  childProto: {
    proto: Box,
    props: {
      flexAlign: 'center flex-start',
      padding: 'A A2 A A',
      // background: 'cream2 .15',
      round: 'Y'
    },
    style: {
      zIndex: 10,
      backdropFilter: 'blur(2px)',
      border: '1px solid rgba(220, 187, 140, .1)',
      background: 'radial-gradient(rgba(248, 241, 227, .75), rgba(248, 241, 227, .85))'
    },
    // icon: {
    //   proto: [Img, Box],
    //   props: { boxSize: ' B', margin: '0 0 0 0' },
    //   style: { opacity: '.65' }
    // },
    icon: null,
    paragraph: {
      proto: Box,
      props: {
        fontSize: 'Z',
        flexFlow: 'column',
        gap: '0',
        flexAlign: 'flex-start flex-start'
      },
      title: {
        tag: 'caption',
        proto: Box,
        props: {
          fontWeight: '700',
          color: 'black .75'
        },
        style: {
          whiteSpace: 'nowrap',
          textTransform: 'uppercase',
          fontSize: '12.5px',
          letterSpacing: '.3px'
        }
      },
      p: {
        proto: Box,
        props: {
          padding: '0 0 0 U',
          color: 'black .65'
        },
        style: { letterSpacing: '.1px' }
      }
    }
  },

  ...[
    {
      icon: { props: { src: LOCATION_PNG } },
      paragraph: {
        title: { text: 'City center' },
        p: { text: '7 min from Liberty square' }
      }
    },

    {
      icon: { props: { src: DOOR_HANGER_PNG } },
      paragraph: {
        title: { text: 'Personal service' },
        p: { text: 'Feel yourself at home' }
      }
    },

    {
      icon: { props: { src: CLOCK_PNG } },
      paragraph: {
        title: { text: 'We work round the clock' },
        p: { text: 'Check-in possible 24 hours' }
      }
    },

    {
      icon: { props: { src: BUBBLE_PNG } },
      paragraph: {
        title: { text: 'Housekeeping' },
        p: { text: 'Weekly housekeeping' }
      }
    },

    {
      icon: { props: { src: APRON_PNG } },
      paragraph: {
        title: { text: 'Kitchen inside' },
        p: { text: 'Cook at home' }
      }
    },

    {
      icon: { props: { src: DOCUMENT_PNG } },
      paragraph: {
        title: { text: 'Accounting documents' },
        p: { text: 'Complete kit of accounting' }
      }
    },

    {
      icon: { props: { src: PLAY_PNG } },
      paragraph: {
        title: { text: 'Mutimediea' },
        p: { text: 'Vinyl player, Streaming' }
      }
    },

    {
      icon: { props: { src: WINE_COFFEE, boxSize: ' B2' } },
      paragraph: {
        title: { text: 'with compliments' },
        p: { text: 'Georgian wine, Coffee & Tea' }
      }
    }
  ]
}

const buildingHistory = {
  proto: [BuildingHistory, Box],
  props: {
    flexFlow: 'column',
    gap: 'B',
    maxWidth: `${650 / 14.3}em`,
    color: 'black .75',
    padding: '0 D1',
    // fontWeight: '500',
    fontFamily: 'Dejavu',
    '@tabletL': { maxWidth: `${650 / 15}em` },
    '@tabletS': { padding: '0 C1' },
    '@mobileM': { padding: '0 B2' },

    '@mobileXS': { padding: '0 B1' }
  },
  style: {
    // border: '2px solid red',
    textAlign: 'justify',
    wordSpacing: '-1px',
    fontSize: `${14.3 / 16}em`,
    lineHeight: `${21 / 14.3}em`,
    '@media only screen and (max-width: 480px)': { fontSize: `${14 / 16}em` },
    '> div': { lineHeight: '25px', letterSpacing: '.8px' }
  }
}

export default {
  proto: Box,
  props: {
    flexFlow: 'column',
    padding: 'G2 0 E2 0',
    flexAlign: 'center flex-start',
    gap: 'G2',
    '@tabletL': { padding: 'F 0 0 0' },
    '@mobileM': { padding: 'F 0 0 0' }
  },
  attr: { id: 'residence' },

  buildingHistory,
  placeFeature
}
