'use strict'

const props = {
  maxWidth: 'G1',
  padding: 'C - C B',
  background: 'cream2',
  round: 'Y',
  '@mobileS': {
    maxWidth: '100%',
    padding: 'C Z C Z2'
  },

  title: {
    text: 'city center',
    fontSize: 'Z',
    fontWeight: '700',
    textTransform: 'uppercase'
  },

  p: {
    text: '7 min from Liberty square',
    padding: 'V2 - - -',
    fontSize: `${14 / 16}em`,
    color: 'black .8'
  }
}

export const Feature = {
  props,

  title: { tag: 'h5' },
  p: {}
}
