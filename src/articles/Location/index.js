'use strict'
import { Box, Text } from '@symbo.ls/symbols'

import { locationText, distanceText, transferText } from '../../texts'

import style from './style'

const paragraph = {
  tag: 'p',
  proto: [locationText, Box],
  props: { padding: '0 A E A', color: 'black .35' }

}

const map = {
  tag: 'iframe',
  proto: Box,
  attr: {
    src: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAtj5iaocoLdNMIS2JBIymMUQTmds8_nlI&q=BB+Residence',
    allowfullscreen: true
  }
}

const airPort = {
  proto: Box,
  props: {
    flexFlow: 'column',
    flexAlign: 'center center',
    gap: 'C'
  },

  childProto: {
    tag: 'p',
    proto: [Box, Text]
  },
  ...[
    { proto: distanceText },

    {
      proto: transferText,
      props: {
        flexFlow: 'column',
        flexAlign: 'flex-start flex-start',
        gap: 'Y'
      },

      caption: {
        proto: Text,
        props: {
          text: 'transfer'
        }
      }
    }
  ]
}

export default {
  tag: 'article',
  proto: Box,
  props: {
    flexFlow: 'column',
    gap: '0',
    padding: 'D2 0 G 0'
  },
  attr: {
    id: 'location'
  },
  style,

  paragraph,

  location: {
    tag: 'section',
    proto: Box,
    props: {
      flexAlign: 'center center',
      gap: 'D'
    },

    map,
    airPort
  }
}
