'use strict'

import { Flex, Link } from 'smbls'

const props = {
  boxSize: 'F1 G1',
  background: 'blue',
  align: 'center center',
  style: {
    cursor: 'pointer',
    '@media only screen and (min-width: 1366px)': {
      '&:hover': {
        background: '#3A5A75',
        transition: 'background .3s ease-in-out',
        '> h5': {
          color: 'white',
          transform: 'scale(1.05)'
        }
      }
    },

    '@media only screen and (max-width: 1366px)': { borderRadius: '20px' }
  },
  '@tabletM': {
    minWidth: 'H'
  },
  '@mobileL': { minWidth: '100%' },

  title: {
    fontSize: `${12.5 / 16}em`,
    fontWeight: '500',
    textTransform: 'uppercase',
    color: 'silver',
    // padding: '- - A -',
    style: { letterSpacing: '2px', transition: 'transform .6s ease-in-out, color .6s ease-in-out' }
  }

}

export const TourTab = {
  extend: [Link, Flex],
  props,

  title: { tag: 'h5' }
}
