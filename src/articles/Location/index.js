'use strict'
import { Block, Text } from '@rackai/symbols'

import { locationText, distanceText, transferText } from '../../texts'

import style from './style'

const paragraph = {
  tag: 'p',
  proto: [locationText, Block],
  props: { padding: '0 0 D 0' }

}

const map = {
  tag: 'iframe',
  proto: Block,
  attr: {
    src: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAtj5iaocoLdNMIS2JBIymMUQTmds8_nlI&q=Lanina+Residence',
    allowfullscreen: true
  }
}

const airPort = {
  proto: Block,
  props: {
    flexFlow: 'column',
    flexAlign: 'center center',
    gap: 'C'
  },

  childProto: {
    tag: 'p',
    proto: [Block, Text]
  },
  ...[
    { proto: distanceText },

    {
      proto: transferText,
      props: {
        flexFlow: 'column',
        flexAlign: 'flex-start flex-start',
        gap: 'W2'
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
  proto: Block,
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
    proto: Block,
    props: {
      flexAlign: 'center center',
      gap: 'B'
    },

    map,
    airPort
  }
}
