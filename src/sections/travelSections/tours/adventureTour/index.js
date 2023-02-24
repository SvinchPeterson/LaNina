'use strict'

import { Flex } from 'smbls'

import { tour } from '../tour'

import { adventureTour } from './adventureTour'

export const adventure = {
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
    title: { text: 'tour', span: { text: 'adventure' } }
  },

  class: {
    show: (element, state) => state.activeAdventureTour
      ? { display: 'block' }
      : { display: 'none' }
  },

  title: { extend: Flex, span: {} },
  tours: {
    adventureTour
  }
}
