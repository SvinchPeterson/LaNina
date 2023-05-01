'use strict'

import { Flex } from 'smbls'

import { Map, Contact} from '../../components'


const props = {
  flow: 'column',
  width: 'fit-content',
  alignSelf: 'center',
  margin: 'E - E1 -',
  padding: 'E - - -',
  position: 'relative',
  '@maxTabletM': { width: '70%' },
  '@maxMobileM': { width: '90%' },

  title: {
    fontSize: `${11 / 16}em`,
    textTransform: 'uppercase',
    padding: '- - Z A2',
    letterSpacing: `${10 / 11}em`
  },

  map: {
    minHeight: 'G3',
    minWidth: `${800 / 16}em`,
    display: 'block',
    round: 'A2',
    border: 'none',
    style: {
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
    },
    '@maxTabletM': { minWidth: `100%` },
    '@maxHeightN': { minHeight: 'G'}
  },

  contact: {
    border: 'solid, black .75',
    borderWidth: '.65px 0 0 0',
    width: '95%',
    align: 'flex-start space-between',
    margin: 'A2 - - -',
    padding: 'Z - - -',
    alignSelf: 'center',
    '@maxMobileL': {
      flow: 'column',
      align: 'center flex-start',
      gap: 'A'
    },
    mailLocation: {
      '@maxMobileL': { textAlign: 'center' }
    }
  }
}

export const location = {
  tag: 'section',
  extend: Flex,
  props,
  attr: { id: 'location' },
  title: { text: 'location' },
  map: {extend: Map },
  contact: { extend: Contact }
}
