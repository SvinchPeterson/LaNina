'use strict'

import { Flex } from 'smbls'

import { tour } from '../tour'

import { exclusiveTour } from './exclusiveTour'

export const exclusive = {
  extend: tour,
  props: {
    padding: 'D - - -',
    style: {
      '@media only screen and (max-height: 800px)': {
        paddingTop: `${50 / 16}em`
      },
      '@media only screen and (max-height: 550px)': {
        paddingTop: `${20 / 16}em`
      }
    },
    title: { text: 'tour', span: { text: 'exclusive' } }
  },

  class: {
    show: (element, state) => state.activeExclusiveTour
      ? { display: 'block' }
      : { display: 'none' }
  },

  title: { extend: Flex, span: {} },
  tours: {
    exclusiveTour
  }
}
