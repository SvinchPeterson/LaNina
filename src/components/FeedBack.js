'use strict'

const props = {
  padding: 'A B',
  flexFlow: 'column',
  justifyContent: 'flex-start',
  border: 'solid, black .5',
  borderWidth: '1px',
  boxSizing: 'border-box',
  minHeight: 'G',
  round: 'A',
  minWidth: 'H',
  gap: 'A1',
  position: 'relative',

  name: {
    margin: '0',
    fontWeight: '700',
    color: 'black .85',
    fontSize: 'D',
    alignSelf: 'flex-start',
    style: {
      textTransform: 'capitalize',
      letterSpacing: '-1px'
    }
  },

  p: {
    text: `This a must stay n worth every penny. The host was great, the place was great, great ambience, a quiet place but just few minutes walk to all the central points. The hospitality was great and the host was very helpful and accessible for all my needs. Special thanks to Gaia and Tato who actually received me like family and came in person while i was saying my bye too. I would really want to come back for a longer stay. Love the place and love u guys.`,
    color: 'black .65',
    letterSpacing: '.25px'
  },

  date: {
    text: 'January | 2022',
    color: 'black .85',
    alignSelf: 'flex-end',
    margin: 'auto - - -',
    fontSize: 'Z',
    fontWeight: '700',
    textTransform: 'uppercase'
  }
}

export const FeedBack = {
  props,

  name: {
    tag: 'caption',
    text: 'Ashitha'
  },
  p: {},
  date: {
    tag: 'h5'
  }
}
