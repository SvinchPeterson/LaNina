'use strict'

import { Flex } from 'smbls'

const title = { tag: 'h3' }

const paragraph = { tag: 'p' }

const props = {
  flow: 'column',
  gap: 'A2',
  title: {
    fontSize: 'C',
    text: 'Ballerina',
    fontWeight: '500',
    color: 'orange3 .75',
    padding: '0 0 X 0',
    style: {
      letterSpacing: '2px',
      borderBottom: '1px solid rgba(248, 241, 227, .5)'
    }
  },

  paragraph: {
    text: 'The two-bedroom apartment of 72m2 on high first floor with open terrace, composed of living room with comfortable sofa bed for 1 person and 2 bedrooms  with King size bed and 2 single beds, private bathroom with shower, kitchen with a dining area, making the apartment comfortable for 5 people.',
    fontSize: `${15 / 16}em`,
    maxWidth: `${450 / 15}em`,
    color: 'cream2',
    fontWeight: '400',
    padding: '0 0 0 X'
  }
}

export const RoomDescription = {
  props,
  extend: Flex,

  title,
  paragraph
}
