'use strict'

import { Flex, Link } from 'smbls'

const image = {}
const title = {}

const props = {
  width: 'fit-content',

  color: 'white',
  flow: 'column',
  gap: 'A',

  image: {
    boxSize: 'G G3',
    background: 'white',
    round: 'Y',
    style: {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      '@media only screen and (max-height: 600px)': { height: '250px' }
    }
  },

  title: {
    text: 'cultural tour',
    textTransform: 'uppercase',
    fontWeight: '700',
    padding: 'Z 0 0 0',
    width: '93%',
    margin: '0 auto',
    opacity: '.85',
    style: { borderTop: '.5px solid white' }
  }
}

export const TourTab = {
  extend: [Link, Flex],
  props,

  on: {
    click: (event, element, state) => {
      state.update({ activeTour: true })
    }
  },

  image,
  title
}
