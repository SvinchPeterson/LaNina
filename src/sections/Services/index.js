'use strict'
import { Block, Img, Text, Flex, Grid } from '@rackai/symbols'

import LAUNDRY_PNG from '../../assets/laundry.png'
import CLEAN_PNG from '../../assets/clean.png'
import TRANSFER_PNG from '../../assets/transfer.png'

const serviceItem = {
  proto: [Flex, Block],
  props: { gap: 'B' },
  style: {
    alignItems: 'center'
  },
  icon: {
    proto: Img,
    style: {
      width: `${100 / 16}em`,
      height: `${100 / 16}em`,
      opacity: '.65'
    }

  },
  service: {
    proto: [Block, Flex],
    props: { gap: 'Y' },
    style: { flexFlow: 'column' },
    h5: {
      proto: Text,
      style: {
        color: '#BDB171',
        letterSpacing: '2px'
      }
    },
    p: {
      proto: Text,
      style: {
        maxWidth: `${300 / 16}em`,
        color: 'rgba(0, 0, 0, .6)',
        fontFamily: 'Avenir Next',
        fontWeight: '500'
      }
    }
  }
}

export default {
  style: {
    paddingBottom: `${100 / 16}em`
  },
  h4: {
    proto: [Text, Block],
    props: {
      text: 'Services',
      padding: 'E 0 C 0'
    },
    style: {
      textAlign: 'center',
      color: 'rgba(0, 0, 0, .55)',
      letterSpacing: '10px',
      fontWeight: '500'
    }
  },

  services: {
    proto: [Grid],
    props: {
      columns: 'repeat(2, 1fr)',
      gap: 'E'
    },
    style: {
      width: 'fit-content',
      margin: '0 auto'
    },
    childProto: {
      proto: serviceItem
    },
    ...[
      {
        icon: { props: { src: TRANSFER_PNG } },
        service: {
          h5: { props: { text: 'Transfer' } },
          p: { props: { text: 'One-to-one service designed to fit your needs and preferences, with around-the-clock support while you travel.' } }
        }
      },
      {
        icon: { props: { src: CLEAN_PNG } },
        service: {
          h5: { props: { text: 'Cleaning' } },
          p: { props: { text: 'One-to-one service designed to fit your needs and preferences, with around-the-clock support while you travel.' } }
        }
      },
      {
        style: {
          gridColumnStart: 1,
          gridColumnEnd: 'span 2',
          // display: 'flex',
          justifyContent: 'center'
        },
        icon: { props: { src: LAUNDRY_PNG } },
        service: {
          h5: { props: { text: 'Laundry' } },
          p: { props: { text: 'One-to-one service designed to fit your needs and preferences, with around-the-clock support while you travel.' } }
        }
      }
    ]
  }
}
