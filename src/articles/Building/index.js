'use strict'
import { Box, Img } from '@symbo.ls/symbols'
import { BuildingHistory } from '../../texts'

import LOCATION_PNG from '../../assets/icons/location.png'
import DOOR_HANGER_PNG from '../../assets/icons/door-hanger.png'
import CLOCK_PNG from '../../assets/icons/clock.png'
import BUBBLE_PNG from '../../assets/icons/bubble.png'
import APRON_PNG from '../../assets/icons/apron.png'
import DOCUMENT_PNG from '../../assets/icons/document.png'
import PLAY_PNG from '../../assets/icons/play.png'

const placeFeature = {
  proto: Box,
  style: {
    border: '2px solid red'
  },
  childProto: {
    proto: Box,
    icon: {
      proto: Img,
      props: {}
    },
    paragraph: {
      title: {},
      p: {}
    }
  },

  ...[
    {
      icon: { props: { src: 'LOCATION_PNG' } }
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {}
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
    '@tabletL': { padding: 'F 0 0 0' },
    '@mobileM': { padding: 'F 0 0 0' }
  },
  attr: { id: 'residence' },

  buildingHistory,
  placeFeature
}
