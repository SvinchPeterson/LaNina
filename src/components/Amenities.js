'use strict'

import { Flex } from 'smbls'

import { List } from './List'



export const Amenities = {
  extend: List,

  title: { text: 'amenities'},
  list: {
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
}
