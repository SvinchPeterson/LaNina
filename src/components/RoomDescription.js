'use strict'

import { Flex } from 'smbls'

const title = { tag: 'h3' }

const paragraph = { tag: 'p' }

const props = {
  flow: 'column',
  gap: 'A2',
  title: {
    fontSize: 'D',
    text: 'Ballerina',
    fontWeight: '700',
    color: 'cream2 .85',
    padding: '0 0 X 0',
    // letterSpacing: '.5px',
    style: {
      borderBottom: '1px solid rgba(248, 241, 227, .5)'
    }
  },

  paragraph: {
    text: 'The two-bedroom apartment of 72m2 on high first floor with open terrace, composed of living room with comfortable sofa bed for 1 person and 2 bedrooms  with King size bed and 2 single beds, private bathroom with shower, kitchen with a dining area, making the apartment comfortable for 5 people.',
    // fontSize: `${15 / 16}em`,
    maxWidth: `${450 / 16}em`,
    letterSpacing: '.5px',
    color: 'cream2 .75',
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
