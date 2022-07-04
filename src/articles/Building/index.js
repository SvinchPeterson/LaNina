'use strict'
import { Box, Grid, Img } from '@symbo.ls/symbols'
import { BuildingHistory } from '../../texts'

import LOCATION_PNG from '../../assets/icons/location.png'
import DOOR_HANGER_PNG from '../../assets/icons/door-hanger.png'
import CLOCK_PNG from '../../assets/icons/clock.png'
import BUBBLE_PNG from '../../assets/icons/bubble.png'
import APRON_PNG from '../../assets/icons/apron.png'
import DOCUMENT_PNG from '../../assets/icons/document.png'
import PLAY_PNG from '../../assets/icons/play.png'
import WINE_COFFEE from '../../assets/icons/wine-coffe.png'

const placeFeature = {
  proto: Grid,
  props: {
    columns: 'repeat(4, 1fr)',

  },
  style: {
    border: '2px solid red'
  },
  childProto: {
    proto: Box,
    props: {
      flexAlign: 'center flex-start',
      gap: 'Y'
    },
    icon: {
      proto: [Img, Box],
      props: { boxSize: ' B2' }
    },
    paragraph: {
      title: {
        tag: 'caption',
        proto: Box,
        style: { whiteSpace: 'nowrap' }
      },
      p: {
        proto: Box
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
        p: { text: 'Weekly housekeeping and linen change' }
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
        p: { text: 'Vinyl record player, Streaming service' }
      }
    },

    {
      icon: { props: { src: WINE_COFFEE } },
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
    maxWidth: `${700 / 15}em`,
    color: 'black .35',
    padding: '0 D',
    '@tabletL': { maxWidth: `${650 / 15}em` },
    '@tabletS': { padding: '0 C1' },
    '@mobileM': { padding: '0 B2' },

    '@mobileXS': { padding: '0 B1' }
  },
  style: {
    textAlign: 'justify',
    fontSize: `${15 / 16}em`,
    lineHeight: `${25 / 15}em`,
    '@media only screen and (max-width: 480px)': { fontSize: `${14 / 16}em` }
  }
}

export default {
  proto: Box,
  props: {
    flexFlow: 'column',
    padding: 'G2 0 E2 0',
    flexAlign: 'center flex-start',
    gap: 'E',
    '@tabletL': { padding: 'F 0 0 0' },
    '@mobileM': { padding: 'F 0 0 0' }
  },
  attr: { id: 'residence' },

  buildingHistory,
  placeFeature
}
