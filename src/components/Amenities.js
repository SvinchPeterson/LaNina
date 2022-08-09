'use strict'
import { Grid } from 'smbls'

const list = {
  proto: Grid,
  props: {
    columns: 'repeat(2, 1fr)',
    color: 'cream2',
    padding: 'Z2 0 0 Y2',
    css: { borderTop: '1px solid rgba(248, 241, 227, 1)' }
  },
  childProto: {
    props: {
      lineHeight: '25px',
      fontSize: `${14 / 16}em`,
      flexAlign: 'center flex-start',
      gap: 'Z1',
      css: {
        '&:before': {
          content: '""',
          width: '3px',
          height: '3px',
          background: 'rgba(248, 241, 227, 1)',
          borderRadius: '100%',
          display: 'block'
        }
      }
    }
  },
  ...[
    { props: { text: 'Wifi' } },
    { props: { text: 'Open terrace' } },
    { props: { text: 'Private entrance' } },
    { props: { text: 'Air conditioning (Portable)' } },
    { props: { text: 'Heating' } },
    { props: { text: 'Ironing facilities' } },
    { props: { text: 'Drying rack' } },
    { props: { text: 'Mosquito net' } },
    { props: { text: 'Carbon monoxide alarm' } },
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

const props = {
  title: {
    text: 'amenities',
    fontSize: 'Z',
    fontWeight: '700',
    color: 'orange3',
    padding: '0 0 Z2 0',
    css: {
      textTransform: 'uppercase'
    }
  }
}

export const Amenities = {
  props,

  title: {},
  list
}
