'use strict'

import { Flex } from 'smbls'

const list = {
  childExtend: { childExtend: Flex },
  ...[
    {
      ...[
        { props: { text: 'Wifi' } },
        { props: { text: 'Open terrace' } },
        { props: { text: 'Private entrance' } },
        { props: { text: 'Air conditioning' } },
        { props: { text: 'Heating' } },
        { props: { text: 'Ironing facilities' } },
        { props: { text: 'Drying rack' } },
        { props: { text: 'Mosquito net' } },
        { props: { text: 'Carbon monoxide alarm' } }
      ]
    },
    {
      ...[
        { props: { text: 'Smoke alarm' } },
        { props: { text: 'Vinyl Media Player' } },
        { props: { text: 'Smart TV' } },
        { props: { text: 'Bed linens' } },
        { props: { text: 'Clothing storage' } },
        { props: { text: 'Hangers' } },
        { props: { text: 'Extra pillows and blankets' } },
        { props: { text: 'Robes & Slippers' } },
        { props: { text: 'Books and journals' } }
      ]
    }
  ]
}

const props = {
  title: {
    text: 'amenities',
    fontSize: 'Z',
    fontWeight: '700',
    color: 'cream2',
    textAlign: 'flex-start',
    letterSpacing: '5px',
    padding: '- - Y1 Y',
    textTransform: 'uppercase'
  },

  list: {
    flexAlign: 'flex-start flex-start',
    padding: 'Z 0 0 X',
    gap: 'C',
    childProps: {
      fontSize: `${15.5 / 16}em`,
      lineHeight: `${25 / 15.5}em`,
      flexFlow: 'column',
      letterSpacing: '.3px',
      childProps: {
        align: 'center flex-start',
        color: 'cream2 .75',
        gap: 'Y2',
        ':before': {
          content: '""',
          boxSize: 'X X',
          display: 'block',
          background: 'cream2 .5',
          round: '100%'
        }
      }
    }
  }
}

export const Amenities = {
  props,

  title: {},
  list
}
