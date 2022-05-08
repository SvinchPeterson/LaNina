'use strict'
import { Box, Text } from '@symbo.ls/symbols'

import { locationText, distanceText, transferText } from '../../texts'

import style from './style'

const paragraph = {
  tag: 'p',
  proto: [locationText, Box],
  props: { padding: '0 A E A' }

}

const map = {
  tag: 'iframe',
  proto: Box,
  attr: {
    src: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAtj5iaocoLdNMIS2JBIymMUQTmds8_nlI&q=Lanina+Residence',
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
    padding: 'B 0 G 0'
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
