'use strict'

const title = { tag: 'h3' }

const paragraph = { tag: 'p' }

const props = {

  title: {
    fontSize: 'E',
    text: 'Ballerina',
    fontWeight: '700',
    color: 'orange3',
    padding: '0 0 X 0'
  },

  paragraph: {
    text: 'The two-bedroom apartment of 72m2 on high first floor with open terrace, composed of living room with comfortable sofa bed for 1 person and 2 bedrooms  with King size bed and 2 single beds, private bathroom with shower, kitchen with a dining area, making the apartment comfortable for 5 people.',
    fontSize: `${15 / 16}em`,
    maxWidth: `${450 / 15}em`,
    color: 'cream2',
    fontWeight: '400'
  }
}

export const RoomDescription = {
  props,

  title,
  paragraph
}
